import React, { useState } from 'react';

interface Achievement {
  title: string;
  description: string;
}

const achievementsData: Achievement[] = [
  {
    title: '2nd Runner-Up - HackOverflow 4.0 CU',
    description: 'Developed a cutting-edge solution for predictive analysis, recognized for innovation and scalability.',
  },
  {
    title: '2nd Runner-Up - Rajasthan Police Hackathon 1.0 (2024)',
    description: 'Built a secure, real-time criminal tracking system using advanced algorithms and APIs.',
  },
  {
    title: 'Open Source Contributor',
    description: 'Contributed to open-source initiatives like Summer of Bitcoin and Snip Savvy, focusing on feature enhancements and bug fixes.',
  },
  {
    title: 'DSA Milestone Achiever',
    description: 'Solved over 500+ problems on platforms like Codeforces and CodeChef, with consistent participation in contests.',
  },
  {
    title: 'Top Performer - Software Development Team',
    description: 'Earned the "Top Performer" title for outstanding contributions to the software team across two quarters.',
  },
  {
    title: 'Project Innovator',
    description: 'Built unique projects like a Speech-to-Speech AI chatbot and a nested file explorer with QR integration.',
  },
];

const Achievements: React.FC = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 md:py-8 w-[80vw] max-md:w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        Achievements
      </h2>
      <div className="space-y-4">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            onClick={() => toggleExpand(index)}
            className={`border rounded-[0.7rem] p-4 md:p-6 shadow-sm hover:shadow-md cursor-pointer transition-all duration-700 transform hover:scale-[1.02] ${
              expandedIndices.includes(index) ? 'bg-zinc-800/50' : ''
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold">
                {achievement.title}
              </h3>
              <span className="text-2xl">
                {expandedIndices.includes(index) ? '-' : '+'}
              </span>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                expandedIndices.includes(index) ? 'max-h-[1000px]' : 'max-h-0'
              }`}
            >
              <p className="mt-2 text-sm sm:text-base text-gray-300 pl-6">
                {}{achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;