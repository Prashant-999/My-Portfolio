"use client";

import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";
import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-[#f3efe7]/40]">
      <div className="mx-auto max-w-6xl px-1">
        <Reveal>
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">Tools I ship with.</h2>
          <p className="section-copy">
            A practical stack for building websites, Android/iOS apps, and
            production-ready product experiences.
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          delay={0.08}
          stagger={0.12}
        >
          {skillGroups.map((group) => (
            <StaggerItem key={group.title}>
              <motion.div
                className="h-full rounded-2xl border border-[var(--line)] bg-white p-5"
                whileHover={{
                  y: -10,
                  boxShadow: "0 22px 44px rgba(28,25,23,0.1)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug text-[var(--ink)]">
                  {group.title}
                </h3>
                <ul className="skill-logo-list">
                  {group.items.map((item, itemIndex) => (
                    <motion.li
                      key={item.name}
                      className="skill-logo-item"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.08 * itemIndex,
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ x: 8, color: "var(--ink)" }}
                    >
                      <motion.span
                        whileHover={{ scale: 1.15, rotate: -6 }}
                        transition={{ type: "spring", stiffness: 400, damping: 14 }}
                      >
                        <TechIcon name={item.icon} />
                      </motion.span>
                      <span>{item.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
