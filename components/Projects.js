"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-6xl px-1">
        <Reveal>
          <div className="divider-title">Some of my latest work</div>
          <h2 className="section-title mx-auto text-center">
            Real products, shipped.
          </h2>
          <p className="section-copy mx-auto text-center">
            From healthcare platforms to AI products — websites, admin systems,
            and mobile apps built for real users in production.
          </p>
        </Reveal>

        <Stagger className="projects-grid" delay={0.1} stagger={0.14}>
          {projects.map((project) => (
            <StaggerItem key={project.name} className="h-full">
              <motion.article
                className="project-card"
                whileHover={{
                  y: -12,
                  boxShadow: "0 24px 48px rgba(28,25,23,0.12)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__visual"
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} hero section`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </motion.div>
                  <span className="project-card__badge">{project.status}</span>
                </a>

                <div className="project-card__body">
                  <p className="project-card__type">{project.type}</p>
                  <h3 className="project-card__title">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                    <span aria-hidden="true">↗</span>
                  </h3>
                  <p className="project-card__desc">{project.description}</p>

                  {project.links?.length > 0 && (
                    <div className="project-card__links">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-chip"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="project-card__stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
