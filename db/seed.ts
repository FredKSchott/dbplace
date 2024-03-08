import { db, GridCell } from "astro:db";

for (let y = 0; y < 40; y++) {
  for (let x = 0; x < 80; x++) {
    if (x < 40) continue;
    await db.insert(GridCell).values({ x: x, y: y, value: "#333" });
  }
}
