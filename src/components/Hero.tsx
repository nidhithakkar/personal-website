"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 35%, #3a1218 0%, #1a080a 45%, #0c0505 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 code-texture opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(225,29,46,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(225,29,46,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32">
        {/* Large title behind portrait */}
        <div className="pointer-events-none absolute inset-x-0 top-[22%] z-0 flex flex-col items-center text-center md:top-[18%]">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-2xl font-semibold tracking-[0.2em] text-white/90 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            BUILDER
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display hero-glow -mt-1 text-[clamp(3.5rem,14vw,9.5rem)] font-extrabold leading-[0.85] tracking-tight text-white"
          >
            ENGINEER
          </motion.h1>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto mt-16 w-full max-w-[280px] sm:mt-20 sm:max-w-[340px] md:mt-24 md:max-w-[400px] lg:max-w-[440px]"
        >
          <div className="portrait-mask relative aspect-[3/4] w-full">
            <Image
              src="/nidhi.png"
              alt="Nidhi Thakkar"
              fill
              priority
              className="object-cover object-[50%_15%]"
              sizes="(max-width: 768px) 280px, 440px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
          </div>
        </motion.div>

        {/* Bottom row: intro + CTAs */}
        <div className="relative z-20 mt-auto grid gap-10 pt-8 md:grid-cols-2 md:items-end md:gap-16 lg:gap-24">
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-md"
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Welcome to My Portfolio
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Explore my work, skills, and experience as a builder and engineer
              dedicated to shipping reliable digital products.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-3 sm:items-end"
          >
            <a
              href="https://github.com/nidhithakkar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(225,29,46,0.35)] transition hover:bg-accent-hover sm:w-auto sm:min-w-[200px]"
            >
              <GitHubIcon />
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/thakkarnidhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-surface px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 sm:w-auto sm:min-w-[200px]"
            >
              <LinkedInIcon />
              LinkedIn Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}
