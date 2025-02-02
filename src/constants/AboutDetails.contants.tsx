import { cf, zs, instinger, college } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mysql,
    java,
    springboot,
    nodejs,
    codestat,
    react,
    redux,
    sass,
    yt,
    summiz,
    tailwindcss,
    typescript
} from "../assets/icons";

interface Skill {
    imageUrl: string;
    name: string;
    type: string;
}

export const skills:Skill[] = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySql",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "SpringBoot",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

interface Experience {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date:String;
    points: string[];
}

export const experiences:Experience[] = [

    {
        title: "Upcoming DAA",
        company_name: "ZS Associates",
        icon: zs,
        iconBg: "#accbe1",
        date: "Upcoming",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    
    {
        title: "Web Developer Intern",
        company_name: "Instinger",
        icon: instinger,
        iconBg: "#b7e4c7",
        date: "April 2024 - June 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    
    {
        title: "Bachelor of Technology",
        company_name: "NIT Durgapur",
        icon: college,
        iconBg: "#fbc3bc",
        date: "Dec 2021 - Jun 2025",
        points: [
            "Enrolled in B.tech program at chemical engineering at NIT Durgapur in the year 2021.",
            "Maintained a GPA of 7.72 and secured the first placement from the department.",
            "Being into competitive programming and web development and also worked on team projects including SIH(Smart India Hackathon).",
            "Participated in various hackathons and coding competitions.",
        ],
    },
    
    {
        title: "Competetive Programmer",
        company_name: "Codeforces & Codechef",
        icon: cf,
        iconBg: "#a2d2ff",
        date: "Jan 2022 - Present",
        points: [
            "Participating in different coding contest throughout different platforms.",
            "Solved more than 1200+ problem on various coding platform.",
            "Currently Pupil at Codeforces and 3★ at Codechef.",
            "Currently working on DSA and problem solving.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/gm-gautam12',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/gautam-mishra-151745211',
    }
];

export const projects = [
    {
        iconUrl: codestat,
        theme: 'btn-back-blue',
        name: 'CodeStat',
        description: 'Developed a web application that tract users coding platform and help them organize their problem solving on different platforms and notify about contests.',
        link: 'https://github.com/gm-gautam12/CodeStat',
    },
    {
        iconUrl: yt,
        theme: 'btn-back-pink',
        name: 'Youtube Backend',
        description: 'Build complete yuotube backend with some additional features like tweet system using MERN stack .',
        link: 'https://github.com/gm-gautam12/Backend',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Housing for All',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/gm-gautam12/RealEstate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Project Planner',
        description: 'Web App that leverages you to plan your projects and daily works on a regular basis.',
        link: 'https://github.com/gm-gautam12/Project-planner',
    },
];