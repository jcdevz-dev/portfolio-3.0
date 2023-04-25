import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  // {
  //   title: "Advance Technologies Integration, LLC.",
  //   position: "Mid-Level Javascript Developer",
  //   time: "May 2023 - Present",
  //   location: "Rocklin, California 95765",
  //   description:
  //     "I help build and scale core javascript functions and created test units. Also created reusable components for the front end and Azure API integrations.",
  //   tech: [
  //     "JavaScript",
  //     "Vuejs",
  //     "Azure API",
  //     "Git",
  //     "GitLab",
  //   ],
  // },
  // {
  //   title: "Rocky Mountain West Insurance LLC.",
  //   position: "React Developer",
  //   time: "Aug 2022 - Present",
  //   location: "Grand Junction, CO",
  //   description:
  //     "Create functional, high-level, dynamic and reusable components based on mock-up given. Coordinated on team for QA, bug fixes, features and code refactoring.",
  //   tech: [
  //     "React",
  //     "MongoDB",
  //     "Postgres",
  //     "Python",
  //     "Git",
  //     "Github",
  //   ],
  // },
  {
    title: "Advance Technologies Integration, LLC.",
    position: "Mid-Level Javascript Developer",
    time: "Apr 2022 - Jun 2022",
    location: "Rocklin, California 95765",
    description:
      "I help build and scale core javascript functions and created test units. Also created reusable components for the front end and Azure API integrations.",
    tech: [
      "JavaScript",
      "Vuejs",
      "Azure API",
      "Git",
      "GitLab",
    ],
  },
  {
    title: "Rocky Mountain West Insurance LLC.",
    position: "Senior Vuejs Developer",
    time: "Aug 2021 - Jan 2022",
    location: "Grand Junction, CO",
    description:
      "Senior Vuejs Developer for Rocky Mountain West Insurance LLC. Created darshboard, reusable components from scratch and integrate api.",
    tech: [
      "Vuejs",
      "MongoDB",
      "Postgres",
      "Python",
      "Git",
      "Github",
    ],
  },
  {
    title: "Simple Cloudology",
    position: "Senior React Developer",
    time: "Jan 2020 - April 2021",
    location: "Sheridan, Wyoming",
    description:
      "Worked as a senior developer and created dynamic reusable components, integrate calendly, messaging functionality and project management features.",
    tech: [
      "React",
      "Nextjs",
      "Sytled Components",
      "Firebase Auth",
      "Websockets",
      "Calendly",
      "Git",
      "Github",
    ],
  },
  {
    title: "IFormat Logic",
    position: "Senior Fullstack Developer",
    time: "Aug 2020 - Dec 2020",
    location: "Palanginan, Zambales",
    description:
      "Managed and created complex projects from start to finish and also collaborated with other developers. Translated requirements into polished, high-level web application.",
    tech: [
      "Vuejs",
      "Laravel",
      "Tailwind",
      "Git",
      "Github"
    ],
  },
];
