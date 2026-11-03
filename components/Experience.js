"use client";

import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-[#f3efe7]/40]">
      <div className="mx-auto max-w-6xl px-1">
        <Reveal>
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Hands-on product delivery.</h2>
          <p className="section-copy">
            Across companies and products, I’ve worked on websites, admin
            systems, and mobile apps — with a focus on shipping stable features
            that users can rely on.
          </p>
        </Reveal>

        <Stagger className="mt-8 space-y-4" delay={0.08} stagger={0.16}>
          {experience.map((item) => (
            <StaggerItem key={`${item.company}-${item.role}`}>
              <motion.article
                className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6"
                whileHover={{
                  y: -8,
                  borderColor: "rgba(240,120,74,0.4)",
                  boxShadow: "0 22px 44px rgba(28,25,23,0.08)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-snug text-[var(--ink)]">
                      {item.role}
                    </h3>
                    <p className="mt-1 leading-relaxed text-[var(--muted)]">
                      {item.company}
                    </p>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--coral)]">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {item.points.map((point, pointIndex) => (
                    <motion.li
                      key={point}
                      className="flex gap-3 leading-[1.7] text-[var(--muted)]"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.08 * pointIndex,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--coral)]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
