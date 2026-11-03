"use client";

import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { aboutPoints, profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section-shell !pt-2">
      <div className="mx-auto max-w-6xl px-1">
        <Reveal>
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">More than writing code.</h2>
          <p className="section-copy">{profile.summary}</p>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 md:grid-cols-3" delay={0.08} stagger={0.15}>
          {aboutPoints.map((point, index) => (
            <StaggerItem key={point.title}>
              <motion.div
                className="h-full rounded-2xl border border-[var(--line)] bg-white p-5 shadow-[0_8px_24px_rgba(28,25,23,0.04)]"
                whileHover={{
                  y: -10,
                  boxShadow: "0 22px 44px rgba(28,25,23,0.1)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <motion.div
                  className="mb-4 h-2 rounded-full"
                  style={{
                    background:
                      index === 0
                        ? "var(--coral)"
                        : index === 1
                          ? "var(--yellow)"
                          : "var(--sky)",
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.25 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug text-[var(--ink)]">
                  {point.title}
                </h3>
                <p className="mt-3 text-[var(--muted)] leading-[1.7]">
                  {point.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
