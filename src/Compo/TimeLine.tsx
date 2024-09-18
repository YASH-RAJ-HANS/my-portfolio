import React from "react";
const data = [
  {
    time: "1984",
    title: "First Macintosh computer",
    description:
      "The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer...",
    images: [
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    ],
  },
  {
    time: "1998",
    title: "iMac",
    description:
      "iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc...",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    ],
  },
  {
    time: "1998",
    title: "iMac",
    description:
      "iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc...",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    ],
  },
  {
    time: "1998",
    title: "iMac",
    description:
      "iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc...",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    ],
  },
  {
    time: "1998",
    title: "iMac",
    description:
      "iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc...",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    ],
  },
  // Add more items as needed...
];

const TimeLine = () => {
  return (
    <div style={{ zIndex: 10 }} className="w-[70vw]">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {data.map((item, index) => (
          <li key={index}>
            <div className="timeline-middle">
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
            </div>

            <div
              className={`${
                index % 2 === 0 ? "timeline-start" : "timeline-end"
              } mb-10 ${index % 2 === 0 ? "md:text-end" : ""}`}
            >
              <time className="font-mono italic">{item.time}</time>
              <div className="text-lg font-black ">{item.title}</div>
              <p>{item.description}</p>
            </div>

            <hr />

            <div
              className={`${
                index % 2 === 0 ? "timeline-end ml-4" : "timeline-start"
              } mb-10`}
            >
              <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-1 p-4 h-[40vh] w-[30vw] flex justify-around">
                {item.images.map((image, imgIndex) => (
                  <div className="carousel-item" key={imgIndex}>
                    <img src={image} className="rounded-box w-[27vw] mr-2 hover:scale-[1.05]" />
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
