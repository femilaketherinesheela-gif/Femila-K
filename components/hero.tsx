"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { typingPhrases } from "@/lib/portfolio-data";

function useTypingPhrase(reduceMotion: boolean) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState(() => (reduceMotion ? typingPhrases[0] : ""));

  useEffect(() => {
    if (reduceMotion) {
      setText(typingPhrases[0]);
      return;
    }

    const phrase = typingPhrases[phraseIndex];
    let characterIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        characterIndex += 1;
        setText(phrase.slice(0, characterIndex));
        if (characterIndex === phrase.length) {
          deleting = true;
          timer = setTimeout(tick, 1500);
          return;
        }
      } else {
        characterIndex -= 1;
        setText(phrase.slice(0, characterIndex));
        if (characterIndex === 0) {
          setPhraseIndex((index) => (index + 1) % typingPhrases.length);
          return;
        }
      }
      timer = setTimeout(tick, deleting ? 38 : 70);
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [phraseIndex, reduceMotion]);

  return text;
}

function TerminalCard() {
  return (
    <div className="glass relative w-full max-w-[26rem] overflow-hidden rounded-2xl shadow-glow">
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-5 py-4">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        <span className="ml-auto font-mono text-[11px] text-slate-500">femila.py</span>
      </div>
      <div className="space-y-4 p-6 font-mono text-[13px] leading-6 sm:p-7">
        <p className="text-slate-500"># a little about me</p>
        <p>
          <span className="text-violet-300">class</span>{" "}
          <span className="text-cyan">Developer</span>:
        </p>
        <p className="pl-5">
          <span className="text-violet-300">def</span>{" "}
          <span className="text-amber-200">__init__</span>(self):
        </p>
        <p className="pl-10">
          self.name = <span className="text-emerald-300">&quot;Femila&quot;</span>
        </p>
        <p className="pl-10">
          self.focus = <span className="text-emerald-300">&quot;learning by building&quot;</span>
        </p>
        <p className="pl-10">
          self.next_step = <span className="text-emerald-300">&quot;always growing&quot;</span>
        </p>
        <p className="pt-1 text-slate-500">
          <span className="text-cyan">&gt;</span> ready to create something meaningful
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-cyan align-middle" />
        </p>
      </div>
      <div className="absolute -right-16 -top-20 h-40 w-40 rounded-full bg-violet/10 blur-3xl" />
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const phrase = useTypingPhrase(Boolean(reduceMotion));
  const initial = reduceMotion ? false : { opacity: 0, y: 18 };

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl scroll-mt-20 flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-36"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.06] px-3.5 py-2 text-xs font-medium text-cyan">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Open to learning &amp; opportunities
          </div>
          <p className="mb-3 font-mono text-sm text-slate-400">Hello, world! I&apos;m</p>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]">
            Femila Ketherine
            <br />
            <span className="text-gradient">Sheela K.</span>
          </h1>
          <div className="mt-6 min-h-8 font-mono text-base text-cyan sm:text-lg">
            <span aria-hidden="true">{phrase}</span>
            <span aria-hidden="true" className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan align-middle" />
            <span className="sr-only">Aspiring software developer, first-year Computer Science student, and lifelong learner.</span>
          </div>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            First-year Computer Science student at Joy University, curious about how ideas become
            software—and always excited to learn what&apos;s next.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan/90"
            >
              Explore my work
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-white/[0.03]"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a
                aria-label="Femila on GitHub (opens in a new tab)"
                href="https://github.com/femilaketherinesheela-gif"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-cyan/40 hover:text-cyan"
              >
                <Github size={17} />
              </a>
              <a
                aria-label="Femila on LinkedIn (opens in a new tab)"
                href="https://www.linkedin.com/in/femila-ketherine-sheela-k-29872441b"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-cyan/40 hover:text-cyan"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute left-[12%] top-[15%] h-28 w-28 rounded-full bg-cyan/10 blur-3xl" />
          <TerminalCard />
          <div className="glass absolute -bottom-5 left-2 flex items-center gap-3 rounded-xl px-4 py-3 sm:left-[-1.5rem]">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet/10 font-mono text-sm text-violet">
              {"</>"}
            </span>
            <div>
              <p className="text-xs font-medium text-white">Always learning</p>
              <p className="mt-0.5 text-[11px] text-slate-500">One line at a time</p>
            </div>
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="mx-auto mt-20 flex items-center gap-2 text-xs text-slate-500 transition hover:text-cyan lg:mt-16"
      >
        Scroll to explore <ArrowDown size={14} />
      </a>
    </section>
  );
}
