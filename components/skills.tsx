import { Braces, Code2, Cpu } from "lucide-react";
import { skillGroups } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

const icons = [Code2, Braces, Cpu];

export function Skills() {
  return (
    <section id="skills" className="section-anchor">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="What I'm learning"
          title="My toolkit, in progress."
          description="A growing set of programming languages and foundations I'm exploring as I develop as a computer scientist."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article key={group.category} className="glass rounded-2xl p-6 sm:p-7">
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet/20 bg-violet/[0.08] text-violet">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-medium text-white">{group.category}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-xs text-slate-600">Skills are self-described; this list will grow over time.</p>
      </div>
    </section>
  );
}
