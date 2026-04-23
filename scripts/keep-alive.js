#!/usr/bin/env node

const targetUrl = process.env.KEEP_ALIVE_URL;
const intervalMs = Number.parseInt(process.env.KEEP_ALIVE_INTERVAL_MS || "120000", 10);
const timeoutMs = Number.parseInt(process.env.KEEP_ALIVE_TIMEOUT_MS || "10000", 10);

if (!targetUrl) {
  console.error("[keep-alive] Missing KEEP_ALIVE_URL environment variable.");
  process.exit(1);
}

if (!Number.isFinite(intervalMs) || intervalMs < 1000) {
  console.error("[keep-alive] KEEP_ALIVE_INTERVAL_MS must be a number >= 1000.");
  process.exit(1);
}

if (!Number.isFinite(timeoutMs) || timeoutMs < 1000) {
  console.error("[keep-alive] KEEP_ALIVE_TIMEOUT_MS must be a number >= 1000.");
  process.exit(1);
}

const now = () => new Date().toISOString();

async function ping() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const startedAt = Date.now();
    const response = await fetch(targetUrl, {
      method: "GET",
      signal: controller.signal,
      headers: {
        "user-agent": "modavista-keep-alive/1.0"
      }
    });

    const elapsed = Date.now() - startedAt;
    console.log(`[${now()}] OK ${response.status} in ${elapsed}ms -> ${targetUrl}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[${now()}] FAIL ${message} -> ${targetUrl}`);
  } finally {
    clearTimeout(timer);
  }
}

console.log(`[keep-alive] Started for ${targetUrl} every ${intervalMs}ms`);
void ping();
setInterval(() => {
  void ping();
}, intervalMs);
