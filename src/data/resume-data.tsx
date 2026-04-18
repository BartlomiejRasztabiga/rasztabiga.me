import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import React from "react";

export const RESUME_DATA = {
  name: "Bartłomiej Rasztabiga",
  initials: "BR",
  location: "Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warszawa",
  about:
    "Senior Software Engineer",
  summary:
    "Passionate software engineer with 6+ years of experience building distributed systems in the fintech and HR tech domains. Strong advocate of event-driven architecture. Proven leadership in small engineering teams and a track record of shipping scalable cloud-native systems. Experienced in owning end-to-end product architecture and driving technical direction. Recently exploring and applying LLM-based agents to automate workflows and enhance system capabilities.",
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
      id: "warsaw-university-of-technology-bachelors",
      school: "Warsaw University of Technology",
      degree: "Bachelor's Degree in Computer Science. Specialization: Software Engineering",
      start: "2020",
      end: "2024",
      thesis: "Application of microservice architectures in creating scalable web applications"
    },
    {
      id: "warsaw-university-of-technology-masters",
      school: "Warsaw University of Technology",
      degree: "Master's Degree in Computer Science. Specialization: Intelligent Systems",
      start: "2024",
      end: "2026",
      thesis: "Application of large language models (LLMs) for generating Docker and Kubernetes configurations"
    },
  ],
  work: [
    {
      company: "Symmetrical.ai",
      link: "https://symmetrical.ai",
      badges: ["Warsaw"],
      title: "Senior Software Engineer",
      start: "Jan 2022",
      end: "",
      description: (
        <div>
          <ul className="list-disc list-inside space-y-1">
            <li>Co-built HRIS and Payroll products from the ground up at a fast-scaling startup backed by $18.5M Series A funding.</li>
            <li>Participated in two major product pivots and supported engineering team growth and later adaptation to a more focused, lean structure.</li>
            <li>Took leadership of several technical initiatives and team deliveries, eventually assuming end-to-end ownership of the product as a Technical Lead, overseeing architecture, delivery, and technical direction.</li>
            <li>Leveraged AI and LLM-based agents to automate workflows and enhance internal tools and product capabilities.</li>
          </ul>
          <p className="mt-1"><strong>Tech stack:</strong> Kotlin, Spring Boot, MongoDB, Apache Kafka, Kubernetes, AWS, TypeScript, React.js, Mastra</p>
        </div>
      ),
    },
    {
      company: "Sollers Consulting",
      link: "https://sollers.eu/pl/",
      badges: ["Warsaw"],
      title: "Software Engineer",
      start: "Jul 2021",
      end: "Jan 2022",
      description: (
        <div>
          <ul className="list-disc list-inside space-y-1">
            <li>Developed new features for the internal HRIS platform used daily by all Sollers employees, working on both backend and frontend layers.</li>
          </ul>
          <p className="mt-1"><strong>Tech stack:</strong> Java, Spring Boot, PostgreSQL, React.js, TypeScript</p>
        </div>
      ),
    },
    {
      company: "Ignite Software Development",
      link: "https://www.ignitesoftware.dev",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "Jul 2020",
      end: "Jul 2021",
      description: (
        <div>
          <ul className="list-disc list-inside space-y-1">
            <li>Led a team of engineers to deliver a SaaS financial reporting platform, reducing report generation time by 60%.</li>
            <li>Provided consulting support for enterprise clients integrating and customizing solutions on the Salesforce CPQ platform.</li>
          </ul>
          <p className="mt-1"><strong>Tech stack:</strong> Kotlin, Spring Boot, PostgreSQL, Kubernetes, Google Cloud Platform</p>
        </div>
      ),
    },
    {
      company: "Transition Technologies PSC",
      link: "https://ttpsc.com/pl/",
      badges: [],
      title: "Embedded Software Engineer - Internship",
      start: "Jul 2017",
      end: "Aug 2017",
      description: (
        <div>
          <ul className="list-disc list-inside space-y-1">
            <li>Developed a C++ framework to simplify the creation of IoT devices using the ESP8266 platform, enabling faster prototyping of sensor and actuator modules.</li>
          </ul>
          <p className="mt-1"><strong>Tech stack:</strong> C++, Arduino Framework</p>
        </div>
      ),
    },
  ],
  skills: [
    "Kotlin",
    "Java",
    "Python",
    "TypeScript",
    "Spring Boot",
    "FastAPI",
    "React.js",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "Apache Kafka",
    "Kubernetes",
    "AWS",
    "Qdrant",
    "DDD",
    "Hexagonal Architecture",
    "Distributed Systems",
    "CQRS",
    "Event Sourcing",
    "AI agents",
    "RAG",
    "LLM integrations",
    "Mastra",
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
};
