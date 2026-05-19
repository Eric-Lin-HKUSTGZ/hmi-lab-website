import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "全条件可控手物交互世界模型（HMI Lab, ZGCA 依托北京中关村学院基础培育项目，与HMI Lab, PKU合作建设）",
  description: "项目组展示页面：研究内容与子方向介绍"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white text-ink-900">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
