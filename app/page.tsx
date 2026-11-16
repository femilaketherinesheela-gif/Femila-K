import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <a
        className="sr-only z-50 rounded-md bg-cyan px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#main"
      >
        Skip to content
      </a>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="page-grid absolute inset-0" />
        <div className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
        <div className="absolute -right-52 top-[32rem] h-[28rem] w-[28rem] rounded-full bg-violet/10 blur-[140px]" />
      </div>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
