import React, { useState } from 'react';
import { FaBitcoin, FaDatabase, FaMobileAlt, FaReact, FaCodeBranch, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
  const [activeTab, setActiveTab] = useState<string>('web3');

  const data: TabData[] = [
    {
      label: 'Web3',
      value: 'web3',
      icon: <FaBitcoin className="mr-2" />,
      cards: [
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
      ],
    },
    {
      label: 'System Design',
      value: 'system-design',
      icon: <FaDatabase className="mr-2" />,
      cards: [
        {
          title: 'System Design Project',
          techStack: ['Kubernetes', 'Microservices', 'AWS'],
          description: 'Designed and implemented scalable microservices architecture with Kubernetes.',
          image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80',
          github: 'https://github.com/your-profile/system-design',
          liveLink: 'https://live-link.com/system-design-project',
        },
      ],
    },
    {
      label: 'App',
      value: 'app',
      icon: <FaMobileAlt className="mr-2" />,
      cards: [
        {
          title: 'Android Development Project',
          techStack: ['Kotlin', 'Jetpack Compose', 'Firebase'],
          description: 'Developed an Android app with real-time features and cloud integration.',
          image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80',
          github: 'https://github.com/your-profile/android-project',
          liveLink: 'https://live-link.com/android-project',
        },
      ],
    },
    {
      label: 'Full Stack',
      value: 'fullstack',
      icon: <FaReact className="mr-2" />,
      cards: [
        {
          title: 'Full Stack Application',
          techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
          description: 'Built a web application with a scalable architecture and implemented CRUD functionalities.',
          image: 'https://images.unsplash.com/photo-1512486143232-d69f5d99f28c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
          github: 'https://github.com/your-profile/fullstack-app',
          liveLink: 'https://live-link.com/fullstack-app',
        },
      ],
    },
    {
      label: 'Frontend',
      value: 'Frontend',
      icon: <FaBitcoin className="mr-2" />,
      cards: [
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
      ],
    },
    {
      label: 'Devops',
      value: 'Devops',
      icon: <FaBitcoin className="mr-2" />,
      cards: [
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
      ],
    },
    {
      label: 'Mini projects',
      value: 'Mini Projects',
      icon: <FaBitcoin className="mr-2" />,
      cards: [
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
      ],
    },
    {
      label: 'Tools',
      value: 'Tools',
      icon: <FaBitcoin className="mr-2" />,
      cards: [
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
      ],
    },
    {
      label: 'Backend',
      value: 'Backend',
      icon: <FaBitcoin className="mr-2" />,
      cards: [
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
        {
          title: 'Summer of Bitcoin Contribution',
          techStack: ['Bitcoin', 'Rust', 'Cryptography'],
          description: 'Contributed to Bitcoin improvement proposals and worked on protocol enhancements.',
          image: 'https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
          github: 'https://github.com/your-profile/summer-of-bitcoin',
          liveLink: 'https://live-link.com/bitcoin-project',
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 w-full flex flex-col justify-center items-center">
      <div className="flex space-x-4 mb-6 justify-center p-2 px-4 bg-gray-800 rounded-[0.5rem] items-center">
        {data.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`py-2 px-4 rounded-lg font-semibold rounded-[0.3rem] flex items-center ${
              activeTab === tab.value ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-[70vh] overflow-y-scroll p-4">
        {data
          .find((tab) => tab.value === activeTab)
          ?.cards.map((card, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg h-[50vh] flex flex-col">
              <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <div className="flex flex-wrap mb-2">
                {card.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm font-medium mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <div className="flex space-x-4 mt-auto">
                <a href={card.github} target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <FaGithub size={24} />
                </a>
                <a href={card.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
