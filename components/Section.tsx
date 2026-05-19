import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string | ReactNode;
  children: ReactNode;
};

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-ink-900">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-ink-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
