import Container from "@/components/Container";
import DirectionCard from "@/components/DirectionCard";
import Section from "@/components/Section";
import { getAcademyLogo, getDirections, getProjectImage, getProjectInfo } from "@/content/manifest";

function parseIntro(body: string) {
  const lines = body.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const introIndex = lines.findIndex((l) => l.startsWith("简介") || l.startsWith("Introduction"));
  if (introIndex !== -1) {
    return lines.slice(introIndex + 1).join("\n");
  }
  return lines.filter((l) => !l.startsWith("名称") && !l.startsWith("Title")).join("\n");
}

export default function HomePage() {
  const info = getProjectInfo("zh");
  const intro = parseIntro(info.body);
  const directions = getDirections("zh");
  const projectImage = getProjectImage();
  const academyLogo = getAcademyLogo();

  return (
    <>
      <section className="border-b border-ink-100/60 bg-gradient-to-b from-ink-50 to-white">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink-900">
                {info.title}
                {info.note ? (
                  <span className="mt-3 block text-base font-normal text-ink-500">{info.note}</span>
                ) : null}
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-ink-600">
                {intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-ink-500">
                <span className="rounded-full border border-ink-200 px-3 py-1">认知</span>
                <span className="rounded-full border border-ink-200 px-3 py-1">想象</span>
                <span className="rounded-full border border-ink-200 px-3 py-1">技能</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-ink-100/80 bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={projectImage} alt="项目组示意图" className="h-full w-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <Section title="研究方向总览" subtitle="面向空间交互智能框架的五大研究方向">
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
    </>
  );
}
