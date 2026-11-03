"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-soft)_92%,transparent)] backdrop-blur-xl">
      <nav className="site-nav">
        <a href="#top" className="relative inline-block shrink-0">
          <span className="relative z-[1] font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
            {profile.name}
          </span>
          <span
            className="absolute bottom-0 left-0 right-0 h-2 rounded-full bg-[var(--sky)] opacity-80"
            aria-hidden="true"
          />
        </a>

        <div className="site-nav__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="site-nav__cta-desktop items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="site-nav__link"
          >
            LinkedIn
          </a>
          <a href="#contact" className="btn-coral !min-h-10 !px-4 !text-sm">
            Let&apos;s Connect
          </a>
        </div>

        <button
          type="button"
          className="site-nav__menu-btn flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <div className="flex w-4 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-[var(--ink)] transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-[var(--ink)] transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-[var(--ink)] transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-[var(--line)] bg-[var(--bg-soft)] md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col gap-4 px-5 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-[var(--muted)]"
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-coral mt-1 w-fit"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
