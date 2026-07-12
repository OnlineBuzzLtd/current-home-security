const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : null;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  vercelProductionUrl ||
  "https://current-home-security.shaz786.chatgpt.site"
).replace(/\/$/, "");
