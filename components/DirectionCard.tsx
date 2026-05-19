import Link from "next/link";

type Props = {
  title: string;
  intro: string;
  href: string;
};

export default function DirectionCard({ title, intro, href }: Props) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-ink-100/80 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-md"
    >
      <div className="text-lg font-semibold text-ink-900">{title}</div>
      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-600">{intro}</p>
      <div className="mt-4 text-xs text-ink-500">查看详情 →</div>
    </Link>
  );
}
