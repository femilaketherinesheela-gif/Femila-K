"use client";

import { motion } from "framer-motion";
import { FolderCode } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

const filters = ["All", "Python", "Web"] as const;
type ProjectFilter = (typeof filters)[number];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" className="section-anchor border-y border-white/[0.05] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="A few things I've built."
            description="Small projects from my learning journey—each one a chance to practice and make something useful."
          />
          <div className="mb-12 flex w-fit gap-1 rounded-full border border-slate-800 bg-slate-950/60 p-1">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3.5 py-2 text-xs transition ${
                  activeFilter === filter
                    ? "bg-cyan text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.name}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.06 }}
              className="glass group flex min-h-[17rem] flex-col rounded-2xl p-6 transition-colors hover:border-cyan/25 sm:p-8"
            >
              <div className="mb-9 flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/[0.08] text-cyan">
                  <FolderCode size={20} />
                </span>
                <span className="font-mono text-xs text-slate-600">{project.number}</span>
              </div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-medium text-white">{project.name}</h3>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 text-[11px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  {project.status}
                </span>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">{project.description}</p>
              <div className="mt-auto flex items-center gap-3 pt-7">
                <span className="rounded-md border border-slate-700/80 px-2.5 py-1 font-mono text-[11px] text-slate-400">
                  {project.language}
                </span>
                <span className="ml-auto text-xs text-slate-500">A learning project</span>
              </div>
            </motion.article>
          ))}
          {filteredProjects.length === 0 && (
            <p className="col-span-full rounded-xl border border-dashed border-slate-800 p-8 text-center text-sm text-slate-500">
              No projects in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
