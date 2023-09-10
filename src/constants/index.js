import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  github,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  stealth,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Discord Bot Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Youtuber/Streamer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Website Developer",
    company_name: "HomeZone",
    icon: github,
    iconBg: "#383E56",
    date: "March 2022",
    points: [
      "I worked as a Website developer.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Database design and development.",
    ],
  },
  {
    title: "Website Developer",
    company_name: "hustle-nation",
    icon: github,
    iconBg: "#383E56",
    date: "March 2023",
    points: [
      "I worked as a Website developer.",
      "My role was to develop the website handle the API calls, manage the database and increase conversions.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Database design and development.",
    ],
  },
  {
    title: "Bot Developer",
    company_name: "Skynet",
    icon: github,
    iconBg: "#383E56",
    date: "Jan 2020 - Feb 2022",
    points: [
      "Developing and maintaining a discord bot made with discord.py.",
      "Implementing Innovative features.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Hardik",
    designation: "Developer",
    company: "Stealth",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Aakash",
    designation: "CEO",
    company: "HustleNation",
  },
  {
    testimonial:
      "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Manoy",
    designation: "CMO",
    company: "HomeZoneIndia",
  },
];

const projects = [
  {
    name: "Stealth",
    description: "Advanced social media platform made with react and firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: stealth,
    source_code_link: "https://github.com/SCHW18TZ/stealth",
  },
];

export { services, technologies, experiences, testimonials, projects };
