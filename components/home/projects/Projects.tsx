import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Elancerz",
    imgSrc: "/project-imgs/elancerz.png",
    code: "https://www.github.com",
    projectLink: "https://elancerz.com/",
    tech: ["React", "Nextjs", "Sytled Components","Firebase Auth", "Laravel"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
         Worked as a senior developer and created dynamic reusable components, integrated calendly, messaging and project management features.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Styled components,
          connected to a Laravel backend, with data stored in Mysql.
        </p>
      </>
    ),
  },
  {
    title: "Agency Iron Admin",
    imgSrc: "/project-imgs/agency-iron-crm.png",
    code: "https://www.github.com",
    projectLink: "https://agency-iron-crm.herokuapp.com/",
    tech: ["React", "MUI", "MongoDB", "Postgres", "Python"],
    description:
      "A Dashboard for clients and admin of Rocky Mountain West Insurance LLC. using Vuejs and re-worked on Reactjs.",
    modalContent: (
      <>
        <p>
          Worked as a senior developer for this web application. Integrated api&apos;s, Created dynamic and reusable components.
        </p>
        <p>
          I work primarily on the frontend, creating reusable components and inegrating api.
        </p>
        <p>
          The team in total consists of 3 developers. This is a passion project
          for all of us.
        </p>
      </>
    ),
  },
  {
    title: "WorshipHIM",
    imgSrc: "/project-imgs/wh_app.png",
    code: "https://www.github.com",
    projectLink: "https://play.google.com/store/apps/details?id=com.ellinx.lightapps.worshiphim&hl=en&gl=US",
    tech: ["React", "React Native", "Styled Components", "Android"],
    description:
      "WorshipHIM is a chord and lyrics app developed to help ease everyone in their worship to God.",
    modalContent: (
      <>
        <p>
          WorshipHIM is a chord and lyrics app developed to help ease everyone in their worship to God.
          So that all may know, from the rising of the sun to its setting,
          That there is none besides God. He is the Lord and there&apos;s no other! Praise Him, Worship Him!
        </p>
        <p>
          This is a very fun project that i made using React Native.
        </p>
      </>
    ),
  },
  {
    title: "WorshipHIM Landing Page",
    imgSrc: "/project-imgs/worshiphim.png",
    code: "https://www.github.com",
    projectLink: "https://worshiphim.vercel.app/",
    tech: ["React", "Nextjs", "Tailwind", "Google Play Scrapper", "Ko-Fi"],
    description:
      "Landing Page of WorshipHIM mobile application for showcasing feature rich and awesome tools of the app.",
    modalContent: (
      <>
        <p>This is another self project that i made to showcase our mobile app.</p>
        <p>
          I integrated ko-fi donation and uses Template for this Nextjs Project. 
          I also use a plugin for scrapping data from our google play to display directly
          on the landing page.
        </p>
      </>
    ),
  },
];
