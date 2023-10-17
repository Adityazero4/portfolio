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
  tailwind,
  git,
  meta,
  threejs,
  expense,
  musicPlayer,
  TvShow,
  Weather,
  supportGenie,
  chatApp,
  product,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: creator,
  },
  {
    title: "RPA Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: mobile,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React JS Training",
    company_name: "Meta",
    icon: meta,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer Internship",
    company_name: "Support Genie",
    icon: supportGenie,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Built the frontend UI of the company's website using React.js, Material UI, and GraphQL",
      "Developed interactive components, and responsive layouts for the website using React.js and Material UI",
      "Worked with the backend team to integrate the frontend with the backend using GraphQL",
      " Implemented a GraphQL API to fetch data from the backend and display it on the frontend",
      "Explored various React libraries and gained valuable insights into their functionalities and applications",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aditya proved me wrong.",
    name: "Sejal Mahajan",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aditya does.",
    name: "Prajwal Dorkhande",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Abhishek jain",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Powered 3D Product App",
    description:
      "A web application that helps in designing the tshirt using AI and 3D models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "red-text-gradient",
      },
      {
        name: "openAi API",
        color: "blue-text-gradient",
      },
    ],
    image: product,
    source_code_link: "https://github.com/Adityazero4/AI_powered_3D_product",
  },
  {
    name: "Conerse Chat Application",
    description:
      "A web application that allows users to chat with each other and have real time messaging experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "red-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/Adityazero4/Converse",
  },
  {
    name: "Expense Tracker",
    description:
      "A web application that allows users to track their expenses and income, and view their spending habits over time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: expense,
    source_code_link:
      "https://github.com/Adityazero4/Expense-tracker-Using-React-js",
  },
  {
    name: "Javascript Music Player",
    description:
      "A music player built with vanilla JavaScript, HTML, and CSS. It allows users to play, pause, skip, and select different songs.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: musicPlayer,
    source_code_link: "https://github.com/Adityazero4/4.Music-Player",
  },
  {
    name: "TV Show App",
    description:
      "A web application that allows users to see for their favorite TV shows and view information about them",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Rest API",
        color: "pink-text-gradient",
      },
    ],
    image: TvShow,
    source_code_link: "https://github.com/Adityazero4/TV_Show_App",
  },
  {
    name: "Weather App",
    description:
      "A web application that allows users to search for the current weather in any city in the world.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Rest API",
        color: "blue-text-gradient",
      },
    ],
    image: Weather,
    source_code_link: "https://github.com/Adityazero4/1.Weather-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
