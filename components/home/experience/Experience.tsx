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
  {
    title: "Advance Technologies Integration, LLC.",
    position: "Senior Javascript Developer",
    time: "2022",
    location: "Atlanta",
    description:
      "I help build and scale core javascript functions and created test units. Also created reusable components for the front end and Azure API integrations.",
    tech: [
      "Vanilla",
      "Azure API",
      "Vuejs",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Rocky Mountain West Insurance LLC.",
    position: "Senior Vuejs Developer",
    time: "2021 - 2022",
    location: "Grand Junction, CO",
    description:
      "Senior Vuejs Developer for Rocky Mountain West Insurance LLC. Created darshboard, reusable components from scratch and integrated api.",
    tech: ["Vuejs", "MongoDB", "Postgres", "Python", "Git", "Github"],
  },
  {
    title: "Simple Cloudology",
    position: "Senior Reactjs Developer",
    time: "2020 - 2021",
    location: "Sheridan, Wyoming",
    description:
      "Worked as a senior developer and created dynamic reusable components, integrated calendly, messaging functionality and project management features.",
    tech: [
      "Reactjs",
      "Nextjs",
      "Sytled Components",
      "Firebase Auth",
      "Websockets",
      "Calendly",
    ],
  },
];
