import { db, GridCell } from "astro:db";

export async function GET() {
  const cells = await db.select().from(GridCell).all();
  return new Response(JSON.stringify(cells), {
    headers: {
      "content-type": "application/json",
      "Cache-Control": "public, s-max-age=1, stale-while-revalidate=5",
    },
  });
}
