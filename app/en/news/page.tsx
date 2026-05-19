import Container from "@/components/Container";
import Section from "@/components/Section";

const newsItems = [
  {
    date: "2026-01-10",
    title: "Embodied Navigation Project VLingNav Released",
    href: "https://wsakobe.github.io/VLingNav-web/"
  },
  {
    date: "2026-1-26",
    title: "Paper Rex-Thinker Accepted by ICLR2026",
    href: "https://rexthinker.github.io/"
  }
];

export default function NewsPageEn() {
  const sorted = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <Container>
      <Section title="News" subtitle="Project outputs and updates">
        <div className="space-y-4">
          {sorted.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 rounded-xl border border-ink-100/80 bg-white p-5">
              <div className="text-xs text-ink-400">{item.date}</div>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-ink-900 underline-offset-4 hover:underline"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
