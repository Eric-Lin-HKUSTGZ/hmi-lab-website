"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const navItems = {
  zh: [
    { href: "/", label: "项目概览" },
    { href: "/directions", label: "研究方向" },
    { href: "/members", label: "团队成员" },
    { href: "/news", label: "研究进展" }
  ],
  en: [
    { href: "/en", label: "Overview" },
    { href: "/en/directions", label: "Directions" },
    { href: "/en/members", label: "Members" },
    { href: "/en/news", label: "News" }
  ]
};

function getLocaleFromPath(pathname: string) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";
}

function getToggleHref(pathname: string, locale: "zh" | "en") {
  if (locale === "en") {
    return pathname.replace(/^\/en(\/|$)/, "/");
  }
  return `/en${pathname === "/" ? "" : pathname}`;
}

export default function Nav() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPath(pathname);
  const toggleHref = getToggleHref(pathname, locale);
  const toggleLabel = locale === "en" ? "中文" : "EN";
  const brandHref = locale === "en" ? "/en" : "/";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const hmiLogo = `${basePath}/source/logo/HMILab_logo.png`;
  const academyLogo = `${basePath}/source/logo/北京中关村学院院徽.jpg`;

  return (
    <header className="sticky top-0 z-30 border-b border-ink-100/60 bg-white/80 backdrop-blur">
      <Container className="flex h-24 items-center justify-between">
        <Link href={brandHref} className="flex flex-col items-center gap-1 text-xs font-semibold text-ink-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hmiLogo} alt="HMI Lab logo" className="h-9 w-9 rounded-full border border-ink-100 object-cover" />
          <span>HMI Lab</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink-600">
          {navItems[locale].map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <Link href={toggleHref} className="rounded-full border border-ink-200 px-3 py-1 text-xs text-ink-600">
            {toggleLabel}
          </Link>
          <div className="flex flex-col items-center gap-1 text-[10px] text-ink-600">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={academyLogo}
              alt={locale === "en" ? "Zhongguancun Academy logo" : "北京中关村学院院徽"}
              className="h-8 w-8 rounded-full border border-ink-100 object-cover"
            />
            <span>{locale === "en" ? "Zhongguancun Academy" : "北京中关村学院"}</span>
          </div>
        </div>
      </Container>
    </header>
  );
}
