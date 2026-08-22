import { NextRequest, NextResponse } from "next/server";

const requiredFields = ["package", "firstName", "lastName", "postcode", "phone", "email"] as const;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Lead destination is not configured." }, { status: 503 });
  }

  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.website, 200)) {
    return NextResponse.json({ success: true });
  }

  const lead = {
    submittedAt: new Date().toISOString(),
    package: clean(body.package, 160),
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    postcode: clean(body.postcode, 16),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    notes: clean(body.notes, 2000),
    sourcePage: clean(body.sourcePage, 1000),
    campaign: clean(body.campaign, 200) || "Direct / organic",
  };

  if (requiredFields.some((field) => !lead[field])) {
    return NextResponse.json({ error: "Required lead details are missing." }, { status: 400 });
  }

  const delivery = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
    cache: "no-store",
  });

  if (!delivery.ok) {
    console.error("Lead delivery failed", delivery.status);
    return NextResponse.json({ error: "Lead delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
