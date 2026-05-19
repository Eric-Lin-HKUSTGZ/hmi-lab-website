import { notFound } from "next/navigation";
import DirectionDetail from "@/components/DirectionDetail";
import { getDirectionBySlug, getDirectionSlugs } from "@/content/manifest";

export function generateStaticParams() {
  return getDirectionSlugs().map((slug) => ({ slug }));
}

export default function DirectionDetailPage({ params }: { params: { slug: string } }) {
  const direction = getDirectionBySlug(params.slug, "zh");
  if (!direction) return notFound();

  // 研究问题 / 技术路线 / 应用价值（当前不展示，保留示例便于后续启用）
  // const sections = [
  //   { title: "研究问题", body: "聚焦真实交互中的关键难题与瓶颈。" },
  //   { title: "技术路线", body: "以统一模型与数据驱动的体系实现任务闭环。" },
  //   { title: "应用价值", body: "服务具身智能体的长期理解与可控生成。" }
  // ];

  return (
    <DirectionDetail
      title={direction.title}
      intro={direction.intro}
      // sections={sections}
      media={direction.media}
    />
  );
}

