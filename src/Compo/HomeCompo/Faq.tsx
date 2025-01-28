import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "What is your background and experience?",
    answer:
      "I have a background in software development with expertise in full-stack development and significant contributions to open-source projects.",
  },
  {
    question: "What are the technologies you specialize in?",
    answer:
      "I specialize in JavaScript, TypeScript, React, Node.js, and various backend frameworks like Flask and Spring Boot.",
  },
  {
    question:
      "Can you tell me about your contributions to open-source projects?",
    answer:
      "I have contributed to Summer of Bitcoin and Snip Savvy projects, focusing on scalable solutions and innovative approaches.",
  },
  {
    question:
      "What notable achievements have you made in hackathons or competitions?",
    answer:
      "I was the 2nd runner-up at HackOverflow 4.0 CU and Rajasthan Police Hackathon 1.0 in 2024.",
  },
  {
    question: "What are some key projects you have worked on?",
    answer:
      "Projects include a Speech-to-Speech AI chatbot, a text-to-audio AI model, and a nested file explorer with QR code functionality.",
  },
  {
    question: "What skills do you have in mobile and web app development?",
    answer:
      "I have skills in React Native for mobile apps, MERN stack for web apps, and modern UI/UX design principles.",
  },
  {
    question: "How can I access your CV or resume?",
    answer:
      'You can access my resume via the "Download CV" button in the Resume section on my portfolio.',
  },
  {
    question: "What are your preferred tools for development and deployment?",
    answer:
      "I use Docker, AWS, Vercel, Redis, and D3.js, among other modern tools for efficient development and deployment.",
  },
  {
    question: "How can I reach out to you for collaboration or queries?",
    answer:
      "You can reach me via email at your-email@example.com or through my Contact Me page.",
  },
  {
    question: "Do you have any social profiles or community links to share?",
    answer:
      "Yes, you can find me on GitHub, YouTube, Instagram, Twitter, Buy Me a Coffee, and Discord.",
  },
];

const FAQ: React.FC = () => {
  // const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // const toggleExpand = (index: number) => {
  //   setExpandedIndex(expandedIndex === index ? null : index);
  // };
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  
    const toggleExpand = (index: number) => {
      setExpandedIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 w-[80vw] max-md:w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
          key={index}
          onClick={() => toggleExpand(index)}
          className={`border rounded-[0.7rem] p-4 md:p-6 shadow-sm hover:shadow-md cursor-pointer transition-all duration-700 transform hover:scale-[1.02] ${
            expandedIndices.includes(index) ? 'bg-zinc-800/50' : ''
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg sm:text-xl font-semibold">
              {faq.question}
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
              {}{faq.answer}
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
