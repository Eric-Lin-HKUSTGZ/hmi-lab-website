import Container from "@/components/Container";
import DirectionCard from "@/components/DirectionCard";
import Section from "@/components/Section";
import { getDirections } from "@/content/manifest";

export default function DirectionsPage() {
  const directions = getDirections("zh");
  return (
    <Container>
      <Section title="研究方向" subtitle="围绕手物交互世界模型的五大子方向">
        <div className="grid gap-6 md:grid-cols-2">
          {directions.map((dir) => (
            <DirectionCard
              key={dir.slug}
              title={dir.title}
              intro={dir.summary ?? dir.intro}
              href={`/directions/${dir.slug}`}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
