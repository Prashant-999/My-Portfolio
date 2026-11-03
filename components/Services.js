"use client";

import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="mx-auto max-w-6xl px-1">
        <Reveal>
          <p className="section-eyebrow">Freelance & Collaboration</p>
          <h2 className="section-title">Let’s build something together.</h2>
          <p className="section-copy">
            Open for freelance and collaboration on website development and
            mobile app development for both Android and iOS. Whether you need a
            new product, a redesign, or help shipping faster — I’m ready to
            collaborate.
          </p>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2" delay={0.1} stagger={0.13}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="service-card"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 22px 44px rgba(28,25,23,0.1)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <motion.span
                  className="service-card__index"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.span>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug text-[var(--ink)] sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-[var(--muted)] leading-[1.7]">
                  {service.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#contact"
              className="btn-coral"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a project
            </motion.a>
            <motion.a
              href="mailto:singprashantcs99@gmail.com?subject=Freelance%20Collaboration"
              className="btn-ghost"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Email for collaboration
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
