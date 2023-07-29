import React from "react";
import { notFound } from "next/navigation";
import { getCategory, getCategorys } from "@/service/category";

type ICategoryDetailProps = {
  params: {
    slug: string;
  };
};
async function CategoryDetail({ params: { slug } }: ICategoryDetailProps) {
  const category = await getCategory(slug);
  if (!category) {
    notFound();
  }

  return <h1>{category.name} Detail!</h1>;
}

export default CategoryDetail;

export async function generateStaticParams() {
  const popularCategory = await getCategorys();
  return popularCategory.map((category) => ({
    slug: category.name,
  }));
}
