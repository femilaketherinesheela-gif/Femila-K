export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Project = {
  name: string;
  description: string;
  language: string;
  category: "Python" | "Web";
  status: string;
  number: string;
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    skills: ["C++", "C#", "Python"],
  },
  {
    category: "Web technologies",
    skills: ["HTML", "JavaScript"],
  },
  {
    category: "Foundations",
    skills: ["Problem solving"],
  },
];

export const projects: Project[] = [
  {
    name: "STARK AI Agent",
    description:
      "A Python AI agent project, built as part of an ongoing journey into intelligent software.",
    language: "Python",
    category: "Python",
    status: "Developed",
    number: "01",
  },
  {
    name: "Student CGPA Calculator",
    description:
      "A Python project for calculating a student's cumulative grade point average.",
    language: "Python",
    category: "Python",
    status: "Completed",
    number: "02",
  },
];

export const typingPhrases = [
  "Aspiring Software Developer",
  "First-year CSE Student",
  "Lifelong Learner",
];
