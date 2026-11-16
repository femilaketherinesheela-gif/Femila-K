import { ArrowUp, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-7 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <a href="#home" className="font-mono text-xs text-slate-400 transition hover:text-cyan">
          <span className="text-cyan">{"<"}</span> femila<span className="text-cyan">{" />"}</span>
        </a>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Femila Ketherine Sheela K. Made with curiosity.
        </p>
        <div className="flex items-center gap-4">
          <a
            aria-label="Femila on GitHub (opens in a new tab)"
            href="https://github.com/femilaketherinesheela-gif"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition hover:text-cyan"
          >
            <Github size={16} />
          </a>
          <a
            aria-label="Femila on LinkedIn (opens in a new tab)"
            href="https://www.linkedin.com/in/femila-ketherine-sheela-k-29872441b"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition hover:text-cyan"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 rounded-full border border-slate-800 p-2 text-slate-400 transition hover:border-cyan/40 hover:text-cyan"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
