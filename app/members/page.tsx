import Container from "@/components/Container";
import Section from "@/components/Section";
import MemberCard from "@/components/MemberCard";
import { getStudentMembers } from "@/content/members";

export default function MembersPage() {
  const members = getStudentMembers("zh");
  const names = members.map((member) => member.name).join("、");
  return (
    <Container>
      <Section
        title="团队成员"
        subtitle={
          <>
            团队负责人为北京中关村学院助理教授
            <a
              href="https://www.bjzgca.edu.cn/teacher/jlmeq2bembtyifdo30wfp3rxemoa87bv"
              target="_blank"
              rel="noreferrer"
              className="text-ink-900 underline-offset-4 hover:underline"
            >
              陈星宇
            </a>
            ，团队成员包括：
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
