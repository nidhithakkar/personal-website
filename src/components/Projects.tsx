"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "FamilyCall",
    url: "https://familycall.care",
    tag: "Founding engineer · Quality",
    description:
      "AI voice platform for family caregiving. I set up the test automation framework and CI quality gates, covered APIs and audio pipelines in Python, and built a custom LLM evaluation agent that runs before every release.",
  },
  {
    name: "Prince Raymond",
    url: "https://princeraymond.com",
    tag: "Side project · Web",
    description:
      "A made-to-order Raymond suiting site I built for fun — custom suits, fabric samples, and enquire flows.",
  },
  {
    name: "Daily Dish",
    url: "https://dailydish.food",
    tag: "Side project · Supabase + Gemini",
    description:
      "A weekly meal planner I built for fun — preferences in, plan out, powered by Supabase and Gemini.",
    github: "https://github.com/nidhithakkar/daily-dish-food",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            Projects
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            What I&apos;ve been building.
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Founding work at FamilyCall, plus a few side projects I built for
            fun.
          </p>
        </motion.div>

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {projects.map((project, index) => (
            <motion.li
              key={project.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group py-10 md:py-12"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-medium tracking-widest text-muted uppercase">
                    {project.tag}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-white sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
                  >
                    Visit site
                    <ArrowUpRight />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
