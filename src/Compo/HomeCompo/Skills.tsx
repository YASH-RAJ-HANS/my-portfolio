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
} from "react-icons/fa";
import Skillsvg from  "../../app/Skill.svg";

const Skills = () => {
  const [filter, setFilter] = useState("All");
  const [sortOption, setSortOption] = useState("None");

  const skillset = [
    {
      name: "React",
      icon: <FaReact style={{ color: "#61DAFB" }} />,
      size: "text-4xl",
      description: "A JavaScript library for building user interfaces.",
      type: "Technology",
      proficiency: "Expert",
      experience: 3,
    },
    {
      name: "Node.js",
      icon: <FaNode style={{ color: "#8CC84B" }} />,
      size: "text-4xl",
      description: "Server-side JavaScript runtime.",
      type: "Technology",
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "Python",
      icon: <FaPython style={{ color: "#3776AB" }} />,
      size: "text-4xl",
      description: "High-level programming language for backend development.",
      type: "Language",
      proficiency: "Advanced",
      experience: 4,
    },
    {
      name: "AWS",
      icon: <FaAws style={{ color: "#FF9900" }} />,
      size: "text-4xl",
      description: "Cloud platform for scalable application deployment.",
      type: "Technology",
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "GitHub",
      icon: <FaGithub style={{ color: "#181717" }} />,
      size: "text-4xl",
      description: "Version control and collaboration platform.",
      type: "Soft",
      proficiency: "Expert",
      experience: 5,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 style={{ color: "#E34F26" }} />,
      size: "text-4xl",
      description: "Markup language for structuring web content.",
      type: "Language",
      proficiency: "Advanced",
      experience: 5,
    },
    {
      name: "CSS3",
      icon: <FaCss3 style={{ color: "#1572B6" }} />,
      size: "text-4xl",
      description: "Styling language for designing web pages.",
      type: "Language",
      proficiency: "Advanced",
      experience: 5,
    },
    {
      name: "Docker",
      icon: <FaDocker style={{ color: "#2496ED" }} />,
      size: "text-4xl",
      description: "Containerization platform.",
      type: "Technology",
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "Git",
      icon: <FaGit style={{ color: "#F05032" }} />,
      size: "text-4xl",
      description: "Version control system.",
      type: "Hard",
      proficiency: "Advanced",
      experience: 3,
    },
    
  ];
 const [skillType , setSkillType] = useState("All");
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
      
      {/* Filter Buttons */}
      <div className="w-10/12 flex flex-wrap justify-between mb-6">
        <div className="flex gap-4">
          {["All", "Technology", "Soft", "Hard", "Language"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-md ${
                filter === type ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-300"
              } hover:bg-indigo-500 transition`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
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

      {/* Skills Grid */}
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
            <p className="text-xs text-gray-300 mt-2">Experience: {skill.experience} years</p>
          </div>
        ))}
        <img src={Skillsvg} alt="" className="absolute top-0 opacity-80 max-sm:opacity-0 w-full"/>
        {/* <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900"
        style={{ zIndex: 0}}
      ></div> */}
      </div>
    </div>
  );
};

export default Skills;
