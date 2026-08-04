export type Category =
  | "Personal"
  | "Work"
  | "Ideas"
  | "Study";

export type Note = {
  id: number;
  title: string;
  description: string;
  category: Category;
  time: string;
};

export const notes: Note[] = [
  {
    id: 1,
    title: "Morning Journal",
    description: "...",
    category: "Personal",
    time: "Just now",
  },
  {
    id: 2,
    title: "Project Roadmap",
    description:
      "Plan the next milestones for Q3. Focus on improving...",
    category: "Work",
    time: "2 hours ago",
  },
  {
    id: 3,
    title: "Startup Ideas",
    description:
      "An app that helps people track their daily habits An app that helps people track their daily habits An app that helps people track their daily habits An app that helps people track their daily habits...",
    category: "Ideas",
    time: "Yesterday",
  },
];