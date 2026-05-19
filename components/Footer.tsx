"use client";

import { usePathname } from "next/navigation";
import Container from "./Container";

export default function Footer() {
  const pathname = usePathname() ?? "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  return (
    <footer className="mt-16 border-t border-ink-100/60 bg-ink-50 py-8 text-sm text-ink-500">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>{isEn ? "HMI Lab · Project Showcase" : "HMI Lab · 项目组展示"}</div>
        <div>© 2026 All Rights Reserved</div>
      </Container>
    </footer>
  );
}
