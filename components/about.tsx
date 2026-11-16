import { BookOpen, Code2, Lightbulb } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const highlights = [
  {
    icon: BookOpen,
    title: "Always learning",
    text: "Building a strong foundation in computer science, one new concept at a time.",
  },
  {
    icon: Code2,
    title: "Learning by building",
    text: "Turning lessons into small projects and growing through hands-on practice.",
  },
  {
    icon: Lightbulb,
    title: "Curious by nature",
    text: "Exploring different tools and ideas to discover where I can make an impact.",
  },
];

export function About() {
  return (
    <section id="about" className="section-anchor border-y border-white/[0.05] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <SectionHeading eyebrow="A little about me" title="Curiosity is my starting point." />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              I&apos;m <span className="font-medium text-slate-200">Femila Ketherine Sheela K.</span>,
              a first-year B.Tech student in Computer Science and Engineering at Joy University.
              I&apos;m at the beginning of my developer journey, with plenty to explore and a genuine
              love of learning.
            </p>
            <p>
              From writing my first programs to experimenting with projects, I enjoy the process of
              understanding how things work. I&apos;m growing my skills in programming and web
              technologies, and looking forward to what I can build next.
            </p>
            <p className="border-l-2 border-cyan/50 pl-4 text-slate-300">
              My goal is simple: keep learning, keep building, and become a thoughtful software
              developer.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="glass flex gap-4 rounded-xl p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan/15 bg-cyan/[0.06] text-cyan">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-medium text-slate-100">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                </div>
                <span className="ml-auto font-mono text-[11px] text-slate-600">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
