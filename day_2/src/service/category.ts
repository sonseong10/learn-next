import path from "path";
import { promises as fs } from "fs";

export type Category = {
  id: string;
  name: string;
  list: Array<{ title: string }>;
};

export const getCategorys = async (): Promise<Category[]> => {
  const filePath = path.join(process.cwd(), "data", "category.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

export const getCategory = async (
  id: string
): Promise<Category | undefined> => {
  const category = await getCategorys();
  return category.find((item) => item.name === id);
};
