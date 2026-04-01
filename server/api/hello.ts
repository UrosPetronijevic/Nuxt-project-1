import { fruitsTable } from "../db/schema";
import { useDrizzle } from "../utils/drizzle";

export default defineEventHandler(async (event) => {
  //   await new Promise((resolve: any) => setTimeout(resolve, 3000));

  //   throw createError("Error was error of an errors error");

  const fruits = useDrizzle().select().from(fruitsTable).all();
  return {
    fruits,
  };
});
