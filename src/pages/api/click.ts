import { LRUCache } from "lru-cache";
const LIMIT = 30;
const tokenCache = new LRUCache<string, [number]>({
  max: LIMIT,
  ttl: 1000 * 30,
  noUpdateTTL: true,
  ttlAutopurge: true,
});

function checkRateLimit(res: Response, ip: string) {
  const tokenCount = tokenCache.get(ip) || [0];
  if (tokenCount[0] === 0) {
    tokenCache.set(ip, tokenCount);
  }
  tokenCount[0] += 1;

  const currentUsage = tokenCount[0];
  const isRateLimited = currentUsage >= LIMIT;
  if (isRateLimited) {
    res = new Response("Rate limit exceeded", { status: 429 });
  }
  res.headers.set("X-RateLimit-Limit", String(LIMIT));
  res.headers.set(
    "X-RateLimit-Remaining",
    String(isRateLimited ? 0 : LIMIT - currentUsage)
  );
  return res;
}

export async function POST({ request, clientAddress }: any) {
  const { x, y, value } = await request.json();
  if (x < 0 || x >= 80 || y < 0 || y >= 40) {
    return new Response("Invalid coordinates", { status: 400 });
  }
  let res = new Response();
  if (clientAddress) {
    res = checkRateLimit(res, clientAddress);
    if (res.status === 429) {
      return res;
    }
  }

  // !!!
  // TODO: Update the cell with the new value color
  // await db...
  // !!!

  return new Response(JSON.stringify({ success: true }), {
    headers: { ...res.headers, "content-type": "application/json" },
  });
}
