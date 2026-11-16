"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-ink/75 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight text-white"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-cyan">{"<"}</span> femila<span className="text-cyan">{" />"}</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-cyan/30 px-4 py-2 text-sm text-cyan transition-colors hover:bg-cyan/10"
          >
            Let&apos;s talk
          </a>
        </div>
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="rounded-lg p-2 text-slate-200 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/[0.06] bg-ink/95 px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-white/[0.06] py-3 text-sm text-slate-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
