"use client";

import { ArrowUpRight, CheckCircle2, LoaderCircle, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/section-heading";

type SubmissionState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function Contact() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmission({ status: "sending" });

    const form = event.currentTarget;
    const values = new FormData(form);
    const payload = {
      name: values.get("name"),
      email: values.get("email"),
      message: values.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: { error?: string } = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Your message could not be sent. Please try again.");
      }

      form.reset();
      setSubmission({
        status: "success",
        message: "Thanks for reaching out! Your message has been sent.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again.",
      });
    }
  }

  return (
    <section id="contact" className="section-anchor border-t border-white/[0.05] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Get in touch"
          title="Have something in mind?"
          description="I’d love to hear from you. Send a note and I’ll get back to you as soon as I can."
        />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <a
              href="mailto:femilakatherinesheela@gmail.com"
              className="glass group flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-cyan/25"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan/[0.08] text-cyan">
                <Mail size={19} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-slate-500">Email me directly</span>
                <span className="mt-1 block break-all text-sm text-slate-200">
                  femilakatherinesheela@gmail.com
                </span>
              </span>
              <ArrowUpRight size={16} className="ml-auto shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
            </a>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              Prefer social? Find me on{" "}
              <a
                href="https://www.linkedin.com/in/femila-ketherine-sheela-k-29872441b"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 underline decoration-slate-600 underline-offset-4 transition hover:text-cyan"
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/femilaketherinesheela-gif"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 underline decoration-slate-600 underline-offset-4 transition hover:text-cyan"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm text-slate-300">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  minLength={2}
                  maxLength={100}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan/50 focus:outline-none"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm text-slate-300">
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan/50 focus:outline-none"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                minLength={10}
                maxLength={5000}
                required
                className="w-full resize-y rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm leading-6 text-white placeholder:text-slate-600 focus:border-cyan/50 focus:outline-none"
                placeholder="Tell me a little about what you'd like to talk about..."
              />
            </div>
            {submission.status !== "idle" && submission.status !== "sending" && (
              <p
                role="status"
                aria-live="polite"
                className={`flex items-center gap-2 text-sm ${
                  submission.status === "success" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {submission.status === "success" && <CheckCircle2 size={16} />}
                {submission.message}
              </p>
            )}
            <button
              type="submit"
              disabled={submission.status === "sending"}
              className="inline-flex min-w-40 items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan/90 disabled:cursor-wait disabled:opacity-70"
            >
              {submission.status === "sending" ? (
                <>
                  <LoaderCircle size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send message <ArrowUpRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
