import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CURRENT | Premium Home Security in South London",
  description:
    "Premium Pyronix alarm and Hikvision CCTV installation with transparent pricing across South London.",
  applicationName: "CURRENT Home Security",
  openGraph: {
    type: "website",
    siteName: "CURRENT Home Security",
    title: "CURRENT | Premium Home Security in South London",
    description:
      "Premium Pyronix alarm and Hikvision CCTV installation with transparent pricing across South London.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "CURRENT | Premium Home Security in South London",
    description:
      "Premium Pyronix alarm and Hikvision CCTV installation with transparent pricing across South London.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
