import React, { useState } from 'react';

interface Achievement {
  title: string;
  description: string;
}

const achievementsData: Achievement[] = [
  {
    title: 'Open Source Contributor',
    description: 'Contributed to various open source projects, improving documentation and fixing bugs.',
  },
  {
    title: 'Hackathon Winner',
    description: 'Won first place in a national hackathon with a project focused on real-time data analysis.',
  },
  {
    title: 'Top Performer',
    description: 'Recognized as the top performer in the software development team for two consecutive quarters.',
  },
];

const Achievements: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <div className="space-y-4">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
              <span>{expandedIndex === index ? '-' : '+'}</span>
            </div>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-700">{achievement.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
