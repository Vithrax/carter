import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import {
  int,
  mysqlTableCreator,
  unique,
  varchar,
} from "drizzle-orm/mysql-core";
import { type z } from "zod";

export const mysqlTable = mysqlTableCreator((name) => `carter_${name}`);

export const products = mysqlTable(
  "products",
  {
    id: int("id").primaryKey().notNull().autoincrement(),
    name: varchar("name", { length: 255 }).notNull(),
    userId: varchar("userId", { length: 255 }).notNull(),
  },
  (p) => ({
    unq: unique().on(p.name, p.userId),
  }),
);

const insertProductSchema = createInsertSchema(products);
const selectProductSchema = createSelectSchema(products);

export type Product = z.infer<typeof selectProductSchema>;
export type NewProduct = z.infer<typeof insertProductSchema>;
