import { notFound } from "next/navigation";
import DirectionDetail from "@/components/DirectionDetail";
import { getGeometryChildren } from "@/content/manifest";

export default function GeometryScenePageEn() {
  const item = getGeometryChildren("en").find((d) => d.slug === "geometry/scene");
  if (!item) return notFound();

  return <DirectionDetail title={`Geometry Reconstruction · ${item.title}`} intro={item.intro} media={item.media} />;
}
