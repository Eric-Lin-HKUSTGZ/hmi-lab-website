import Container from "./Container";
import MediaGallery from "./MediaGallery";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

type Props = {
  title: string;
  intro: string;
  sections?: { title: string; body: string }[];
  media: MediaItem[];
};

export default function DirectionDetail({ title, intro, sections, media }: Props) {
  const paragraphs = intro.split(/\n+/).filter(Boolean);
  return (
    <Container className="py-10">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-ink-900">{title}</h1>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-700">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {sections && sections.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl border border-ink-100/80 bg-white p-5">
              <div className="text-sm font-semibold text-ink-900">{section.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{section.body}</p>
            </div>
          ))}
        </div>
      ) : null}

      {/* 图片展示已注释 */}
      {/* <div className="mt-10">
        <MediaGallery items={media} />
      </div> */}
    </Container>
  );
}
