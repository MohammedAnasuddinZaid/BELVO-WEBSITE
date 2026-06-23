"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarClock, Menu, Sparkles } from "lucide-react";
import { navItems } from "@/lib/site";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="brand-mark" aria-label="BELVO home">
        <Image src="/assets/belvo-logo.jpeg" alt="" width={44} height={44} priority />
        <span>BELVO</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link className="icon-button" href="/technology" aria-label="View AI systems">
          <Sparkles size={18} />
        </Link>
        <Link className="primary-button primary-button--small" href="/book">
          <CalendarClock size={17} />
          <span>Book Call</span>
        </Link>
        <button className="icon-button mobile-menu-button" aria-label="Open menu">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
