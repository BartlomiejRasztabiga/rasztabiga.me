module.exports = {
    siteMetadata: {
        // Site URL for when it goes live
        siteUrl: `https://rasztabiga.me`,
        // Your Name
        name: 'Bartłomiej Rasztabiga',
        // Main Site Title
        title: `Bartłomiej Rasztabiga | Full-Stack Developer`,
        // Description that goes under your name in main bio
        description: `Full-Stack Software Engineer`,
        // Optional: Github account URL
        github: `https://github.com/BartlomiejRasztabiga`,
        // Optional: LinkedIn account URL
        linkedin: `https://www.linkedin.com/in/bartlomiej-rasztabiga/`,
        // Optional: Resume PDF URL
        resume: `https://rasztabiga.me/resume.pdf`,
        // Content of the About Me section
        about: `Full-Stack Developer (Kotlin, Java, Python, JavaScript) eager to broaden skill set in developing web applications.`,
        // Optional: List your projects, they must have `name` and `description`. `link` is optional.
        projects: [
            {
                name: 'eCommute',
                description:
                    'Tempting new public transport users with financial benefits like tickets cashback. This app has won the 7th edition of BHL Hackathon. [Next.js, React.js, GraphQL]',
                link: 'https://github.com/Hypest-Software/BHL-2022',
            },
            {
                name: 'WIP: Fridgy',
                description:
                    'ERP system for your fridge :) More details coming soon...',
                link: 'https://github.com/Fridgy-app',
            },
            {
                name: 'Thingoo',
                description:
                    'I\'m the founder and lead developer of a new open source IoT platform, designed with ease of DIY devices integration in mind. Built with KNI members (https://kni.mini.pw.edu.pl) [Spring (Kotlin) + Angular]',
                link: 'https://github.com/ThingooKNI',
            },
            {
                name: 'Rentally',
                description:
                    'Web application for car rental services. Built for university course. [FastAPI + React.js]',
                link: 'https://github.com/BartlomiejRasztabiga/Rentally',
            },
            {
                name: 'Another Todo App',
                description:
                    'To-Do app built with Firebase Firestore as its storage and serverless backend. [React.js + Firestore]',
                link: 'https://github.com/BartlomiejRasztabiga/AnotherTodoApp',
            },
            {
                name: 'RedAlert',
                description:
                    'System allowing users to send emergency requests (with their location) to appropriate public service (e.g. ambulance) based on a series of questions. This app has won Hackathon Idea Kielce 2018. Consists of mobile app for users and webapp for service operators. [React.js + React Native + Express.js]',
                link: 'https://github.com/RedAlertApp',
            },
            {
                name: 'ReadMe',
                description:
                    'Android app that was supposed to help people keep motivated to read their books using reminders and progress statistics. [Android (Java)]',
                link: 'https://github.com/BartlomiejRasztabiga/readme-app',
            },
        ],
        // Optional: List your experience, they must have `name` and `description`. `link` is optional.
        experience: [
            {
                name: 'Symmetrical.ai',
                description: 'Backend Engineer, January 2022 - Present',
                link: 'https://www.linkedin.com/company/symmetrical-ai',
            },
            {
                name: 'Sollers Consulting',
                description: 'Junior Full-Stack Developer, July 2021 - January 2022',
                link: 'https://pl.linkedin.com/company/sollers-consulting',
            },
            {
                name: 'OpenMRS',
                description: 'Google Summer of Code 2021 Intern, May 2021 - August 2021',
                link: 'https://summerofcode.withgoogle.com/projects/#6176312789565440',
            },
            {
                name: 'Ignite Software Development',
                description: 'Kotlin/Java Software Engineer, July 2019 - August 2020',
                link: 'https://linkedin.com/company/ignite-software-development',
            },
            {
                name: 'Transition Technologies PSC Sp. z o.o.',
                description: 'Embedded C++ Developer Intern (IoT), July 2017 - September 2017',
                link: 'https://ttpsc.com',
            },
        ],
        // Optional: List your skills, they must have `name` and `description`.
        skills: [
            {
                name: 'Languages',
                description:
                    'Kotlin, Java, Python, JavaScript (ES6+)',
            },
            {
                name: 'Frameworks & Libraries',
                description:
                    'Spring, Hibernate, FastAPI, React.js, Node.js, Express.js, Angular, Android',
            },
            {
                name: 'Databases',
                description: 'PostgreSQL, MySQL/MariaDB, MongoDB',
            },
            {
                name: 'Other',
                description:
                    'Git, Docker, Kubernetes, Google Cloud Platform (GCP), CI / CD, Microservices, API design, Agile / Scrum, JUnit, Gradle, Maven, ActiveMQ, MQTT',
            },
            {
                name: 'Currently learning',
                description: 'Domain-driven design, CQRS',
            },
        ],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            wrapperStyle: `margin: 0 0 30px;`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `devfolio`,
                short_name: `devfolio`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`, // This color appears on mobile
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
    ],
};
