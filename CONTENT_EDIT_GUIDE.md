# 前端文字内容修改指南

本文档用于说明：**要修改前端页面显示的文字内容，应该去哪里改**。

## 1) 首页标题与简介
- **标题**：
  - 文件：`content/manifest.ts`
  - 位置：`projectTitles`（中文/英文）
- **简介正文**：
  - 中文：`source/项目整体介绍/项目信息.txt`
  - 英文：`source/项目整体介绍/项目信息.en.txt`

## 2) 研究方向文字
- 每个方向的简介文本来自 `source/` 下的 `introduction.txt`：
  - 中文：`source/<方向>/introduction.txt`
  - 英文：`source/<方向>/introduction.en.txt`
- 方向名称（卡片标题、详情页标题）：
  - 文件：`content/manifest.ts`
  - 位置：`directions` 与 `geometryChildren` 的 `title` 字段（`zh` / `en`）

## 3) 项目组成员文字
- 成员简介来自：
  - 中文：`source/项目组成员信息/**/introduction.txt`
  - 英文：`source/项目组成员信息/**/introduction.en.txt`
- 展示逻辑：
  - 文件：`content/members.ts`
  - 页面：`app/members/page.tsx`、`app/en/members/page.tsx`
- 页面底部的“从事 xx 方向研究”说明：
  - 文件：`app/members/page.tsx`（中文）
  - 文件：`app/en/members/page.tsx`（英文）

## 4) News / 成果展示文字
- 内容在页面内直接写死：
  - 中文：`app/news/page.tsx`
  - 英文：`app/en/news/page.tsx`
- 修改项包括：时间、标题、描述、链接。

## 5) 导航栏文字
- 文件：`components/Nav.tsx`
- `navItems` 中分别维护中文/英文的导航标签。

## 6) 页脚文字
- 文件：`components/Footer.tsx`
- 根据当前语言显示中/英文。

## 7) 语言切换按钮
- 文件：`components/Nav.tsx`
- 逻辑会自动在 `/` 与 `/en` 之间切换路径。

---

如需新增/修改图片、logo 等素材，请放在 `source/` 目录下，并确保路径正确。
