import {
  mobile,
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
  supportGenie,
  product,
  persistent,
  reverr,
  nikestore,
  admin,
  nextjs,
  firebase,
  python,
  cpp,
  prisma,
  aws,
  openinapp,
  casecobra,
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
    name: "Git",
    icon: git,
  },
  { name: "Next JS", icon: nextjs },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Prisma",
    icon: prisma,
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
      "Enhanced the company's online presence with a user-friendly, interactive interface.",
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
      "Identified and fixed critical bugs in a React web application.",
      "Ensured alignment with UI/UX standards for a seamless user experience.",
      "Enhanced application performance and usability through comprehensive testing.",
    ],
  },
  {
    title: "Jr. Frontend Developer",
    company_name: "OpeninApp",
    icon: openinapp,
    iconBg: "#f2f2f2",
    date: "Feb 2024 - Present",
    points: [
      "Developed and enhanced user interfaces using React.js, Next.js, Tailwind CSS, and TypeScript.",
      "Integrated frontend with backend using REST APIs, improving performance significantly.",
      "Achieved a 200% increase in user adoption, driving revenue generation through affiliate links.",
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
    name: "Case-cobra",
    description:
      "CaseCobra: A modern e-commerce platform for custom phone cases, built with Next.js 14, TypeScript, Tailwind CSS, and secure authentication via Kinde.",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "orange-text-gradient",
      },
      {
        name: "prostgres",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "kinde-auth",
        color: "blue-text-gradient",
      },
    ],
    image: casecobra,
    source_code_link: "https://github.com/Adityazero4/case-cobra",
    deployed_link: "https://case-cobra-beta.vercel.app",
  },
  {
    name: "Nike Store WebApp",
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
        color: "pink-text-gradient",
      },
      {
        name: "react-redux",
        color: "orange-text-gradient",
      },
    ],
    image: nikestore,
    source_code_link: "https://github.com/Adityazero4/Nike-store",
    deployed_link: "https://aditya-nike-store.netlify.app/",
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
        color: "orange-text-gradient",
      },
      {
        name: "openAi API",
        color: "pink-text-gradient",
      },
    ],
    image: product,
    source_code_link: "https://github.com/Adityazero4/AI_powered_3D_product",
    deployed_link: "https://3d-product-shirt.netlify.app/",
  },
  {
    name: "SmartDash Admin Suite",
    description:
      "This is a sleek React admin panel for seamless team management, contact organization, and data visualization with Material-UI and @nivo charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "nivo-charts",
        color: "pink-text-gradient",
      },
      {
        name: "formik-yup",
        color: "orange-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/Adityazero4/SmartDash-Admin-Suite",
    deployed_link: "https://aditya-admin-panel.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
