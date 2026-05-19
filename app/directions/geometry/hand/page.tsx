import { notFound } from "next/navigation";
import DirectionDetail from "@/components/DirectionDetail";
import { getGeometryChildren } from "@/content/manifest";

export default function GeometryHandPage() {
  const item = getGeometryChildren("zh").find((d) => d.slug === "geometry/hand");
  if (!item) return notFound();

  return (
    <DirectionDetail
      title={`几何重建 · ${item.title}`}
      intro={item.intro}
      media={item.media}
    />
  );
}

