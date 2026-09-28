import { NextRequest, NextResponse } from "next/server";

const USERNAME = "harrison";
const PASSWORD_HASH = "c8d19ea1862c2ccc044f4d1f9834ab98267e3ce74de72311d74f25b60d7dd2b6";

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

export async function proxy(request: NextRequest) {
  const authorization = request.headers.get("authorization");

  if (authorization?.startsWith("Basic ")) {
    try {
      const decoded = atob(authorization.slice(6));
      const separator = decoded.indexOf(":");
      const username = decoded.slice(0, separator);
      const password = decoded.slice(separator + 1);

      if (username === USERNAME && (await sha256(password)) === PASSWORD_HASH) {
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-dashboard-password", password);
        return NextResponse.next({ request: { headers: requestHeaders } });
      }
    } catch {
      // Invalid Basic authentication should fall through to a fresh prompt.
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="CURRENT Performance Dashboard"',
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
