import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bartłomiej Rasztabiga",
  initials: "BR",
  location: "Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warszawa",
  about:
    "Backend Engineer",
  summary:
    "Passionate backend engineer with 5+ years of experience building distributed systems in the fintech and HR tech domains. Strong advocate of DDD, CQRS and event-driven architecture. Proven leadership in small engineering teams and a track record of shipping scalable cloud-native systems.",
  avatarUrl: "https://avatars.githubusercontent.com/u/8852711?v=4",
  personalWebsiteUrl: "https://rasztabiga.me",
  contact: {
    email: "contact@rasztabiga.me",
    tel: "+48516529545",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartlomiejRasztabiga",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bartlomiej-rasztabiga/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Warsaw University of Technology",
      degree: "Bachelor's Degree in Computer Science. Specialization: Software Engineering",
      start: "2020",
      end: "2024",
      thesis: "Application of microservice architectures in creating scalable web applications"
    },
    {
      school: "Warsaw University of Technology",
      degree: "Master's Degree in Computer Science. Specialization: Intelligent Systems",
      start: "2024",
      end: "",
      thesis: "Application of large language models (LLMs) for generating Docker and Kubernetes configurations"
    },
  ],
  work: [
    {
      company: "Symmetrical.ai",
      link: "https://symmetrical.ai",
      badges: ["Warsaw"],
      title: "Senior Backend Engineer",
      start: "Jan 2022",
      end: "",
      description: "Co-built HRIS and Payroll products from the ground up at a fast-scaling startup backed by $18.5M Series A funding. Participated in two major product pivots and supported engineering team growth and later adaptation to a more focused, lean structure. Took leadership of several technical initiatives and team deliveries. Tech stack: Kotlin, Spring Boot, MongoDB, Apache Kafka, Kubernetes, AWS",
    },
    {
      company: "Sollers Consulting",
      link: "https://sollers.eu/pl/",
      badges: ["Warsaw"],
      title: "Full Stack Engineer",
      start: "Jul 2021",
      end: "Jan 2022",
      description: "Developed new features for the internal HRIS platform used daily by all Sollers employees. Tech stack: Java, Spring Boot, PostgreSQL, React.js, TypeScript",
    },
    {
      company: "Ignite Software Development",
      link: "https://www.ignitesoftware.dev",
      badges: ["Remote"],
      title: "Lead Backend Engineer",
      start: "Jul 2020",
      end: "Jul 2021",
      description: "Led a team of engineers to deliver a SaaS financial reporting platform, reducing report generation time by 60%. Additionally, provided consulting support for enterprise clients integrating and customizing solutions on the Salesforce CPQ platform. Tech stack: Kotlin, Spring Boot, PostgreSQL, Kubernetes, Google Cloud Platform",
    },
    {
      company: "Transition Technologies PSC",
      link: "https://ttpsc.com/pl/",
      badges: [],
      title: "Embedded Software Engineer - Internship",
      start: "Jul 2017",
      end: "Aug 2017",
      description: "Developed a C++ framework to simplify the creation of IoT devices using the ESP8266 platform, enabling faster prototyping of sensor and actuator modules. Tech stack: C++, Arduino Framework",
    },
  ],
  skills: [
    "Kotlin",
    "Java",
    "Spring Boot",
    "Axon Framework",
    "Apache Kafka",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "TypeScript",
    "React.js",
    "Remix.js",
    "Python",
    "FastAPI",
    "Node.js"
  ],
  projects: [
    {
      title: "Master's Thesis",
      techStack: [
        "Thesis Project",
        "Python",
        "Docker",
        "Kubernetes",
        "AI"
      ],
      description: "PaaS enabling all developers to easily run their apps in cloud using LLMs for generating Docker and Kubernetes configurations.",
      link: {
        href: "https://github.com/BartlomiejRasztabiga/masters-thesis",
      },
    },
    {
      title: "Bachelor's Thesis",
      techStack: [
        "Thesis Project",
        "Kotlin",
        "Spring Boot",
        "Axon Framework",
        "MongoDB",
        "TypeScript",
        "Remix.js"
      ],
      description: "Food ordering system build with microservices, DDD, CQRS and Event Sourcing in mind.",
      link: {
        href: "https://github.com/BartlomiejRasztabiga/bachelors-thesis",
      },
    },
    {
      title: "eCommute",
      techStack: [
        "Hackathon Project",
        "TypeScript",
        "React.js",
        "GraphQL",
        "Next.js",
        "Prisma",
        "MongoDB"
      ],
      description: "Tempting new public transport users with financial benefits e.g. tickets cashback. This app has won the 7th edition of BHL Hackathon.",
      link: {
        href: "https://github.com/Hypest-Software/BHL-2022",
      },
    },
    {
      title: "RedAlert",
      techStack: [
        "Hackathon Project",
        "TypeScript",
        "React.js",
        "React Native",
        "Express.js",
        "WebSockets"
      ],
      description: "System allowing users to send emergency requests (with their location) to appropriate public service based on a series of questions. This app has won Hackathon Idea Kielce 2018.",
      link: {
        href: "https://github.com/RedAlertApp",
      },
    },
    {
      title: "ReadMe",
      techStack: [
        "Side Project",
        "Java",
        "Android"
      ],
      description: "Mobile app trying to help people keep motivated to read their books using reminders and progress statistics.",
      link: {
        href: "https://github.com/BartlomiejRasztabiga/readme-app",
      },
    }
  ],
} as const;
