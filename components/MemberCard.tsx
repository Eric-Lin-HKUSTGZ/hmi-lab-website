import type { Member } from "@/content/members";

type Props = {
  member: Member;
};

function renderBody(body: string) {
  const urlMatch = body.match(/https?:\/\/\S+/);
  if (!urlMatch) return <p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p>;
  const url = urlMatch[0];
  const text = body.replace(url, "").trim();
  return (
    <div className="mt-2 space-y-2 text-sm leading-relaxed text-ink-600">
      {text ? <p>{text}</p> : null}
      <a className="text-ink-600 underline-offset-4 hover:text-ink-900 hover:underline" href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </div>
  );
}

export default function MemberCard({ member }: Props) {
  return (
    <div className="flex gap-4 rounded-xl border border-ink-100/80 bg-white p-5 shadow-sm">
      {member.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={member.avatar}
          alt={member.name}
          className="h-16 w-16 shrink-0 rounded-full border border-ink-100 object-cover"
        />
      ) : (
        <div className="h-16 w-16 shrink-0 rounded-full border border-ink-100 bg-ink-50" />
      )}
      <div>
        <div className="text-sm font-semibold text-ink-900">{member.name}</div>
        {member.body ? renderBody(member.body) : null}
      </div>
    </div>
  );
}
