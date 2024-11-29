import React, { useState } from "react";
import {
  FaBitcoin,
  FaDatabase,
  FaMobileAlt,
  FaReact,
  FaCodeBranch,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface Card {
  title: string;
  techStack: string[];
  description: string;
  image: string;
  github: string;
  liveLink: string;
}

interface TabData {
  label: string;
  value: string;
  icon: JSX.Element;
  cards: Card[];
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("web3");

  const data: TabData[] = [
    {
      label: "Web3",
      value: "web3",
      icon: <FaBitcoin className="mr-2" />,
      cards: [
        {
          title: "Summer of Bitcoin Contribution",
          techStack: ["Bitcoin", "Rust", "Cryptography"],
          description:
            "Contributed to Bitcoin improvement proposals and worked on protocol enhancements.",
          image:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          github: "https://github.com/your-profile/summer-of-bitcoin",
          liveLink: "https://live-link.com/bitcoin-project",
        },
      ],
    },
    {
      label: "System Design",
      value: "system-design",
      icon: <FaDatabase className="mr-2" />,
      cards: [
        {
          title: "System Design Project",
          techStack: ["Kubernetes", "Microservices", "AWS"],
          description:
            "Designed and implemented scalable microservices architecture with Kubernetes.",
          image:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
          github: "https://github.com/your-profile/system-design",
          liveLink: "https://live-link.com/system-design-project",
        },
      ],
    },
    {
      label: "App",
      value: "app",
      icon: <FaMobileAlt className="mr-2" />,
      cards: [
        {
          title: "Android Development Project",
          techStack: ["Kotlin", "Jetpack Compose", "Firebase"],
          description:
            "Developed an Android app with real-time features and cloud integration.",
          image:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
          github: "https://github.com/your-profile/android-project",
          liveLink: "https://live-link.com/android-project",
        },
      ],
    },
    {
      label: "Full Stack",
      value: "fullstack",
      icon: <FaReact className="mr-2" />,
      cards: [
        {
          title: "Full Stack Application",
          techStack: ["React", "Node.js", "MongoDB", "Express"],
          description:
            "Built a web application with a scalable architecture and implemented CRUD functionalities.",
          image:
            "https://images.unsplash.com/photo-1512486143232-d69f5d99f28c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
          github: "https://github.com/your-profile/fullstack-app",
          liveLink: "https://live-link.com/fullstack-app",
        },
      ],
    },
    {
      label: "Frontend",
      value: "Frontend",
      icon: <FaBitcoin className="mr-2" />,
      cards: [
        {
          title: "Summer of Bitcoin Contribution",
          techStack: ["Bitcoin", "Rust", "Cryptography"],
          description:
            "Contributed to Bitcoin improvement proposals and worked on protocol enhancements.",
          image:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          github: "https://github.com/your-profile/summer-of-bitcoin",
          liveLink: "https://live-link.com/bitcoin-project",
        },
      ],
    },
    // {
    //   label: 'Devops',
    //   value: 'Devops',
    //   icon: <FaBitcoin className="mr-2" />,
    //   cards: [
    //     {
    //       title: 'Summer of Bitcoin Contribution',
    //       techStack: ['Bitcoin', 'Rust', 'Cryptography'],
    //       description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
    //       image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
    //       github: 'https://github.com/your-profile/summer-of-bitcoin',
    //       liveLink: 'https://live-link.com/bitcoin-project',
    //     },
    //   ],
    // },
    // {
    //   label: 'Mini projects',
    //   value: 'Mini Projects',
    //   icon: <FaBitcoin className="mr-2" />,
    //   cards: [
    //     {
    //       title: 'Summer of Bitcoin Contribution',
    //       techStack: ['Bitcoin', 'Rust', 'Cryptography'],
    //       description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
    //       image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
    //       github: 'https://github.com/your-profile/summer-of-bitcoin',
    //       liveLink: 'https://live-link.com/bitcoin-project',
    //     },
    //   ],
    // },
    {
      label: "Tools",
      value: "Tools",
      icon: <FaBitcoin className="mr-2" />,
      cards: [
        {
          title: "Summer of Bitcoin Contribution",
          techStack: ["Bitcoin", "Rust", "Cryptography"],
          description:
            "Contributed to Bitcoin improvement proposals and worked on protocol enhancements.",
          image:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          github: "https://github.com/your-profile/summer-of-bitcoin",
          liveLink: "https://live-link.com/bitcoin-project",
        },
      ],
    },
    {
      label: "Backend",
      value: "Backend",
      icon: <FaBitcoin className="mr-2" />,
      cards: [
        {
          title: "Summer of Bitcoin Contribution",
          techStack: ["Bitcoin", "Rust", "Cryptography"],
          description:
            "Contributed to Bitcoin improvement proposals and worked on protocol enhancements.",
          image:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          github: "https://github.com/your-profile/summer-of-bitcoin",
          liveLink: "https://live-link.com/bitcoin-project",
        },
        {
          title: "Summer of Bitcoin Contribution",
          techStack: ["Bitcoin", "Rust", "Cryptography"],
          description:
            "Contributed to Bitcoin improvement proposals and worked on protocol enhancements.",
          image:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          github: "https://github.com/your-profile/summer-of-bitcoin",
          liveLink: "https://live-link.com/bitcoin-project",
        },
        {
          title: "Summer of Bitcoin Contribution",
          techStack: ["Bitcoin", "Rust", "Cryptography"],
          description:
            "Contributed to Bitcoin improvement proposals and worked on protocol enhancements.",
          image:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          github: "https://github.com/your-profile/summer-of-bitcoin",
          liveLink: "https://live-link.com/bitcoin-project",
        },
        {
          title: "Summer of Bitcoin Contribution",
          techStack: ["Bitcoin", "Rust", "Cryptography"],
          description:
            "Contributed to Bitcoin improvement proposals and worked on protocol enhancements.",
          image:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          github: "https://github.com/your-profile/summer-of-bitcoin",
          liveLink: "https://live-link.com/bitcoin-project",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 w-full flex flex-col justify-center items-center z-[10]">
      {/* Tab Section */}
      <div className="flex flex-wrap sm:flex-nowrap space-x-2 sm:space-x-4 mb-6 justify-center p-2 px-2 sm:px-4 bg-gray-800 rounded-lg items-center">
        {data.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`py-2 px-3 sm:px-4 text-sm sm:text-base rounded-lg flex items-center ${
              activeTab === tab.value
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-h-[700px] overflow-auto custom-scroll">
        {data
          .find((tab) => tab.value === activeTab)
          ?.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[350px]"
            >
              {/* Image Section */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[40%] object-cover"
              />

              {/* Content Section */}
              <div className="p-4 flex flex-col justify-between flex-1">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap mb-4">
                  {card.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-800 py-1 px-3 rounded-full text-xs font-medium mr-2 mb-2 transition-colors duration-300 hover:bg-purple-600 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {card.description.length > 100
                    ? `${card.description.substring(0, 100)}...`
                    : card.description}
                </p>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={card.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
