var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// astro:db:astro:db
var astro_db_exports = {};
__export(astro_db_exports, {
  GridCell: () => GridCell,
  db: () => db
});
__reExport(astro_db_exports, drizzle_star);
__reExport(astro_db_exports, config_star);
import { asDrizzleTable, createRemoteDatabaseClient } from "@astrojs/db/runtime";
import * as drizzle_star from "@astrojs/db/runtime/drizzle";
import * as config_star from "@astrojs/db/runtime/config";
var db = await createRemoteDatabaseClient("326d8a83c554ee243f854131e25a93d5a565a379:twbsix0a30r0guz4wsm6dwjtygwq", "https://db.services.astro.build");
var GridCell = asDrizzleTable("GridCell", { "columns": { "x": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "x", "collection": "GridCell", "primaryKey": false, "optional": false } }, "y": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "y", "collection": "GridCell", "primaryKey": false, "optional": false } }, "value": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "value", "collection": "GridCell", "primaryKey": false, "optional": false } } }, "deprecated": false }, false);

// db/seed.ts
for (let y = 0; y < 40; y++) {
  for (let x = 0; x < 80; x++) {
    await db.insert(GridCell).values({ x, y, value: "#333" });
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXN0cm86ZGI6YXN0cm86ZGIiLCAiZGIvc2VlZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG5pbXBvcnQge2FzRHJpenpsZVRhYmxlLCBjcmVhdGVSZW1vdGVEYXRhYmFzZUNsaWVudH0gZnJvbSBcIkBhc3Ryb2pzL2RiL3J1bnRpbWVcIjtcblxuZXhwb3J0IGNvbnN0IGRiID0gYXdhaXQgY3JlYXRlUmVtb3RlRGF0YWJhc2VDbGllbnQoXCIzMjZkOGE4M2M1NTRlZTI0M2Y4NTQxMzFlMjVhOTNkNWE1NjVhMzc5OnR3YnNpeDBhMzByMGd1ejR3c202ZHdqdHlnd3FcIiwgaW1wb3J0Lm1ldGEuZW52LkFTVFJPX1NUVURJT19SRU1PVEVfREJfVVJMID8/IFwiaHR0cHM6Ly9kYi5zZXJ2aWNlcy5hc3Ryby5idWlsZFwiKTtcbmV4cG9ydCAqIGZyb20gXCJAYXN0cm9qcy9kYi9ydW50aW1lL2RyaXp6bGVcIjtcbmV4cG9ydCAqIGZyb20gXCJAYXN0cm9qcy9kYi9ydW50aW1lL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgR3JpZENlbGwgPSBhc0RyaXp6bGVUYWJsZShcIkdyaWRDZWxsXCIsIHtcImNvbHVtbnNcIjp7XCJ4XCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJzY2hlbWFcIjp7XCJ1bmlxdWVcIjpmYWxzZSxcImRlcHJlY2F0ZWRcIjpmYWxzZSxcIm5hbWVcIjpcInhcIixcImNvbGxlY3Rpb25cIjpcIkdyaWRDZWxsXCIsXCJwcmltYXJ5S2V5XCI6ZmFsc2UsXCJvcHRpb25hbFwiOmZhbHNlfX0sXCJ5XCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJzY2hlbWFcIjp7XCJ1bmlxdWVcIjpmYWxzZSxcImRlcHJlY2F0ZWRcIjpmYWxzZSxcIm5hbWVcIjpcInlcIixcImNvbGxlY3Rpb25cIjpcIkdyaWRDZWxsXCIsXCJwcmltYXJ5S2V5XCI6ZmFsc2UsXCJvcHRpb25hbFwiOmZhbHNlfX0sXCJ2YWx1ZVwiOntcInR5cGVcIjpcInRleHRcIixcInNjaGVtYVwiOntcInVuaXF1ZVwiOmZhbHNlLFwiZGVwcmVjYXRlZFwiOmZhbHNlLFwibmFtZVwiOlwidmFsdWVcIixcImNvbGxlY3Rpb25cIjpcIkdyaWRDZWxsXCIsXCJwcmltYXJ5S2V5XCI6ZmFsc2UsXCJvcHRpb25hbFwiOmZhbHNlfX19LFwiZGVwcmVjYXRlZFwiOmZhbHNlfSwgZmFsc2UpXG5cdCIsICJpbXBvcnQgeyBkYiwgR3JpZENlbGwgfSBmcm9tIFwiYXN0cm86ZGJcIjtcblxuZm9yIChsZXQgeSA9IDA7IHkgPCA0MDsgeSsrKSB7XG4gIGZvciAobGV0IHggPSAwOyB4IDwgODA7IHgrKykge1xuICAgIGF3YWl0IGRiLmluc2VydChHcmlkQ2VsbCkudmFsdWVzKHsgeDogeCwgeTogeSwgdmFsdWU6IFwiIzMzM1wiIH0pO1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFKQSxTQUFRLGdCQUFnQixrQ0FBaUM7QUFHekQsOEJBQWM7QUFDZCw2QkFBYztBQUZQLElBQU0sS0FBSyxNQUFNLDJCQUEyQix5RUFBdUgsaUNBQWlDO0FBSXBNLElBQU0sV0FBVyxlQUFlLFlBQVksRUFBQyxXQUFVLEVBQUMsS0FBSSxFQUFDLFFBQU8sVUFBUyxVQUFTLEVBQUMsVUFBUyxPQUFNLGNBQWEsT0FBTSxRQUFPLEtBQUksY0FBYSxZQUFXLGNBQWEsT0FBTSxZQUFXLE1BQUssRUFBQyxHQUFFLEtBQUksRUFBQyxRQUFPLFVBQVMsVUFBUyxFQUFDLFVBQVMsT0FBTSxjQUFhLE9BQU0sUUFBTyxLQUFJLGNBQWEsWUFBVyxjQUFhLE9BQU0sWUFBVyxNQUFLLEVBQUMsR0FBRSxTQUFRLEVBQUMsUUFBTyxRQUFPLFVBQVMsRUFBQyxVQUFTLE9BQU0sY0FBYSxPQUFNLFFBQU8sU0FBUSxjQUFhLFlBQVcsY0FBYSxPQUFNLFlBQVcsTUFBSyxFQUFDLEVBQUMsR0FBRSxjQUFhLE1BQUssR0FBRyxLQUFLOzs7QUNMOWYsU0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsV0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsVUFBTSxHQUFHLE9BQU8sUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFNLEdBQU0sT0FBTyxPQUFPLENBQUM7QUFBQSxFQUNoRTtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
