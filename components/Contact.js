"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-6xl px-1">
        <Reveal>
          <motion.div
            className="contact-panel"
            whileHover={{
              y: -6,
              boxShadow: "0 28px 60px rgba(28,25,23,0.12)",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">Let’s collaborate.</h2>
            <p className="section-copy">
              Looking for a freelancer or collaborator for website development,
              Android apps, or iOS apps? Feel free to connect — I’d love to help
              turn your idea into a live product.
            </p>

            <div className="contact-actions">
              <motion.a
                href={profile.emailHref}
                className="btn-coral"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {profile.email}
              </motion.a>
              <motion.a
                href={profile.phoneHref}
                className="btn-ghost"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {profile.phone}
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
