import Container from "@/components/Container";
import DirectionCard from "@/components/DirectionCard";
import Section from "@/components/Section";
import { getGeometryChildren } from "@/content/manifest";

export default function GeometryPageEn() {
  const children = getGeometryChildren("en");
  return (
    <Container>
      <Section title="Geometry Reconstruction" subtitle="Multimodal geometry modeling for scenes and hands">
        <div className="grid gap-6 md:grid-cols-2">
          {children.map((item) => (
            <DirectionCard
              key={item.slug}
              title={item.title}
              intro={item.summary ?? item.intro}
              href={`/en/directions/${item.slug}`}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
