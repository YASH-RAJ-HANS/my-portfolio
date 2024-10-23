import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: 'What is your background? cv add button nad resume',
    answer: 'I have a background in software development with experience in full-stack development, focusing on web applications and contributing to open-source projects.',
  },
  {
    question: 'What technologies do you use? dsa tree and rank checker and add icon of github and youtube insta twitter buyme cup of coffee discord',
    answer: 'I primarily work with JavaScript, TypeScript, React, Node.js, and various databases such as MongoDB and PostgreSQL.',
  },
  {
    question: 'How can I contact you?',
    answer: 'You can contact me through the Contact Me section on my website or reach out via email at your-email@example.com.',
  },
  {
    question: 'What are your hobbies?',
    answer: 'In my free time, I enjoy coding, reading, and exploring new technologies, as well as participating in hackathons and tech meetups.',
  },
];

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span>{expandedIndex === index ? '-' : '+'}</span>
            </div>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
