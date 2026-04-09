export function getAppBaseUrl(req) {
  const configuredUrl = process.env.NEXTAUTH_URL;
  if (configuredUrl && configuredUrl.trim()) {
    return configuredUrl.trim().replace(/\/$/, "");
  }

  const forwardedProto = req?.headers?.["x-forwarded-proto"];
  const protocol = (Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto?.split(",")[0]) || "http";
  const forwardedHost = req?.headers?.["x-forwarded-host"];
  const host = (Array.isArray(forwardedHost) ? forwardedHost[0] : forwardedHost) || req?.headers?.host;

  if (host) {
    return `${protocol}://${host}`;
  }

  return "http://localhost:3000";
}
