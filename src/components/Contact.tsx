"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import {
  sendContactMessage,
  type ContactState,
} from "@/app/actions/contact";

const initialState: ContactState = { ok: false, message: "" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  return (
    <section
      id="contact"
      className="relative border-t border-border bg-background-elevated py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            Contact
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Have a project, collaboration, or just want to say hi? Send a note
            — I&apos;ll get back to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/nidhithakkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/thakkarnidhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {state.ok ? (
            <div
              role="status"
              className="rounded-2xl border border-white/10 bg-surface p-8"
            >
              <p className="font-display text-xl font-semibold text-white">
                Message sent
              </p>
              <p className="mt-2 text-muted">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/15 bg-background px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/15 bg-background px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-xl border border-white/15 bg-background px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-accent"
                  placeholder="What are you working on?"
                />
              </div>

              {state.message && !state.ok && (
                <p role="alert" className="text-sm text-red-400">
                  {state.message}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {pending ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
