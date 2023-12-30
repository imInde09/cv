import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Prathamesh Inde",
  initials: "PI",
  location: "Badlapur, India, IST",
  locationLink: "https://www.google.com/maps/place/Badlapur,+Maharashtra/@19.1640014,73.2024717,13z/data=!3m1!4b1!4m6!3m5!1s0x3be7ed5c9bc71bbd:0x87d539b0621850f3!8m2!3d19.1667854!4d73.2367896!16zL20vMDR4NmJo?entry=ttu",
  about:
    "A skilled Front-end engineer and Platform Engineer with expertise in Angular, AWS, and building responsive interfaces.",
  summary:
    "A motivated front-end engineer and platform engineer with expertise in Angular, HTML, CSS, JavaScript and responsive interface development. Skilled in crafting intuitive user experiences using design thinking principles. Published academic research on emerging technologies demonstrates analytical abilities. Google Cloud certified with hands-on experience in cloud infrastructure and services. Passionate about absorbing new frameworks and leveraging technologies for scalable solutions. Eager to join a collaborative team and expand skillset across the design-engineering spectrum. Driven to continuously improve interfaces for optimal usability, aesthetics and performance.",
  avatarUrl: "https://media.licdn.com/dms/image/C5603AQG1s-Ln-Lht-g/profile-displayphoto-shrink_800_800/0/1646403027294?e=2147483647&v=beta&t=uNMcnMKqpdhgYXInuRj6EczSCqpMY8DfFoVj0bcE5h0",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "prathameshinde86@gmail.com",
    tel: "+917057238682",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/imInde09",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prathameshinde/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/indeprathamesh",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Pimri Chinchwad College of Engineering",
      degree: "Bachelor's Degree in Information Technology",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Quantiphi",
      link: "https://quantiphi.com/",
      badges: ["Remote"],
      title: "Platform Engineer Intern",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description:
        "Collaborated with experienced platform engineers to support the developmentand maintenance of technology platforms. Gained hands-on experience with cloud computing platforms like AWS and GCP.Assisted in the automation of deployment processes and optimized system performance.",
    },
    {
      company: "Cancard Inc.",
      link: "https://cancard.com/",
      badges: ["Remote"],
      title: "Software Developer Intern",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Produced Front-end code and visual comps for the user interface. Supported the team in testing and identifying bugs in front-end design. Followed all the design/programming guidelines provided by the software engineering team for all the projects assigned. Collaborated with other engineers to solve design and usability issues.",
    },
    {
      company: "Ambitech Healthcare",
      link: "https://www.ambitechhealthcare.com/",
      badges: ['Hybrid'],
      title: "UI/UX Designer & Front-End Developer",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2022",
      description:
        "Worked on front-end design and development using HTML, CSS, JavaScript, and Bootstrap for the Admin Panel Dashboard. Designed user interfaces for Android applications using Figma.",
    },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Angular",
    "Node.js",
    "AWS",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "Bootstrap",
    // "GraphQL",
    // "Relay",
    // "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
  certification: [
    {
      name: "Google Cloud Certified - Associate Cloud Architect",
      providerName: "Google Cloud",
      link: "https://google.accredible.com/13f031af-b785-4224-bf86-0c7cccfd91c1?key=258dfc25da7a8b5c117f1e75c8892989ddc8cac9b8d635b0cd697a2fdb6497a5",
      issueDate: "2023",
      expirationDate: "2026",
      certificateId: "ANaq1W"
    },
  ],
  publication: [
    {
      name: "A Block-Chain Based Approach for Food Supply Chain Management",
      providerName: "IEEE",
      link: "https://ieeexplore.ieee.org/document/9984473",
      issueDate: "12/26/2022",
      description:"This review paper examines many elements of food supply chain management and  how blockchain may be used in supply chain management."
    },
  ]
} as const;
