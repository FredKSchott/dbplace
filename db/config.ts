import { defineDB, defineTable, column } from 'astro:db';

const GridCell = defineTable({
    columns: {
        x: column.number(),
        y: column.number(),
        value: column.text(),
    }
})
export default defineDB({
    tables: {GridCell},
})