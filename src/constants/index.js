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
  persistent,
  reverr,
  nikestore,
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
    iconBg: "#f2f2f2",
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
    iconBg: "#f2f2f2",
    date: "May 2023 - july 2023",
    points: [
      "Led frontend development using React.js, Material UI, and GraphQL to create a responsive company website with interactive components.",
      "Proficiently utilized GraphQL for efficient data handling and explored diverse React libraries, gaining practical insights into their functionalities.",
    ],
  },
  {
    title: "Persistent Martian Intern(Apprenticeship)",
    company_name: "Persistent",
    icon: persistent,
    iconBg: "#f2f2f2",
    date: "Jun 2023 - August 2023",
    points: [
      "Completed an immersive program encompassing Python, Data Structures, Database Management, and Linux, laying a robust foundation for a techoriented career.",
      "Thrived in a diverse group environment, fostering effective teamwork and communication skills, vital for success in the technology field",
    ],
  },
  {
    title: "React Tester Intern",
    company_name: "Reverr",
    icon: reverr,
    iconBg: "#f2f2f2",
    date: "Nov 2023 - Present",
    points: [
      "Conducting comprehensive tests on our React-based web app, swiftly resolving critical bugs to maintain flawless functionality",
      "Ensuring a seamless user experience by meticulously aligning the application's performance with UI/UX design standards",
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
    name: "Nike Store",
    description:
      "A sleek, responsive shopping experience for shoe enthusiasts, built with Vite.js and styled using TailwindCSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "red-text-gradient",
      },
      {
        name: "react-redux",
        color: "blue-text-gradient",
      },
    ],
    image: nikestore,
    source_code_link: "https://github.com/Adityazero4/Nike-store",
    deployed_link: "https://nike-store-1.netlify.app/",
  },
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
];

export { services, technologies, experiences, testimonials, projects };
