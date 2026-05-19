import Container from "@/components/Container";
import Section from "@/components/Section";
import MemberCard from "@/components/MemberCard";
import { getStudentMembers } from "@/content/members";

export default function MembersPageEn() {
  const members = getStudentMembers("en");
  const names = members.map((member) => member.name).join(", ");
  return (
    <Container>
      <Section
        title="Team Members"
        subtitle={
          <>
            Team lead:{" "}
            <a
              href="https://www.bjzgca.edu.cn/teacher/jlmeq2bembtyifdo30wfp3rxemoa87bv"
              target="_blank"
              rel="noreferrer"
              className="text-ink-900 underline-offset-4 hover:underline"
            >
              Chen Xingyu
            </a>
            , Assistant Professor at Zhongguancun Academy. Team members include:
          </>
        }
      >
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            {members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Section>
    </Container>
  );
}
