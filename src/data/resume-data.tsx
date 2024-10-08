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
    "Platform Engineer",
  summary:
    "A motivated Front-End Engineer and Platform Engineer with expertise in Angular, HTML, CSS, JavaScript, and responsive interface development. Skilled in crafting intuitive user experiences using design thinking principles. Published academic research on emerging technologies demonstrates analytical abilities. Google Cloud certified with hands-on experience in cloud infrastructure and services. Passionate about absorbing new frameworks and leveraging technologies for scalable solutions. Eager to join a collaborative team and expand skillset across the design-engineering spectrum. Driven to continuously improve interfaces for optimal usability, aesthetics, and performance.",
  avatarUrl: "https://media.licdn.com/dms/image/C5603AQG1s-Ln-Lht-g/profile-displayphoto-shrink_800_800/0/1646403027294?e=2147483647&v=beta&t=uNMcnMKqpdhgYXInuRj6EczSCqpMY8DfFoVj0bcE5h0",
  personalWebsiteUrl: "https://iminde09.github.io/prathamesh-inde/",
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
      badges: ["Hybrid","Present"],
      title: "Framework Engineer",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Collaborated with experienced platform engineers to support the developmentand maintenance of technology platforms. Gained hands-on experience with cloud computing platforms like AWS and GCP.Assisted in the automation of deployment processes and optimized system performance.",
    },
    {
      company: "Quantiphi",
      link: "https://quantiphi.com/",
      badges: ["Remote"],
      title: "Platform Engineer Intern",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
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
    "Google Cloud","Oracle Cloud","Snowflake"
    // "GraphQL",
    // "Relay",
    // "WebRTC",
  ],
  projects: [
    {
      "title": "Cloud Resource Logger",
      "techStack": ["Node.js", "JavaScript", "AWS SDK", "Commander"],
      "description": "A CLI tool for listing AWS resources such as EC2 instances, S3 buckets, Lambda functions, and DynamoDB tables.",
      "logo": "YourLogoImageHere",  // Replace with the path to your logo image if available
      "link": {
        "label": "cloud-resource-logger on npm",
        "href": "https://www.npmjs.com/package/cloud-resource-logger"
      }
    },    
    {
      title: "Admin Portal",
      techStack: [
        "Angular",
        "TypeScript",
        "Git",
        "Material Design",
        "Web Hosting",
      ],
      description:
       "Dynamic admin portal for an eStore utilizing Angular",
      logo: ConsultlyLogo,
      link: {
        label: "dmin-portal-design.vercel.app",
        href: "https://admin-portal-design.vercel.app/signin",
      },
    },
    {
      title: "Portfolio Website",
      techStack: ["HTML", "CSS", "Bootstrap", "Git","JavaScript"],
      description:
        "A personal portfolio website from scratch using HTML,CSS,JavaScript, and  Bootstrap",
      logo: MonitoLogo,
      link: {
        label: "prathamesh inde",
        href: "https://iminde09.github.io/prathamesh-inde/",
      },
    },
    {
      title: "Hotel Finder App Design",
      techStack: ["Figma", "Wireframe", "Prototyping", "UI/UX"],
      description:
        "UserInterfacefor hotel finding app designed and wireframed in Figma",
      logo: MonitoLogo,
      link: {
        label: "Figma",
        href: "https://www.figma.com/community/file/1068231192029793330/hotel-finding-app",
      },
    },
    {
      title: "Blog Website",
      techStack: ["HTML", "CSS", "Bootstrap", "Git","JavaScript","Firebase"],
      description:
        "A simple Blog Website developed using HTML, CSS, JS, Bootstrap and Firebase",
      logo: MonitoLogo,
      link: {
        label: "blog website",
        href: "https://blogsbyinde.firebaseapp.com/",
      },
    },
  ],
  certification: [
    {
      name: "Snowflake SnowPro Core Certification",
      providerName: "Snowflake",
      link: "https://achieve.snowflake.com/9d9e6bb5-09c1-4a6e-8eb4-704c32cb4844#gs.e9renw",
      issueDate: "2024",
      expirationDate: "2026",
      // certificateId: "ANaq1W"
    },
    {
      name: "Google Cloud Certified - Associate Cloud Architect",
      providerName: "Google Cloud",
      link: "https://google.accredible.com/13f031af-b785-4224-bf86-0c7cccfd91c1?key=258dfc25da7a8b5c117f1e75c8892989ddc8cac9b8d635b0cd697a2fdb6497a5",
      issueDate: "2023",
      expirationDate: "2026",
      // certificateId: "ANaq1W"
    },
    {
      name: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      providerName: "Oracle Cloud",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E22C8AD1BAAA1C8F52DB691B64BEC43C8359B5F638AA852BF3DA3C80FAA7393F",
      issueDate: "2023",
      expirationDate: "2025",
      // certificateId: "Oracle"
    },
    {
      name: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
      providerName: "Oracle Cloud",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=17B223F1C7E0DFBF8048E42974ABCC5D547471B9AC74C350BF0E2E31E59C7769",
      issueDate: "2023",
      expirationDate: "2025",
      // certificateId: "Oracle"
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
