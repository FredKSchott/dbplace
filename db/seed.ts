import { db, GridCell } from "astro:db";

export default async function seed() {
  for (let y = 0; y < 40; y++) {
    await db.transaction(async (tx) => {
      for (let x = 0; x < 80; x++) {
        await tx.insert(GridCell).values({ x: x, y: y, value: "#333" });
      }
    });
  }
}
