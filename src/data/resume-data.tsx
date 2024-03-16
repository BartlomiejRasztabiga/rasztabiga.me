import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bartłomiej Rasztabiga",
  initials: "BR",
  location: "Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Kotlin/Java Backend Engineer",
  summary:
    "Experienced Backend Engineer skilled in Kotlin and Java, with a specialization in designing and building distributed, scalable systems. Over 4 years of experience in working remotely with companies of different sizes and locations.",
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
      thesis: null
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
      description: "Built symmetrical products from the ground up. Ocassionaly lead teams and projects. Technologies: Kotlin, Spring Boot, MongoDB, Apache Kafka",
    },
    {
      company: "Sollers Consulting",
      link: "https://sollers.eu/pl/",
      badges: ["Warsaw"],
      title: "Full Stack Engineer",
      start: "Jul 2021",
      end: "Jan 2022",
      description: "Worked on new features for internal HRIS software, used every day by all Sollers employees. Technologies: Java, Spring Boot, PostgreSQL, React.js, TypeScript",
    },
    {
      company: "Ignite Software Development",
      link: "https://www.ignitesoftware.dev",
      badges: ["Remote"],
      title: "Lead Backend Engineer",
      start: "Jul 2020",
      end: "Jul 2021",
      description: "Lead team of software engineers (3-5 people), developed SaaS tool related to financial reporting. Technologies: Kotlin, Spring Boot, PostgreSQL",
    },
    {
      company: "Transition Technologies PSC",
      link: "https://ttpsc.com/pl/",
      badges: [],
      title: "Embedded Software Engineer - Internship",
      start: "Jul 2017",
      end: "Aug 2017",
      description: "Developed C++ framework, allowing developers to easily create simple sensor/actuator IoT devices based on ESP8266 platform. Technologies: C++, Arduino Framework",
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
    "Kubernetes",
    "TypeScript",
    "React.js",
    "Remix.js",
    "Python",
    "FastAPI"
  ],
  projects: [
    {
      title: "Run - WIP",
      techStack: [
        "Side Project",
        "Python",
      ],
      description: "PaaS enabling all developers to easily run their apps in cloud with as few steps as possible.",
      link: {
        href: "https://github.com/BartlomiejRasztabiga/run",
      },
    },
    {
      title: "Bachelor Thesis",
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
        href: "https://github.com/BartlomiejRasztabiga/thesis",
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
