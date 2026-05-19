import Container from "@/components/Container";
import DirectionCard from "@/components/DirectionCard";
import Section from "@/components/Section";
import { getGeometryChildren } from "@/content/manifest";

export default function GeometryPage() {
  const children = getGeometryChildren("zh");
  return (
    <Container>
      <Section title="几何重建" subtitle="聚焦场景与手部的多模态几何建模">
        <div className="grid gap-6 md:grid-cols-2">
          {children.map((item) => (
            <DirectionCard
              key={item.slug}
              title={item.title}
              intro={item.summary ?? item.intro}
              href={`/directions/${item.slug}`}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}

