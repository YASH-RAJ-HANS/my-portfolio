import React from "react";
import {
  FaReact, FaNode, FaPython, FaAws, FaDocker, FaGithub, FaJsSquare, FaCss3, FaGit, FaDatabase, FaJava, FaHtml5,
  FaLinux, FaFigma, FaNpm, FaYarn, FaRust, FaSass, FaAngular, FaVuejs, FaPhp, FaWordpress, FaSlack, FaStripe, FaGoogle, FaShopify
} from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMongodb, SiFlask, SiSpringboot, SiRedis, SiVercel, SiD3Dotjs, SiKubernetes, SiJenkins, SiGraphql, SiTailwindcss, SiWebpack } from "react-icons/si";

const Skills = () => {
  const skillset = [
    { name: "React", icon: <FaReact />, description: "Front-end framework for building UIs." },
    { name: "Node.js", icon: <FaNode />, description: "JavaScript runtime for server-side applications." },
    { name: "Python", icon: <FaPython />, description: "Programming language for back-end and automation." },
    { name: "AWS", icon: <FaAws />, description: "Cloud platform for scalable applications." },
    { name: "Docker", icon: <FaDocker />, description: "Container platform for application deployment." },
    { name: "GitHub", icon: <FaGithub />, description: "Version control and collaboration tool." },
    { name: "JavaScript", icon: <FaJsSquare />, description: "Scripting language for web development." },
    { name: "TypeScript", icon: <SiTypescript />, description: "Typed superset of JavaScript." },
    { name: "HTML5", icon: <FaHtml5 />, description: "Markup language for structuring web content." },
    { name: "CSS3", icon: <FaCss3 />, description: "Styling language for web design." },
    { name: "Git", icon: <FaGit />, description: "Version control system for tracking code changes." },
    { name: "PostgreSQL", icon: <SiPostgresql />, description: "Relational database system." },
    { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL database for flexible data storage." },
    { name: "Flask", icon: <SiFlask />, description: "Python micro-framework for web development." },
    { name: "Spring Boot", icon: <SiSpringboot />, description: "Java framework for back-end services." },
    { name: "Redis", icon: <SiRedis />, description: "In-memory data structure store." },
    { name: "Vercel", icon: <SiVercel />, description: "Platform for front-end deployment." },
    { name: "D3.js", icon: <SiD3Dotjs />, description: "JavaScript library for data visualization." },
    { name: "Linux", icon: <FaLinux />, description: "Operating system for development and deployment." },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utility-first CSS framework." },
    { name: "Webpack", icon: <SiWebpack />, description: "JavaScript module bundler." },
    { name: "Kubernetes", icon: <SiKubernetes />, description: "Container orchestration system." },
    { name: "Jenkins", icon: <SiJenkins />, description: "Automation server for CI/CD." },
    { name: "GraphQL", icon: <SiGraphql />, description: "Query language for APIs." },
    { name: "Java", icon: <FaJava />, description: "Programming language for enterprise applications." },
    { name: "SASS", icon: <FaSass />, description: "CSS preprocessor for styling." },
    { name: "Angular", icon: <FaAngular />, description: "Front-end framework for web applications." },
    { name: "Vue.js", icon: <FaVuejs />, description: "JavaScript framework for UIs." },
    { name: "PHP", icon: <FaPhp />, description: "Scripting language for server-side development." },
    { name: "WordPress", icon: <FaWordpress />, description: "CMS platform for building websites." },
    { name: "Slack", icon: <FaSlack />, description: "Collaboration and communication tool." },
    { name: "Stripe", icon: <FaStripe />, description: "Payment processing platform." },
    { name: "Google Cloud", icon: <FaGoogle />, description: "Cloud computing services." },
    { name: "Shopify", icon: <FaShopify />, description: "E-commerce platform." },
    { name: "Figma", icon: <FaFigma />, description: "Design tool for UI/UX." },
    { name: "NPM", icon: <FaNpm />, description: "JavaScript package manager." },
    { name: "Yarn", icon: <FaYarn />, description: "JavaScript package manager." },
    { name: "Rust", icon: <FaRust />, description: "Programming language focused on performance and safety." },
    { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} />, size: "text-4xl" },
    { name: "Node.js", icon: <FaNode style={{ color: "#8CC84B" }} />, size: "text-4xl" },
    { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} />, size: "text-4xl" },
    { name: "AWS", icon: <FaAws style={{ color: "#FF9900" }} />, size: "text-4xl" },
    { name: "Docker", icon: <FaDocker style={{ color: "#2496ED" }} />, size: "text-4xl" },
    { name: "GitHub", icon: <FaGithub style={{ color: "#181717" }} />, size: "text-4xl" },
    { name: "JavaScript", icon: <FaJsSquare style={{ color: "#F7DF1E" }} />, size: "text-4xl" },
    { name: "HTML5", icon: <FaHtml5 style={{ color: "#E34F26" }} />, size: "text-4xl" },
    { name: "CSS3", icon: <FaCss3 style={{ color: "#1572B6" }} />, size: "text-4xl" },
    { name: "Git", icon: <FaGit style={{ color: "#F05032" }} />, size: "text-4xl" },
    { name: "PostgreSQL", icon: <SiPostgresql style={{ color: "#336791" }} />, size: "text-4xl" },
    { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} />, size: "text-4xl" },
    { name: "Flask", icon: <SiFlask style={{ color: "#000000" }} />, size: "text-4xl" },
    { name: "Spring Boot", icon: <SiSpringboot style={{ color: "#6DB33F" }} />, size: "text-4xl" },
    { name: "Redis", icon: <SiRedis style={{ color: "#D82C20" }} />, size: "text-4xl" },
    { name: "Vercel", icon: <SiVercel style={{ color: "#000000" }} />, size: "text-4xl" },
    { name: "D3.js", icon: <SiD3Dotjs style={{ color: "#F9B24E" }} />, size: "text-4xl" },
    { name: "Linux", icon: <FaLinux style={{ color: "#FCC624" }} />, size: "text-4xl" },
    { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#38B2AC" }} />, size: "text-4xl" },
    { name: "Webpack", icon: <SiWebpack style={{ color: "#8DD6F9" }} />, size: "text-4xl" },
    { name: "Kubernetes", icon: <SiKubernetes style={{ color: "#326CE5" }} />, size: "text-4xl" },
    { name: "Jenkins", icon: <SiJenkins style={{ color: "#D24939" }} />, size: "text-4xl" },
    { name: "GraphQL", icon: <SiGraphql style={{ color: "#E535AB" }} />, size: "text-4xl" },
    { name: "Java", icon: <FaJava style={{ color: "#007396" }} />, size: "text-4xl" },
    { name: "SASS", icon: <FaSass style={{ color: "#CC6699" }} />, size: "text-4xl" },
    { name: "Angular", icon: <FaAngular style={{ color: "#DD0031" }} />, size: "text-4xl" },
    { name: "Vue.js", icon: <FaVuejs style={{ color: "#4FC08D" }} />, size: "text-4xl" },
    { name: "PHP", icon: <FaPhp style={{ color: "#8993BE" }} />, size: "text-4xl" },
    { name: "WordPress", icon: <FaWordpress style={{ color: "#21759B" }} />, size: "text-4xl" },
    { name: "Slack", icon: <FaSlack style={{ color: "#4A154B" }} />, size: "text-4xl" },
    { name: "Stripe", icon: <FaStripe style={{ color: "#6772E5" }} />, size: "text-4xl" },
    { name: "Google Cloud", icon: <FaGoogle style={{ color: "#4285F4" }} />, size: "text-4xl" },
    { name: "Shopify", icon: <FaShopify style={{ color: "#96BF48" }} />, size: "text-4xl" },
    { name: "Figma", icon: <FaFigma style={{ color: "#F24E1E" }} />, size: "text-4xl" },
    { name: "NPM", icon: <FaNpm style={{ color: "#CB3837" }} />, size: "text-4xl" },
    { name: "Yarn", icon: <FaYarn style={{ color: "#2C8EBB" }} />, size: "text-4xl" },
    { name: "Rust", icon: <FaRust style={{ color: "#000000" }} />, size: "text-4xl" },
    // Add any additional tools and technologies here
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-8">
      {skillset.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          <div className="text-4xl mb-4 0">{skill.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
          <p className="text-sm text-gray-400">{skill.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
