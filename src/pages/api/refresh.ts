export async function GET() {

  // !!!
  // TODO: Update the cell with the new value color
  // const cells = ...
  // !!!
    
  const cells = [] as any[];
  return new Response(JSON.stringify(cells), {
    headers: {
      "content-type": "application/json",
      "Cache-Control": "public, max-age=1, stale-while-revalidate=5",
    },
  });
}
