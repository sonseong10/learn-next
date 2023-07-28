import React from "react";

type ICategoryDetailProps = {
  params: {
    slug: string;
  };
};
function CategoryDetail({ params }: ICategoryDetailProps) {
  return <h1>{params.slug}Detail!</h1>;
}

export default CategoryDetail;

export function generateStaticParams() {
  const popularCategory = ["car", "food"];
  return popularCategory.map((category) => ({
    slug: category,
  }));
}
