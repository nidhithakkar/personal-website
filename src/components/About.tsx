"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border bg-background-elevated py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            About
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            I build things that ship.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I&apos;m Nidhi — a builder and engineer who cares about the full
              loop: clear problem, solid systems, and products people actually
              use.
            </p>
            <p>
              My background spans quality engineering and product building at
              places like Amazon and Snap, and I&apos;m currently a founding
              engineer helping grow AI-powered products from the ground up. I
              like owning outcomes end to end — from idea to release.
            </p>
            <p>
              Outside of day jobs, I ship side projects and client work —
              websites and tools that solve real problems for real people.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
