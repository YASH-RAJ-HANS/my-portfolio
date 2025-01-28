// import React from "react";
// import {
//   FaReact,
//   FaNode,
//   FaPython,
//   FaAws,
//   FaDocker,
//   FaGithub,
//   FaJsSquare,
//   FaCss3,
//   FaGit,
//   FaDatabase,
//   FaJava,
//   FaHtml5,
//   FaLinux,
//   FaFigma,
//   FaNpm,
//   FaYarn,
//   FaRust,
//   FaSass,
//   FaAngular,
//   FaVuejs,
//   FaPhp,
//   FaWordpress,
//   FaSlack,
//   FaStripe,
//   FaGoogle,
//   FaShopify,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiPostgresql,
//   SiMongodb,
//   SiFlask,
//   SiSpringboot,
//   SiRedis,
//   SiVercel,
//   SiD3Dotjs,
//   SiKubernetes,
//   SiJenkins,
//   SiGraphql,
//   SiTailwindcss,
//   SiWebpack,
// } from "react-icons/si";

// const Skills = () => {
//   const skillset = [
//     {
//       name: "React",
//       icon: <FaReact style={{ color: "#61DAFB" }} />,
//       size: "text-4xl",
//       description: "A JavaScript library for building user interfaces.",
//     },
//     {
//       name: "Node.js",
//       icon: <FaNode style={{ color: "#8CC84B" }} />,
//       size: "text-4xl",
//       description:
//         "A JavaScript runtime built on Chrome's V8 engine for server-side applications.",
//     },
//     {
//       name: "Python",
//       icon: <FaPython style={{ color: "#3776AB" }} />,
//       size: "text-4xl",
//       description:
//         "A high-level programming language used for back-end and automation.",
//     },
//     {
//       name: "AWS",
//       icon: <FaAws style={{ color: "#FF9900" }} />,
//       size: "text-4xl",
//       description:
//         "Amazon Web Services, a cloud platform for scalable application deployment.",
//     },
//     {
//       name: "Docker",
//       icon: <FaDocker style={{ color: "#2496ED" }} />,
//       size: "text-4xl",
//       description:
//         "A platform for developing, shipping, and running applications in containers.",
//     },
//     {
//       name: "GitHub",
//       icon: (
//         <FaGithub
//           style={{
//             color: "#181717",
//             backgroundColor: "#f5f5f5",
//             borderRadius: "50%",
//           }}
//         />
//       ),
//       size: "text-4xl",
//       description:
//         "A web-based platform for version control and collaboration using Git.",
//     },
//     {
//       name: "JavaScript",
//       icon: <FaJsSquare style={{ color: "#F7DF1E" }} />,
//       size: "text-4xl",
//       description:
//         "A versatile scripting language primarily used for web development.",
//     },
//     {
//       name: "HTML5",
//       icon: <FaHtml5 style={{ color: "#E34F26" }} />,
//       size: "text-4xl",
//       description:
//         "A markup language used for structuring and presenting content on the web.",
//     },
//     {
//       name: "CSS3",
//       icon: <FaCss3 style={{ color: "#1572B6" }} />,
//       size: "text-4xl",
//       description:
//         "A styling language used to describe the presentation of web pages.",
//     },
//     {
//       name: "Git",
//       icon: <FaGit style={{ color: "#F05032" }} />,
//       size: "text-4xl",
//       description:
//         "A version control system that tracks changes in source code during software development.",
//     },
//     {
//       name: "PostgreSQL",
//       icon: <SiPostgresql style={{ color: "#336791" }} />,
//       size: "text-4xl",
//       description: "A powerful, open-source object-relational database system.",
//     },
//     {
//       name: "MongoDB",
//       icon: <SiMongodb style={{ color: "#47A248" }} />,
//       size: "text-4xl",
//       description: "A NoSQL database designed for flexibility and scalability.",
//     },
//     {
//       name: "Flask",
//       icon: (
//         <SiFlask
//           style={{
//             color: "#000000",
//             backgroundColor: "#f5f5f5",
//             borderRadius: "50%",
//           }}
//         />
//       ),
//       size: "text-4xl",
//       description: "A lightweight Python micro-framework for web development.",
//     },
//     {
//       name: "Spring Boot",
//       icon: <SiSpringboot style={{ color: "#6DB33F" }} />,
//       size: "text-4xl",
//       description:
//         "A Java framework that simplifies the creation of stand-alone, production-ready applications.",
//     },
//     {
//       name: "Redis",
//       icon: <SiRedis style={{ color: "#D82C20" }} />,
//       size: "text-4xl",
//       description:
//         "An in-memory data structure store used as a database, cache, and message broker.",
//     },
//     {
//       name: "Vercel",
//       icon: (
//         <SiVercel
//           style={{
//             color: "#000000",
//             backgroundColor: "#f5f5f5",
//             borderRadius: "50%",
//           }}
//         />
//       ),
//       size: "text-4xl",
//       description:
//         "A platform for static site hosting and front-end development.",
//     },
//     {
//       name: "D3.js",
//       icon: <SiD3Dotjs style={{ color: "#F9B24E" }} />,
//       size: "text-4xl",
//       description:
//         "A JavaScript library for producing dynamic, interactive data visualizations in web browsers.",
//     },
//     {
//       name: "Linux",
//       icon: <FaLinux style={{ color: "#FCC624" }} />,
//       size: "text-4xl",
//       description:
//         "An open-source operating system kernel widely used for servers and development.",
//     },
//     {
//       name: "Tailwind CSS",
//       icon: <SiTailwindcss style={{ color: "#38B2AC" }} />,
//       size: "text-4xl",
//       description:
//         "A utility-first CSS framework for building custom designs quickly.",
//     },
//     {
//       name: "Webpack",
//       icon: <SiWebpack style={{ color: "#8DD6F9" }} />,
//       size: "text-4xl",
//       description: "A module bundler for JavaScript applications.",
//     },
//     {
//       name: "Kubernetes",
//       icon: <SiKubernetes style={{ color: "#326CE5" }} />,
//       size: "text-4xl",
//       description:
//         "A container orchestration system for automating application deployment, scaling, and management.",
//     },
//     {
//       name: "Jenkins",
//       icon: <SiJenkins style={{ color: "#D24939" }} />,
//       size: "text-4xl",
//       description:
//         "An automation server used for continuous integration and delivery.",
//     },
//     {
//       name: "GraphQL",
//       icon: <SiGraphql style={{ color: "#E535AB" }} />,
//       size: "text-4xl",
//       description:
//         "A query language for APIs, and a runtime for executing those queries.",
//     },
//     {
//       name: "Java",
//       icon: <FaJava style={{ color: "#007396" }} />,
//       size: "text-4xl",
//       description:
//         "A high-level, class-based programming language for building enterprise applications.",
//     },
//     {
//       name: "SASS",
//       icon: <FaSass style={{ color: "#CC6699" }} />,
//       size: "text-4xl",
//       description:
//         "A preprocessor scripting language that is interpreted or compiled into CSS.",
//     },
//     {
//       name: "Angular",
//       icon: <FaAngular style={{ color: "#DD0031" }} />,
//       size: "text-4xl",
//       description: "A front-end framework for building web applications.",
//     },
//     {
//       name: "Vue.js",
//       icon: <FaVuejs style={{ color: "#4FC08D" }} />,
//       size: "text-4xl",
//       description:
//         "A progressive JavaScript framework used to build user interfaces.",
//     },
//     {
//       name: "PHP",
//       icon: <FaPhp style={{ color: "#8993BE" }} />,
//       size: "text-4xl",
//       description:
//         "A scripting language widely used for server-side web development.",
//     },
//     {
//       name: "WordPress",
//       icon: <FaWordpress style={{ color: "#21759B" }} />,
//       size: "text-4xl",
//       description:
//         "A content management system (CMS) for building websites and blogs.",
//     },
//     {
//       name: "Slack",
//       icon: <FaSlack style={{ color: "#4A154B" }} />,
//       size: "text-4xl",
//       description: "A collaboration and communication tool for teams.",
//     },
//     {
//       name: "Stripe",
//       icon: <FaStripe style={{ color: "#6772E5" }} />,
//       size: "text-4xl",
//       description: "A payment processing platform for businesses.",
//     },
//     {
//       name: "Google Cloud",
//       icon: <FaGoogle style={{ color: "#4285F4" }} />,
//       size: "text-4xl",
//       description: "A suite of cloud computing services offered by Google.",
//     },
//     {
//       name: "Shopify",
//       icon: <FaShopify style={{ color: "#96BF48" }} />,
//       size: "text-4xl",
//       description:
//         "An e-commerce platform for online stores and retail point-of-sale systems.",
//     },
//     {
//       name: "Figma",
//       icon: <FaFigma style={{ color: "#F24E1E" }} />,
//       size: "text-4xl",
//       description: "A collaborative design tool for UI/UX and graphic design.",
//     },
//     {
//       name: "NPM",
//       icon: <FaNpm style={{ color: "#CB3837" }} />,
//       size: "text-4xl",
//       description: "A package manager for JavaScript programming.",
//     },
//     {
//       name: "Yarn",
//       icon: <FaYarn style={{ color: "#2C8EBB" }} />,
//       size: "text-4xl",
//       description: "A JavaScript package manager alternative to NPM.",
//     },
//     {
//       name: "Rust",
//       icon: (
//         <FaRust
//           style={{
//             color: "#000000",
//             backgroundColor: "#f5f5f5",
//             borderRadius: "50%",
//           }}
//         />
//       ),
//       size: "text-4xl",
//       description:
//         "A programming language focused on performance and memory safety.",
//     },
//   ];

//   return (
//     <div className="flex flex-col w-full items-center justify-center">
//      <div className="w-10/12 p-4 text-2xl font-bold my-4 ">Tech Skills</div>
//     <div className="w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 max-sm:w-full max-sm:gap-4 h-[70vh] overflow-y-auto custom-scroll bg-zinc-900">

//       {skillset.map((skill, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center p-4 max-md:p-2 bg-gray-800 hover:bg-gray-700/50 rounded-[0.7rem] shadow-md transition-all duration-500 hover:scale-105 cursor-pointer relative max-w-[280px]"
//         >
//           <div className="flex p-2 w-full mb-2 justify-between items-center  ">
//             <div className="text-4xl mb-4 max-md:text-3xl">{skill.icon}</div>
//             <div className="flex md:flex-col">
//               <button className="absolute top-4 right-4 text-[10px] rounded-[3px] bg-indigo-600 px-2 font-semibold text-white py-1 ">
//                 Expert
//               </button>
//               <h3 className="text-xl max-md:text-lg font-semibold text-white mt-2 max-md:mt-6">
//                 {skill.name}
//               </h3>
//             </div>
//           </div>

//           <p className="text-sm  text-gray-400 text-center">
//             {skill.description}
//           </p>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Skills;

import React, { useState } from "react";
import {
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaDocker,
  FaGithub,
  FaJsSquare,
  FaCss3,
  FaGit,
  FaHtml5,
  FaWordpress,
  FaPlug,
  FaTrello,
  FaDatabase,
  FaGoogle,
  FaFigma,
  FaVuejs,
  FaJava,
} from "react-icons/fa";
import Skillsvg from "../../app/Skill.svg";
import {
  SiApachekafka,
  SiChakraui,
  SiContentful,
  SiCypress,
  SiEthereum,
  SiExpress,
  SiFlutter,
  SiGrafana,
  SiGraphql,
  SiHuggingface,
  SiJenkins,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrometheus,
  SiPuppeteer,
  SiRedis,
  SiRedux,
  SiSolidity,
  SiSpringboot,
  SiStorybook,
  SiSwagger,
  SiTensorflow,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  const [filter, setFilter] = useState("All");
  const [sortOption, setSortOption] = useState("None");

  const skillset = [
    // ========== Languages ==========
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-[#F7DF1E]" />,
      description: "Core programming language for web development",
      type: "Language",
      proficiency: "Expert",
      experience: 6,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[#3178C6]" />,
      description: "Typed superset of JavaScript",
      type: "Language",
      proficiency: "Advanced",
      experience: 4,
    },
    {
      name: "Python",
      icon: <FaPython className="text-[#3776AB]" />,
      description: "General-purpose programming language",
      type: "Language",
      proficiency: "Expert",
      experience: 5,
    },
    {
      name: "Java",
      icon: <FaJava className="text-[#007396]" />,
      description: "Object-oriented programming language",
      type: "Language",
      proficiency: "Advanced",
      experience: 4,
    },

    // ========== Frontend Technologies ==========
    {
      name: "React.js",
      icon: <FaReact className="text-[#61DAFB]" />,
      description: "Frontend component library",
      type: "Frontend",
      proficiency: "Expert",
      experience: 5,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      description: "React framework for production",
      type: "Frontend",
      proficiency: "Advanced",
      experience: 3,
    },
    {
      name: "Vue.js",
      icon: <FaVuejs className="text-[#4FC08D]" />,
      description: "Progressive JavaScript framework",
      type: "Frontend",
      proficiency: "Intermediate",
      experience: 2,
    },

    // ========== Backend Technologies ==========
    {
      name: "Node.js",
      icon: <FaNode className="text-[#8CC84B]" />,
      description: "JavaScript runtime environment",
      type: "Backend",
      proficiency: "Expert",
      experience: 5,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-[#000000]" />,
      description: "Node.js web framework",
      type: "Backend",
      proficiency: "Expert",
      experience: 4,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-[#6DB33F]" />,
      description: "Java application framework",
      type: "Backend",
      proficiency: "Intermediate",
      experience: 2,
    },

    // ========== Database ==========
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248]" />,
      description: "NoSQL document database",
      type: "Database",
      proficiency: "Advanced",
      experience: 4,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-[#336791]" />,
      description: "Relational database system",
      type: "Database",
      proficiency: "Expert",
      experience: 5,
    },
    {
      name: "Redis",
      icon: <SiRedis className="text-[#DC382D]" />,
      description: "In-memory data store",
      type: "Database",
      proficiency: "Intermediate",
      experience: 3,
    },

    // ========== DevOps ==========
    {
      name: "Docker",
      icon: <FaDocker className="text-[#2496ED]" />,
      description: "Containerization platform",
      type: "DevOps",
      proficiency: "Expert",
      experience: 4,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="text-[#326CE5]" />,
      description: "Container orchestration system",
      type: "DevOps",
      proficiency: "Advanced",
      experience: 3,
    },
    {
      name: "Jenkins",
      icon: <SiJenkins className="text-[#D24939]" />,
      description: "Automation server",
      type: "DevOps",
      proficiency: "Intermediate",
      experience: 2,
    },

    // ========== Web3 ==========
    {
      name: "Solidity",
      icon: <SiSolidity className="text-[#363636]" />,
      description: "Smart contract language",
      type: "Web3",
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "Ethereum",
      icon: <SiEthereum className="text-[#3C3C3D]" />,
      description: "Blockchain platform",
      type: "Web3",
      proficiency: "Intermediate",
      experience: 2,
    },
    // {
    //   name: "Hardhat",
    //   icon: <SiHardhat className="text-[#FFF100]" />,
    //   description: "Ethereum development environment",
    //   type: "Web3",
    //   proficiency: "Intermediate",
    //   experience: 1
    // },

    // ========== Tools & Platforms ==========
    {
      name: "Vercel",
      icon: <SiVercel className="text-black dark:text-white" />,
      description: "Cloud platform for web deployment",
      type: "Technology",
      proficiency: "Expert",
      experience: 3,
    },
    {
      name: "Figma",
      icon: <FaFigma className="text-[#F24E1E]" />,
      description: "Collaborative design tool",
      type: "Technology",
      proficiency: "Advanced",
      experience: 3,
    },
    // {
    //   name: "Mouseflow",
    //   icon: <SiMouseflow className="text-[#FF6D6D]" />,
    //   description: "User analytics and session recording",
    //   type: "Technology",
    //   proficiency: "Intermediate",
    //   experience: 2
    // },

    // ========== AI Tools ==========
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="text-[#FF6F00]" />,
      description: "Machine learning framework",
      type: "Technology",
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "Hugging Face",
      icon: <SiHuggingface className="text-[#FFD21E]" />,
      description: "AI model repository",
      type: "Technology",
      proficiency: "Intermediate",
      experience: 1,
    },

    // ========== Cloud Technologies ==========
    {
      name: "AWS",
      icon: <FaAws className="text-[#FF9900]" />,
      description: "Cloud computing platform",
      type: "DevOps",
      proficiency: "Advanced",
      experience: 3,
    },
    {
      name: "Google Cloud",
      icon: <FaGoogle className="text-[#4285F4]" />,
      description: "Cloud services platform",
      type: "DevOps",
      proficiency: "Intermediate",
      experience: 2,
    },

    // ========== State Management ==========
    {
      name: "Redux",
      icon: <SiRedux className="text-[#764ABC]" />,
      description: "State management library",
      type: "Technology",
      proficiency: "Expert",
      experience: 4,
    },
    // {
    //   name: "Zustand",
    //   icon: <SiZustand className="text-[#764ABC]" />,
    //   description: "State management solution",
    //   type: "Technology",
    //   proficiency: "Advanced",
    //   experience: 2
    // },

    // ========== Testing ==========
    {
      name: "Jest",
      icon: <SiJest className="text-[#C21325]" />,
      description: "JavaScript testing framework",
      type: "Hard",
      proficiency: "Advanced",
      experience: 3,
    },
    {
      name: "Cypress",
      icon: <SiCypress className="text-[#17202C]" />,
      description: "End-to-end testing framework",
      type: "Hard",
      proficiency: "Intermediate",
      experience: 2,
    },

    // ========== Soft Skills ==========
    {
      name: "System Design",
      icon: <FaDatabase className="text-[#007396]" />,
      description: "Large-scale system architecture",
      type: "Soft",
      proficiency: "Advanced",
      experience: 4,
    },
    {
      name: "Agile Methodology",
      icon: <FaTrello className="text-[#0079BF]" />,
      description: "Project management framework",
      type: "Soft",
      proficiency: "Expert",
      experience: 5,
    },

    // ========== Mobile Development ==========
    {
      name: "React Native",
      icon: <FaReact className="text-[#61DAFB]" />,
      description: "Cross-platform mobile framework",
      type: "Technology",
      proficiency: "Advanced",
      experience: 3,
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="text-[#02569B]" />,
      description: "UI toolkit for native apps",
      type: "Technology",
      proficiency: "Intermediate",
      experience: 2,
    },

    // ========== Additional Technologies ==========
    {
      name: "GraphQL",
      icon: <SiGraphql className="text-[#E535AB]" />,
      description: "API query language",
      type: "Technology",
      proficiency: "Advanced",
      experience: 3,
    },
    {
      name: "WebSocket",
      icon: <FaPlug className="text-[#008080]" />,
      description: "Real-time communication protocol",
      type: "Technology",
      proficiency: "Intermediate",
      experience: 2,
    },

    // ========== CMS ==========
    {
      name: "WordPress",
      icon: <FaWordpress className="text-[#21759B]" />,
      description: "Content management system",
      type: "Technology",
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "Contentful",
      icon: <SiContentful className="text-[#2478CC]" />,
      description: "Headless CMS platform",
      type: "Technology",
      proficiency: "Intermediate",
      experience: 1,
    },

    // ========== Monitoring ==========
    {
      name: "Prometheus",
      icon: <SiPrometheus className="text-[#E6522C]" />,
      description: "Systems monitoring toolkit",
      type: "DevOps",
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "Grafana",
      icon: <SiGrafana className="text-[#F46800]" />,
      description: "Analytics and monitoring platform",
      type: "DevOps",
      proficiency: "Intermediate",
      experience: 2,
    },

    // ========== Additional Tools ==========
    {
      name: "Postman",
      icon: <SiPostman className="text-[#FF6C37]" />,
      description: "API development environment",
      type: "Technology",
      proficiency: "Expert",
      experience: 4,
    },
    {
      name: "Swagger",
      icon: <SiSwagger className="text-[#85EA2D]" />,
      description: "API documentation framework",
      type: "Technology",
      proficiency: "Advanced",
      experience: 3,
    },

    // ========== Continued from above pattern ==========
    // Add 40+ more skills following same structure...
    // Example continued entries:

    {
      name: "NestJS",
      icon: <SiNestjs className="text-[#E0234E]" />,
      description: "Progressive Node.js framework",
      type: "Backend",
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "Kafka",
      icon: <SiApachekafka className="text-[#231F20]" />,
      description: "Distributed event streaming",
      type: "Backend",
      proficiency: "Intermediate",
      experience: 1,
    },
    {
      name: "Puppeteer",
      icon: <SiPuppeteer className="text-[#40B5A4]" />,
      description: "Headless browser automation",
      type: "Hard",
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "Storybook",
      icon: <SiStorybook className="text-[#FF4785]" />,
      description: "UI component development",
      type: "Frontend",
      proficiency: "Advanced",
      experience: 3,
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui className="text-[#319795]" />,
      description: "Modular component library",
      type: "Frontend",
      proficiency: "Expert",
      experience: 3,
    },
    {
      name: "Three.js",
      icon: <SiThreedotjs className="text-[#049EF4]" />,
      description: "3D graphics library",
      type: "Frontend",
      proficiency: "Intermediate",
      experience: 2,
    },
  ];
  const [skillType, setSkillType] = useState("All");
  // Filter and Sort Logic
  const filteredSkills = skillset
    .filter((skill) => filter === "All" || skill.type === filter)
    .sort((a, b) => {
      if (sortOption === "Alphabetical") {
        return a.name.localeCompare(b.name);
      }
      if (sortOption === "Experience") {
        return b.experience - a.experience; // Descending order
      }
      return 0; // No sorting
    });

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="w-10/12 p-4 text-2xl font-bold my-4">{filter} Skills</div>
      <div className="w-10/12 flex flex-wrap items-center justify-between mb-6">
        <div className="flex gap-2 mb-2  flex-wrap">
          {["All", "Technology", "Soft", "Hard", "Language"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-md ${
                filter === type
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-300"
              } hover:bg-indigo-500 transition`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSortOption("Alphabetical")}
            className={`px-4 py-2 rounded-md ${
              sortOption === "Alphabetical"
                ? "bg-green-600 text-white"
                : "bg-gray-800 text-gray-300"
            } hover:bg-green-500 transition`}
          >
            Sort A-Z
          </button>
          <button
            onClick={() => setSortOption("Experience")}
            className={`px-4 py-2 rounded-md ${
              sortOption === "Experience"
                ? "bg-orange-600 text-white"
                : "bg-gray-800 text-gray-300"
            } hover:bg-orange-500 transition`}
          >
            Sort by Experience
          </button>
        </div>
      </div>

      <div className="w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 max-lg:w-full max-sm:gap-4 h-[60vh] overflow-y-auto custom-scroll bg-zinc-950 relative rounded-lg">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 max-md:p-2 bg-gray-800 hover:bg-gray-700/50 rounded-[0.7rem] shadow-md transition-all duration-500 hover:scale-105 cursor-pointer relative  max-h-[180px] z-[10]"
          >
            <div className="flex p-2 w-full mb-2 justify-between items-center">
              <div className="text-4xl mb-4 max-md:text-3xl">{skill.icon}</div>
              <div className="flex md:flex-col">
                <button className="absolute top-4 right-4 text-[10px] rounded-[3px] bg-indigo-600 px-2 font-semibold text-white py-1 ">
                  {skill.proficiency}
                </button>
                <h3 className="text-xl max-md:text-lg font-semibold text-white mt-2 max-md:mt-6">
                  {skill.name}
                </h3>
              </div>
            </div>
            <p className="text-sm text-gray-200 text-center">
              {skill.description}
            </p>
            <p className="text-xs text-gray-300 mt-2">
              Experience: {skill.experience} years
            </p>
          </div>
        ))}
        <img
          src={Skillsvg}
          alt=""
          className="absolute top-0 opacity-80 max-sm:opacity-0 w-full"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900"
          style={{ zIndex: 0 }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
