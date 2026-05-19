import fs from "fs";
import path from "path";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export type Locale = "zh" | "en";

export type Direction = {
  slug: string;
  title: string;
  introPath: string;
  media: MediaItem[];
  intro: string;
  summary?: string;
};

const root = path.resolve(process.cwd());
const publicSourceRoot = path.join(root, "public", "source");
const sourceRoot = path.join(root, "source");

function resolveContentPath(...segments: string[]) {
  const publicPath = path.join(publicSourceRoot, ...segments);
  if (fs.existsSync(publicPath)) return publicPath;
  return path.join(sourceRoot, ...segments);
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function withBasePath(assetPath: string) {
  if (!basePath) return assetPath;
  return `${basePath}${assetPath}`;
}

const projectImage = withBasePath("/source/项目整体介绍/项目组示意图.jpeg");
const academyLogo = withBasePath("/source/logo/北京中关村学院院徽.jpg");

const projectTitles = {
  zh: {
    main: "HMI Lab（ZGCA）",
    note: "依托北京中关村学院成立的基础培育项目：《全条件可控手物交互世界模型》，与HMI Lab（PKU）合作建设"
  },
  en: {
    main: "HMI Lab (ZGCA)",
    note: "A foundational program established at Zhongguancun Academy: 'Fully-Conditional Hand-Object Interaction World Model', built in collaboration with HMI Lab (PKU)"
  }
} as const;

function withLocaleSuffix(filename: string, locale: Locale) {
  if (locale === "en" && filename.endsWith(".txt")) {
    return filename.replace(/\.txt$/, ".en.txt");
  }
  return filename;
}

function resolveLocaleContentPath(locale: Locale, ...segments: string[]) {
  const last = segments[segments.length - 1] ?? "";
  const localizedLast = withLocaleSuffix(last, locale);
  return resolveContentPath(...segments.slice(0, -1), localizedLast);
}

type DirectionConfig = {
  slug: string;
  title: { zh: string; en: string };
  introPath: { zh: string; en: string };
  media: MediaItem[];
  summary: { zh: string; en: string };
};

const directions: DirectionConfig[] = [
  {
    slug: "scene-generation",
    title: { zh: "场景生成", en: "Scene Generation" },
    introPath: {
      zh: resolveContentPath("场景生成", "introduction.txt"),
      en: resolveLocaleContentPath("en", "场景生成", "introduction.txt")
    },
    summary: {
      zh: "构建导航与操作一体化的世界模型，解决长程动作生成与连续指令理解不足问题。",
      en: "Build a unified world model for navigation and manipulation, addressing weak long-horizon action generation and instruction understanding."
    },
    media: [{ type: "image", src: withBasePath("/source/场景生成/case_img.jpg") }]
  },
  {
    slug: "action-generation",
    title: { zh: "动作生成", en: "Action Generation" },
    introPath: {
      zh: resolveContentPath("动作生成", "introduction.txt"),
      en: resolveLocaleContentPath("en", "动作生成", "introduction.txt")
    },
    summary: {
      zh: "构建统一的动作理解与生成模型，解决指令泛化与动作-视觉对齐问题。",
      en: "Build a unified action understanding and generation model to address instruction generalization and action-vision alignment."
    },
    media: [{ type: "image", src: withBasePath("/source/动作生成/case_img.jpg") }]
  },
  {
    slug: "multimodal-cognition",
    title: { zh: "多模态认知", en: "Multimodal Cognition" },
    introPath: {
      zh: resolveContentPath("多模态认知", "introduction.txt"),
      en: resolveLocaleContentPath("en", "多模态认知", "introduction.txt")
    },
    summary: {
      zh: "融合视觉、语言与空间感知，解决具身场景下交互级4D认知与语义解析问题。",
      en: "Fuse vision, language, and spatial perception to tackle interaction-level 4D cognition and semantic understanding."
    },
    media: [{ type: "image", src: withBasePath("/source/多模态认知/case_img.png") }]
  },
  {
    slug: "geometry",
    title: { zh: "几何重建", en: "Geometry Reconstruction" },
    introPath: {
      zh: resolveContentPath("几何重建", "场景重建", "introduction.txt"),
      en: resolveLocaleContentPath("en", "几何重建", "场景重建", "introduction.txt")
    },
    summary: {
      zh: "从多模态多视角输入预测几何结构，解决高动态场景的快速重建问题。",
      en: "Predict geometry from multimodal inputs to enable fast reconstruction in dynamic scenes."
    },
    media: [
      { type: "image", src: withBasePath("/source/几何重建/场景重建/case_img.png") }
      // { type: "video", src: withBasePath("/source/几何重建/手部重建/case_video_h264.mp4") }
    ]
  },
  {
    slug: "embodied-navigation",
    title: { zh: "具身导航", en: "Embodied Navigation" },
    introPath: {
      zh: resolveContentPath("具身导航", "introduction.txt"),
      en: resolveLocaleContentPath("en", "具身导航", "introduction.txt")
    },
    summary: {
      zh: "以自我中心感知实现自主导航，解决未知复杂环境下定位与决策问题。",
      en: "Use egocentric perception for autonomous navigation, solving localization and decision-making in complex environments."
    },
    media: [
      { type: "image", src: withBasePath("/source/具身导航/case_img.png") }
      // { type: "video", src: withBasePath("/source/具身导航/case_video.mp4") }
    ]
  }
];

const geometryChildren: DirectionConfig[] = [
  {
    slug: "geometry/scene",
    title: { zh: "场景重建", en: "Scene Reconstruction" },
    introPath: {
      zh: resolveContentPath("几何重建", "场景重建", "introduction.txt"),
      en: resolveLocaleContentPath("en", "几何重建", "场景重建", "introduction.txt")
    },
    summary: {
      zh: "预测时序一致的场景几何，解决动态场景重建效率问题。",
      en: "Predict temporally consistent scene geometry to improve reconstruction efficiency in dynamic scenes."
    },
    media: [{ type: "image", src: withBasePath("/source/几何重建/场景重建/case_img.png") }]
  },
  {
    slug: "geometry/hand",
    title: { zh: "手部重建", en: "Hand Reconstruction" },
    introPath: {
      zh: resolveContentPath("几何重建", "手部重建", "introduction.txt"),
      en: resolveLocaleContentPath("en", "几何重建", "手部重建", "introduction.txt")
    },
    summary: {
      zh: "融合多源传感器实现手部与物体建模，解决姿态与位姿估计问题。",
      en: "Fuse multi-sensor inputs to model hands and objects, addressing pose estimation challenges."
    },
    media: [
      { type: "image", src: withBasePath("/source/几何重建/手部重建/case_img.jpg") }
      // { type: "video", src: withBasePath("/source/几何重建/手部重建/case_video_h264.mp4") }
    ]
  }
];

export function readText(filePath: string) {
  return fs.readFileSync(filePath, "utf8").trim();
}

export function getProjectInfo(locale: Locale = "zh") {
  const infoPath = resolveLocaleContentPath(locale, "项目整体介绍", "项目信息.txt");
  const raw = readText(infoPath);
  return {
    title: projectTitles[locale].main,
    note: projectTitles[locale].note,
    body: raw
  };
}

export function getProjectImage() {
  return projectImage;
}

export function getAcademyLogo() {
  return academyLogo;
}

export function getDirections(locale: Locale = "zh"): Direction[] {
  return directions.map((item) => ({
    slug: item.slug,
    title: item.title[locale],
    introPath: item.introPath[locale],
    media: item.media,
    intro: readText(item.introPath[locale]),
    summary: item.summary[locale]
  }));
}

export function getDirectionBySlug(slug: string, locale: Locale = "zh") {
  const found = directions.find((d) => d.slug === slug);
  if (!found) return null;
  return {
    slug: found.slug,
    title: found.title[locale],
    introPath: found.introPath[locale],
    media: found.media,
    intro: readText(found.introPath[locale]),
    summary: found.summary[locale]
  };
}

export function getDirectionSlugs() {
  return directions
    .filter((d) => d.slug !== "geometry")
    .map((d) => d.slug);
}

export function getGeometryChildren(locale: Locale = "zh"): Direction[] {
  return geometryChildren.map((item) => ({
    slug: item.slug,
    title: item.title[locale],
    introPath: item.introPath[locale],
    media: item.media,
    intro: readText(item.introPath[locale]),
    summary: item.summary[locale]
  }));
}
