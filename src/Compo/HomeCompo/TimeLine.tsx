import React, { useState } from "react";

const data = [
  {
    time: "July 2024 - Present",
    title: "Full Stack Developer, Neugence Technology Pvt. Ltd.",
    points: [
      "Developed and maintained full-stack web applications using React.js, Node.js, and MongoDB.",
      "Implemented Markdown file rendering to improve content management for the company website.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Conducted code reviews and provided feedback to improve code quality.",
    ],
    description:
      "Worked on dynamic .md file rendering for blogs, improving content management. Took part in defining, designing, and implementing business-critical features across the full stack, leading to enhanced scalability and user experience.",
    images: [
      "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_f382bf90384d4888ba0cb059cefe8cb9_Screenshot_2024-10-23_213317.png",
      "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_0bc41ddb28bb4cd0a064e119812e2800_Screenshot_2024-10-23_213442.png",
    ],
  },
  {
    time: "Sept 2022 - Nov 2022",
    title: "Software Engineer Intern, CrossTower India",
    points: [
      "Designed Client-side and Server-side architectures using React.js and Node.js.",
      "Optimized the performance and scalability of web applications.",
      "Collaborated with teams and product managers to develop software solutions.",
      "Developed a course-selling platform by designing comprehensive schemas.",
    ],
    description:
      "At CrossTower India, I contributed to designing and optimizing web architectures for client-server applications. Collaborated in developing a course-selling platform by efficiently structuring the database schemas.",
      images: [
        "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_f382bf90384d4888ba0cb059cefe8cb9_Screenshot_2024-10-23_213317.png",
        "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_0bc41ddb28bb4cd0a064e119812e2800_Screenshot_2024-10-23_213442.png",
      ],
  },
  {
    time: "May 2024",
    title: "Rajasthan Police Hackathon 1.0 (2nd Runner-Up)",
    points: [
      "Built a crypto flow investigation tool using React.js, Node.js, and EtherScan API.",
      "Enhanced data visualization with D3.js and Graph.js.",
      "Provided a tool for investigating crypto transactions.",
      "Collaborated with the Rajasthan Police to tailor the solution to real-world needs.",
    ],
    description:
      "Developed a crypto flow investigation tool tailored to the needs of Rajasthan Police. The solution enabled visualization of crypto transaction flows using D3.js and Graph.js and was instrumental in securing the 2nd runner-up position in the hackathon.",
      images: [
        "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_f382bf90384d4888ba0cb059cefe8cb9_Screenshot_2024-10-23_213317.png",
        "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_0bc41ddb28bb4cd0a064e119812e2800_Screenshot_2024-10-23_213442.png",
      ],
  },
  {
    time: "Aug 2022",
    title: "UPES Hackathon 3.0 (Top 25 Finalist)",
    points: [
      "Finished in the top 25 of the hackathon among 500+ participants.",
      "Developed a full-stack web application using React.js, Node.js, and MongoDB.",
      "Enhanced the user experience with interactive UI/UX designs.",
      "Secured an internship at CrossTower India based on performance.",
    ],
    description:
      "Participated in UPES Hackathon 3.0, where I built a robust full-stack web application with modern technologies like React.js and Node.js. This project led to a top 25 finish and an internship opportunity at CrossTower India.",
      images: [
        "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_f382bf90384d4888ba0cb059cefe8cb9_Screenshot_2024-10-23_213317.png",
        "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_0bc41ddb28bb4cd0a064e119812e2800_Screenshot_2024-10-23_213442.png",
      ],
  },
  {
    time: "May 2022",
    title: "HackOver Flow 4.0 (2nd Runner-Up)",
    points: [
      "Developed an innovative solution to address real-world challenges.",
      "Led a team to build a full-stack application using React.js and Node.js.",
      "Enhanced application performance by optimizing front-end and back-end code.",
      "Won the 2nd runner-up position, receiving a cash prize of 30K INR.",
    ],
    description:
      "At HackOver Flow 4.0, I led a team to develop a full-stack web application, focusing on optimization and user experience. Our solution won 2nd place, resulting in a cash prize of 30K INR.",
      images: [
        "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_f382bf90384d4888ba0cb059cefe8cb9_Screenshot_2024-10-23_213317.png",
        "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_0bc41ddb28bb4cd0a064e119812e2800_Screenshot_2024-10-23_213442.png",
      ],
  },
  {
    time: "Summer 2024",
    title: "Summer of Bitcoin (Open Source Designer)",
    points: [
      "Selected as a designer for open-source web/mobile applications.",
      "Contributed to designing responsive and user-friendly UIs.",
      "Collaborated with global teams to improve design workflows.",
      "Enhanced user interaction by implementing design suggestions.",
    ],
    description:
      "As part of the Summer of Bitcoin, I contributed to the design of web and mobile applications for open-source projects. My contributions focused on improving UI/UX design and user interaction for a global audience.",
      images: [
        "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_f382bf90384d4888ba0cb059cefe8cb9_Screenshot_2024-10-23_213317.png",
        "https://del1.vultrobjects.com/blogs-images-and-videos/h1S-6Ftj/h1S-6Ftj_0bc41ddb28bb4cd0a064e119812e2800_Screenshot_2024-10-23_213442.png",
      ],
  }
  
];

const TimeLine = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index:any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div style={{ zIndex: 10 }} className="w-[80vw] max-xl:w-[90vw] max-md:w-full">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {data.map((item, index) => (
          <li key={index} className="w-full mb-1 cursor-pointer">
            <div className="timeline-middle flex flex-col justify-center items-center bg-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="border-l-2 min-h-[300px] mt-4 border-indigo-500"></div>
            </div>

            <div
              className={`w-full min-h-[160px] lg:min-h-[370px] rounded-md  p-4 pl-6  ${
                index % 2 === 0 ? "md:timeline-start timeline-end" : "timeline-end"
              } mb-10 ${index % 2 === 0 ? "md:text-en" : ""}`}
            >
              <time className="font-mono italic mb-2 text-indigo-300">{item.time}</time>
              <div className="text-lg font-black mb-1 text-indigo-200 hover:scale-105 transition-all duration-500">{item.title}</div>
              <ul>
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="ml-6 list-disc mb-2 hover:scale-105 transition-all duration-500 text-justifys">
                    {point}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toggleDescription(index)}
                className="text-white bg-indigo-600 p-2 px-4 rounded-lg mt-2"
              >
                {expandedIndex === index ? "Hide details" : "View details"}
              </button>
              {expandedIndex === index && (
                <p className="mt-2">{item.description}</p>
              )}
            </div>

            {/* <hr /> */}

            <div
              className={`w-full p-4 ${
                index % 2 === 0  ? "md:timeline-end ml-4 timeline-start" : "timeline-start"
              } mb-10`}
            >
              <div className="carousel carousel-center border-2  border-indigo-950 bg-neutral rounded-box  space-x-1 p-4 lg:h-[370px] h-[300px] w-full flex justify-around">
                {item.images.map((image, imgIndex) => (
                  <div className="carousel-item  cursor-pointer w-full" key={imgIndex}>
                    <img
                      src={image}
                      className="rounded-box w-[100%] min-w-[300px] mr-2 hover:scale-[1.02] transition-all duration-500 "
                    />
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
