import { notFound } from "next/navigation";
import DirectionDetail from "@/components/DirectionDetail";
import { getDirectionBySlug, getDirectionSlugs } from "@/content/manifest";

export function generateStaticParams() {
  return getDirectionSlugs().map((slug) => ({ slug }));
}

export default function DirectionDetailPageEn({ params }: { params: { slug: string } }) {
  const direction = getDirectionBySlug(params.slug, "en");
  if (!direction) return notFound();

  return <DirectionDetail title={direction.title} intro={direction.intro} media={direction.media} />;
}
