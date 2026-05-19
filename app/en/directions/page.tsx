import Container from "@/components/Container";
import DirectionCard from "@/components/DirectionCard";
import Section from "@/components/Section";
import { getDirections } from "@/content/manifest";

export default function DirectionsPageEn() {
  const directions = getDirections("en");
  return (
    <Container>
      <Section title="Research Directions" subtitle="Five sub-directions around embodied interaction world models">
        <div className="grid gap-6 md:grid-cols-2">
          {directions.map((dir) => (
            <DirectionCard
              key={dir.slug}
              title={dir.title}
              intro={dir.summary ?? dir.intro}
              href={`/en/directions/${dir.slug}`}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
