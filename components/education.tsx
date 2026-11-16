import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="section-anchor">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <SectionHeading eyebrow="Education" title="Where I'm building my foundation." />
        <article className="glass relative max-w-3xl overflow-hidden rounded-2xl p-6 sm:p-8">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet/[0.08] blur-3xl" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet/20 bg-violet/[0.08] text-violet">
              <GraduationCap size={22} />
            </span>
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">First year</p>
              <h3 className="mt-2 text-xl font-medium text-white">
                B.Tech, Computer Science and Engineering
              </h3>
              <p className="mt-2 text-slate-300">Joy University</p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
                Developing a foundation in computing while exploring programming, problem solving,
                and the many ways technology can be used to create.
              </p>
            </div>
            <span className="w-fit rounded-full border border-cyan/20 bg-cyan/[0.06] px-3 py-1.5 text-xs text-cyan">
              Currently studying
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
