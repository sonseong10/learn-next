import React from "react";
import { notFound } from "next/navigation";

type ICategoryDetailProps = {
  params: {
    slug: string;
  };
};
function CategoryDetail({ params }: ICategoryDetailProps) {
  if (params.slug !== "car" && params.slug !== "food") {
    notFound();
  }

  return <h1>{params.slug}Detail!</h1>;
}

export default CategoryDetail;

export function generateStaticParams() {
  const popularCategory = ["car", "food"];
  return popularCategory.map((category) => ({
    slug: category,
  }));
}
