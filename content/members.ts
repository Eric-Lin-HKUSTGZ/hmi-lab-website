import fs from "fs";
import path from "path";
import type { Locale } from "./manifest";

export type Member = {
  name: string;
  body: string;
  avatar?: string;
};

const root = path.resolve(process.cwd());
const sourceRoot = path.join(root, "source", "项目组成员信息");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function withBasePath(assetPath: string) {
  if (!basePath) return assetPath;
  return `${basePath}${assetPath}`;
}

function parseMemberIntro(raw: string) {
  const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return { name: "", role: "" };
  const firstLine = lines[0];
  const commaIndex = firstLine.includes("，")
    ? firstLine.indexOf("，")
    : firstLine.includes(",")
      ? firstLine.indexOf(",")
      : -1;
  const name = commaIndex === -1 ? firstLine : firstLine.slice(0, commaIndex).trim();
  const role = commaIndex === -1 ? "" : firstLine.slice(commaIndex + 1).trim();
  return { name, role };
}

function getIntroPath(dirPath: string, locale: Locale) {
  const localized = path.join(dirPath, "introduction.en.txt");
  const fallback = path.join(dirPath, "introduction.txt");
  if (locale === "en" && fs.existsSync(localized)) return localized;
  return fallback;
}

function getAvatarPath(dirPath: string) {
  const files = fs.readdirSync(dirPath);
  const avatar = files.find((file) => /^selfie\.(jpg|jpeg|png)$/i.test(file));
  if (!avatar) return undefined;
  const relative = path.relative(path.join(root, "source"), path.join(dirPath, avatar));
  return withBasePath(`/source/${relative.split(path.sep).join("/")}`);
}

function formatMemberBody(role: string, researchLabel: string, locale: Locale) {
  if (!role) {
    return locale === "en"
      ? `Researcher focusing on ${researchLabel} research.`
      : `从事${researchLabel}研究。`;
  }
  if (locale === "en") {
    return `${role}, focusing on ${researchLabel} research.`;
  }
  return `${role}，从事${researchLabel}研究。`;
}

function readMember(dirPath: string, locale: Locale, researchLabel: string): Member {
  const introPath = getIntroPath(dirPath, locale);
  const introRaw = fs.readFileSync(introPath, "utf8").trim();
  const { name, role } = parseMemberIntro(introRaw);
  return {
    name,
    body: formatMemberBody(role, researchLabel, locale),
    avatar: getAvatarPath(dirPath)
  };
}

function listDirNames(dirPath: string) {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

const researchLabels = {
  zh: {
    "场景生成": "场景生成",
    "动作生成": "动作生成",
    "多模态认知": "多模态认知",
    "几何重建": "几何重建",
    "具身导航": "具身导航",
    "场景重建": "场景重建",
    "手部重建": "手部重建"
  },
  en: {
    "场景生成": "scene generation",
    "动作生成": "action generation",
    "多模态认知": "multimodal cognition",
    "几何重建": "geometry reconstruction",
    "具身导航": "embodied navigation",
    "场景重建": "scene reconstruction",
    "手部重建": "hand reconstruction"
  }
} as const;

function getResearchLabel(category: string, subDir: string | null, locale: Locale) {
  if (subDir && subDir in researchLabels[locale]) {
    return researchLabels[locale][subDir as keyof typeof researchLabels.en];
  }
  if (category in researchLabels[locale]) {
    return researchLabels[locale][category as keyof typeof researchLabels.en];
  }
  return locale === "en" ? "embodied intelligence" : "具身智能";
}

export function getStudentMembers(locale: Locale) {
  const categories = listDirNames(sourceRoot).filter((name) => name !== "项目组导师");
  const members: Member[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(sourceRoot, category);
    const subDirs = listDirNames(categoryPath);
    if (subDirs.length > 0 && subDirs.every((dir) => listDirNames(path.join(categoryPath, dir)).length > 0)) {
      subDirs.forEach((subDir) => {
        const membersPath = path.join(categoryPath, subDir);
        const researchLabel = getResearchLabel(category, subDir, locale);
        listDirNames(membersPath).forEach((name) => {
          members.push(readMember(path.join(membersPath, name), locale, researchLabel));
        });
      });
    } else {
      const researchLabel = getResearchLabel(category, null, locale);
      subDirs.forEach((name) => {
        members.push(readMember(path.join(categoryPath, name), locale, researchLabel));
      });
    }
  });

  return members.filter((member) => {
    if (locale === "en") {
      return member.name !== "Wu Yuqi";
    }
    return member.name !== "吴雨琪";
  });
}
