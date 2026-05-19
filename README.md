# HMI Lab 展示站点

用于展示《全条件可控的手物交互世界模型研究》项目组的静态网页，基于 Next.js + TailwindCSS，静态导出部署。

## 项目结构

- `app/`：页面（App Router）
- `components/`：通用组件（导航、卡片、媒体展示）
- `content/manifest.ts`：内容清单与文本读取
- `source/`：原始素材来源（txt / 图片 / 视频）
- `public/source/`：构建时拷贝后的静态素材路径

## 启动与构建

```bash
npm install
npm run dev
```

构建静态站点：

```bash
npm run build
```

本地预览静态站点（不带 basePath）：

```bash
npm run build:local
npm run preview
```

然后打开 `http://localhost:8000`。

## Gitee Pages 部署（404 修复）

Gitee Pages 访问路径包含仓库名，例如：`https://<用户>.gitee.io/<仓库名>/`。  
如果不设置 basePath，静态资源会指向根目录，导致 404。

部署前设置环境变量（以仓库名 `hoiworld-model` 为例）：

```bash
export NEXT_PUBLIC_BASE_PATH="/hoiworld-model"
npm run build
```

或直接使用：

```bash
npm run build:gitee
```

产物在 `out/`，将其部署到 Gitee Pages。  
仓库根目录已包含 `public/.nojekyll`，避免下划线目录被 Jekyll 过滤。

## 如何更新内容

### 1) 更新项目整体介绍

- 修改 `source/项目整体介绍/项目信息.txt`
- 项目组示意图放在 `source/项目整体介绍/项目组示意图.jpeg`

### 2) 更新五大方向素材

每个方向目录包含：

- `introduction.txt`：方向简介
- `case_img.*` 或 `case_video.*`：示例图片/视频

如需替换素材，直接覆盖对应文件即可。

### 3) 扩展或新增方向

编辑 `content/manifest.ts`：

- 添加 `Direction` 数据（slug/title/introPath/media）
- 如需新增子方向，更新 `geometryChildren`

页面会在构建时自动读取 `source/` 中的文本内容。

### 4) 研究问题 / 技术路线 / 应用价值

当前页面**不展示**这三项内容（为了统一风格，已在代码中关闭）。  
如果未来需要展示并自定义文本：

- 位置：`app/directions/[slug]/page.tsx`
- 在该文件中恢复 `sections` 数组，并填写你要的文本内容，然后将 `sections` 传给 `DirectionDetail` 组件即可。

## 注意事项

- `scripts/copy-source.mjs` 会在 `dev/build` 前将 `source/` 拷贝到 `public/source/`，用于静态资源访问。
- 视频采用原生 `<video controls>`，图片为普通 `<img>`，适配静态导出。
