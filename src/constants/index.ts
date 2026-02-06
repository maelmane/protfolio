import type { DockApp, NavIcon, NavLink } from "./types";

const navLinks: NavLink[] = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons: NavIcon[] = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps: DockApp[] = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  //{
  //  id: "photos",
  //  name: "Gallery", // was "Photos"
  //  icon: "photos.png",
  //  canOpen: true,
  //},
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Feb 9, 2024",
    title: "Introduction à Mojo : Commençons par le commencement",
    image: "/images/blog1.png",
    link: "https://syslog.dti.crosemont.quebec/node/62",
  },
  {
    id: 2,
    date: "Feb 16, 2024",
    title: "Mojo: Fondements de la programmation et syntaxe",
    image: "/images/blog1.png",
    link: "https://syslog.dti.crosemont.quebec/node/103",
  },
  {
    id: 3,
    date: "Feb 23, 2024",
    title: "Mojo: Installation et premier programme",
    image: "/images/blog1.png",
    link: "https://syslog.dti.crosemont.quebec/node/143",
  },
  {
    id: 4,
    date: "Mar 3, 2024",
    title: "Mojo: Intégration de Python",
    image: "/images/blog1.png",
    link: "https://syslog.dti.crosemont.quebec/node/197",
  },
  {
    id: 5,
    date: "Mar 9, 2024",
    title: "Mojo: Présentation de projets",
    image: "/images/blog1.png",
    link: "https://syslog.dti.crosemont.quebec/node/208",
  },
  {
    id: 6,
    date: "Mar 20, 2024",
    title: "Mojo: Perspectives futures",
    image: "/images/blog1.png",
    link: "https://syslog.dti.crosemont.quebec/node/255",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "Android", "Kotlin"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "RESTful API"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "MS SQL Server"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Vercel", "Heroku"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/maelmane",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/maël-mane-a08234300",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

//const gallery = [
//  {
//    id: 1,
//    img: "/images/gal1.png",
//  },
//  {
//    id: 2,
//    img: "/images/gal2.png",
//  },
//  {
//    id: 3,
//    img: "/images/gal3.png",
//  },
//  {
//    id: 4,
//    img: "/images/gal4.png",
//  },
//];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  //gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "BrainWave Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "BrainWave.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Fictional landing page for an AI company.",
            "Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "brainwave.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://brainwave-hha8mik9k-maelmanes-projects.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "brainwave.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Simple Kanban",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Simple Kanban.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A responsive Kanban board application that allows you to manage tasks across different stages of your workflow. ",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "simple-kanban.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://simple-kanban-vert.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "simple-kanban.gif",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.gif",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Syvra Planner",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Syvra Planner.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The essential tool for organizing your time quickly and easily. A smart planner designed to work for you.",
            "Enhance your calendar in 2 clicks! It adapts to your mood and optimizes your schedule.",
            "Connect with your favorite external calendars.",
            "It's built with Next.Js and TailwindCSS, so it works smoothly on both computers and mobile devices with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "syvra-planner.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://planner.syvra.tech/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "syvra-planner.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/mael-1.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/mael-3.jpg",
    },
    {
      id: 3,
      name: "photoshoot-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/mael-2.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/mael-3.jpg",
      description: [
        "Hey! I’m Mael 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js and I love making things feel smooth and fast",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me solving Rubik's Cube, reading books, or trying to convince myself to buy a new gadget I want😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
