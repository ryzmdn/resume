interface Experience {
  title: string;
  company: string;
  date: { from: string; to: string };
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    title: "Junior Web Developer",
    company: "Acme Co.",
    date: { from: "03-10-2021", to: "10-12-2022" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias voluptatem aspernatur hic eum obcaecati, repellat odit. Volupt atibus debitis minus accusamus.",
    achievements: [
      "Lorem ipsum dolor sit.",
      "amet consectetur adipisicing elit.",
    ],
  },
  {
    title: "Senior Web Developer",
    company: "Acme Co.",
    date: { from: "13-12-2022", to: "22-08-2024" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias voluptatem aspernatur hic eum obcaecati, repellat odit. Volupt atibus debitis minus accusamus.",
    achievements: [
      "Ipsum architecto iste assumenda!",
      "Veritatis suscipit perspiciatis fuga aperiam,",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Biffco Enterprises Ltd.",
    date: { from: "16-11-2024", to: "20-01-2026" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias voluptatem aspernatur hic eum obcaecati, repellat odit. Volupt atibus debitis minus accusamus.",
    achievements: ["similique quae molestiae expedita rem! Similique"],
  },
];
