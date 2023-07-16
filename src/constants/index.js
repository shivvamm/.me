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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  monzen,
  ielts,
  carrent,
  jobit,
  tripguide,
  imageination,
  shloka,
  threejs,
  pixaby,
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
    id: "projects",
    title: "projects",
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
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Software Development Intern",
    company_name: "NITD",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2019 - June 2020",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Helping with student co-ordination",
    ],
  },
  {
    title: "Internshala Student Partner",
    company_name: "Internshala",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug  2021 - Oct 2021",
    points: [
      "Promoting Internshala internships among your peers.",
      "Helping your peers learn new skills via Internshala Training.",
      "Training your peers to get an Internship.",
    ],
  },
  {
    title: "Ninja EnterPreneur",
    company_name: "Coding Ninja",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Mar 2023",
    points: [
      "Distribute this important responsibility of helping Coding Ninjas reach out to faculties, students, clubs, student societies and other communities across campuses.",
      "And more than anything, you will have a part to play in helping other students ace their interviews and exams. ",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Monzen Sustainable Technologies",
    icon: monzen,
    iconBg: "#383E56",
    date: "Mar 2023 - May 2023",
    points: [
      "During my internship with Monzen Sustainable Technologies, I had the privilege of contributing to the web development team and making a meaningful impact on various projects., students, clubs, student societies and other communities across campuses.",
      "Key Accomplishments:",
      "Successfully completed a 3-month internship, showcasing exceptional dedication and a strong work ethic.",
      "Developed and maintained web applications using HTML, CSS, and JavaScript, ensuring optimal functionality.",
      "Collaborated in meetings and brainstorming sessions, contributing innovative ideas to enhance project outcomes.",
      "Assisted in debugging and troubleshooting website issues, demonstrating problem-solving abilities.",
      "Worked closely with senior developers, acquiring valuable knowledge and improving coding skills.",
      "Completed assigned projects within set deadlines, showcasing excellent time management."
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "IELTS Proficiency",
    icon: ielts,
    iconBg: "#383E56",
    date: "May 2023 - Present 2023",
    points: [
      "Developed admin-specific features and constructed an admin dashboard from scratch for IELTS Proficiency",
      "Used Strapi CMS and Express, implementing an advanced architecture with MVC pattern for efficient data flow",
      "Implemented a robust Restful Web Services API using Express.js, and PostgreSQL for seamless interaction", 
      "Designed and implemented an end-to-end solution for efficient storage and retrieval of Student data",
      "Incorporated Socket.IO to create interactive features like live chat, notifications, and real-time data updates.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Imageination",
    description:
      "A Text to Image FullStack application using Node.js, Express.js and MongoDB, and managed content  with Cloudinary.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: imageination,
    source_code_link: "https://github.com/shivvamm/imagegeneration",
  },
  {
    name: "Shloka",
    description:
      "a Backend free Restful API serving quality Sanskrit Shlokas on Express.Js, Redis, Jest.Js",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "jest.js",
        color: "blue-text-gradient",
      },
    ],
    image: shloka,
    source_code_link: "https://github.com/shivvamm/shloka",
  },
  {
    name: "Lyriks",
    description:
      "Developed a Spotify clone.It contains a modern homepage, fully-fledged music player, search, lyrics, song exploration, popular music around you, worldwide top charts, and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://sp-lyriks.netlify.app/",
  },
  {
    name: "WebRooms",
    description:
      "Online chat app with Socket.io and React using HarperDB for storing messages.Online chat app with Socket.io and React using HarperDB for storing messages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Harperdb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/shivvamm/webroom.github.io",
  },
  {
    name: "PxabyApp",
    description:
      "Developed website using core PHP. The website contains  a modern homepage, fully-fledged view section for searching images and vedios from Pixaby.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: pixaby,
    source_code_link: "https://github.com/shivvamm/Pixabyapp",
  },
  {
    name: "StoryBook",
    description:
      "Developed a website using core PHP.   The website contains  a modern homepage, fully-fledged view section for posts and form with validation.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/shivvamm/Story_Book",
  },
];

export { services, technologies, experiences, testimonials, projects };
