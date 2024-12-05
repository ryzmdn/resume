interface Education {
  degree: string;
  institution: string;
  date: { from: string, to: string },
  gpa: number
}

export const educations: Education[] = [
  {
    degree: "Student",
    institution: "Kindergarten",
    date: { from: "10-05-2008", to: "10-06-2009" },
    gpa: 3.17
  },
  {
    degree: "Student",
    institution: "Elementary school",
    date: { from: "17-10-2009", to: "22-11-2015" },
    gpa: 3.54
  },
  {
    degree: "Student",
    institution: "Junior high school",
    date: { from: "10-03-2015", to: "10-03-2018" },
    gpa: 3.7
  },
  {
    degree: "Student",
    institution: "High school",
    date: { from: "16-06-2018", to: "17-05-2021" },
    gpa: 3.4
  },
  {
    degree: "Bachelor Degree",
    institution: "University",
    date: { from: "20-08-2021", to: "22-09-2025" },
    gpa: 4.00
  },
];