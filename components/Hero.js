"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/content";

const ease = [0.16, 1, 0.3, 1];

function WaveHand() {
  return (
    <motion.span
      className="ml-2 inline-block origin-[70%_70%] text-[0.7em]"
      animate={{ rotate: [0, 22, -10, 18, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.6 }}
      aria-hidden="true"
    >
      👋
    </motion.span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="section-shell !pt-8 sm:!pt-10">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-1 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          className="order-1"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, scale: 0.8, y: 40, filter: "blur(12px)" }
          }
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease }}
        >
          <motion.div
            className="photo-bubble"
            animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="photo-bubble__glow"
              animate={
                reduceMotion
                  ? undefined
                  : { scale: [1, 1.06, 1], rotate: [0, 4, 0] }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="photo-bubble__tail" aria-hidden="true" />
            <motion.div
              className="photo-bubble__ring"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <motion.div
              className="photo-bubble__ring photo-bubble__ring--outer"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <div className="photo-bubble__image">
              <Image
                src="/prashant-headshot.jpg"
                alt={`${profile.name} — Frontend Tech Lead`}
                fill
                priority
                className="object-cover object-[center_15%]"
                sizes="340px"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="order-2">
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
            initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            {profile.role} · {profile.experience} · Open for freelance
          </motion.p>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,7vw,4.5rem)] font-bold leading-[1.12] tracking-tight text-[var(--ink)]"
            initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.28, ease }}
          >
            Hey, I&apos;m{" "}
            <span className="relative inline-block whitespace-nowrap">
              Prashant
              <motion.span
                className="swoosh"
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.85 }}
                transition={{ duration: 0.8, delay: 0.85, ease }}
                style={{ transformOrigin: "left center" }}
              />
            </span>
            {!reduceMotion && <WaveHand />}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg leading-[1.75] text-[var(--muted)] sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.42, ease }}
          >
            Frontend Tech Lead at {profile.company}, shipping{" "}
            <strong className="font-semibold text-[var(--ink)] underline decoration-[var(--yellow)] decoration-4 underline-offset-4">
              Medisray
            </strong>{" "}
            (live on{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.medisray.app&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--ink)] underline decoration-[var(--coral)] decoration-2 underline-offset-4"
            >
              Google Play
            </a>
            , iOS soon) and{" "}
            <strong className="font-semibold text-[var(--ink)] underline decoration-[var(--sky)] decoration-4 underline-offset-4">
              Medisway
            </strong>
            . Also available to collaborate on websites and Android/iOS apps.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.58, ease }}
          >
            <motion.a
              href="#projects"
              className="btn-coral"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              See my work
            </motion.a>
            <motion.a
              href="#services"
              className="btn-ghost"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              Hire / Collaborate
            </motion.a>
          </motion.div>

          <motion.svg
            className="squiggle mt-6 h-8 w-24"
            viewBox="0 0 120 32"
            fill="none"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            aria-hidden="true"
          >
            <motion.path
              d="M4 18C18 6 28 28 42 14C56 0 66 28 82 16C96 6 106 22 116 12"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, delay: 0.75, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
