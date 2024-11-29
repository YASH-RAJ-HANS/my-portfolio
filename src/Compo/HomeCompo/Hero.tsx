import React, { useEffect, useState } from "react";
import { cards } from "./Data";
import BoxReveal from "../../@/components/magicui/box-reveal";
import Loader from "../Loader";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextCard = () => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setTransitioning(false);
    }, 300); // Transition timing for zoom effect
  };

  const prevCard = () => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
      setTransitioning(false);
    }, 300); // Transition timing for zoom effect
  };

  useEffect(() => {
    const intervalId = setInterval(nextCard, 5000); // Change every 5 seconds
    return () => clearInterval(intervalId);
  }, [activeIndex]);
  // useEffect(() => {

  const getVisibleCards = () => {
    // Ensures we get 5 cards, cycling through the list
    let visibleCards = [];
    for (let i = 0; i < cards.length; i++) {
      visibleCards.push(cards[(activeIndex + i) % cards.length]);
    }
    return visibleCards;
  };

  return (
    <div
      className="h-screen w-[98vw] max-xl:w-[100vw] max-md:h-[85vh] max-sm:h-[78vh]  bg-cover flex items-center bg-center  transition-all duration-1000 ease-out relative"
      style={{
        position: "relative",
        overflow: "hidden",
        opacity: "90%",
        backgroundImage: `url(${cards[activeIndex].imageUrl})`,
        backgroundSize: "cover", // Ensure the entire image is visible
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // No repetition
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"
        style={{ zIndex: 5 }}
      ></div>
      <div
        style={{
          zIndex: 5,
        }}
        className="absolute h-[100vh] w-[30vw] max-xl:w-[40vw] max-md:w-[60vw] flex flex-col bg-opacity-70 justify-center overflow-hidden pt-8 top-16 py-10 bg-zinc-950 px-10 border-white gap-10 max-xl:gap-6  max-lg:gap-2 max-lg:h-[60vh]"
      >
        <p className="text-5xl font-semibold opacity-100 max-lg:text-xl">
          YASH RAJ <span className="text-[#5046e6]">HANS</span>
        </p>

        <h2 className="mt-[.5rem] text-[1.3rem] max-lg:text-[0.8rem]">
          Full Stack Developer 🚀 | Product Designer🔥 | MERN 💻 | React Native
          📱
          <br />
          Python and Flask 💻
        </h2>

        <div className="mt-[1.5rem] text-[1rem] max-lg:text-[0.5rem]">
          <p>
            -&gt;Extensive experience in{" "}
            <span className="font-semibold text-[#5046e6]">React</span>,{" "}
            <span className="font-semibold text-[#5046e6]">Node.js</span>,{" "}
            <span className="font-semibold text-[#5046e6]">MongoDB</span>, and{" "}
            <span className="font-semibold text-[#5046e6]">Express</span>.{" "}
            <br />
            -&gt;Built projects with{" "}
            <span className="font-semibold text-[#5046e6]">
              TypeScript
            </span> and{" "}
            <span className="font-semibold text-[#5046e6]">React Native</span>
            .
            <br />
          </p>
        </div>

        <button className="mt-[1.6rem] p-4 py-2 w-[200px]  rounded-lg bg-[#5046e6]">
          Explore My Projects
        </button>
      </div>
      
      <div className="absolute top-16 left-[30vw] z-[6] max-xl:left-[40vw] max-lg:opacity-0">
        <Loader key={activeIndex} />
      </div>

      <div className=" flex items-center justify-between mx-auto ">
        <div className="absolute w-[40vw] bottom-4 max-md:bottom-0 right-0 max-2xl:right-0 h-[30vh] sm:right-[180px] lg:right-0 max-sm:right-[115px] px-4  ">
          {cards.map((card, index) => {
            const angle =
              ((index - activeIndex + cards.length) % cards.length) * 45;
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`absolute bottom-14 r w-[300px] h-[200px] max-lg:w-[270px] max-lg:h-[180px] max-md:w-[210px] max-md:h-[150px]
                  max-sm:w-[170px] max-sm:h-[116px]  bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl flex items-center  justify-center text-xl text-white font-semibold 
                    transition-transform duration-700 ease-in-out transform origin-center ${
                      isActive
                        ? "z-20 scale-150 max-sm:scale-95 shadow-2xl border-spacing-1 border-2 border-gray-200 "
                        : "z-10 scale-90 opacity-80 max-sm:scale-125  border-purple-900"
                    }`}
                style={{
                  backgroundImage: `url(${cards[index]?.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",

                  transform: isActive
                    ? `translateZ(16vw) scale(1.2)  `
                    : `rotateY(${
                        angle - 30
                      }deg) translate(15vw) scale(1) rotateY(${20}deg) skewX(0deg)`,
                  borderRadius: isActive ? "" : "4px",
                }}
                onClick={() => setActiveIndex(index)}
              >
                {isActive && <></>}
              </div>
            );
          })}
        </div>

        {/* <button
          className="z-[9] absolute left-10 bottom-10 px-6 py-3 text-lg text-white rounded-full shadow-lg focus:outline-none transition-transform duration-300"
          onClick={prevCard}
        >
          {`<`} Prev
        </button>
        <button
          className="z-[9] absolute left-36 bottom-10 px-6 py-3 text-lg text-white rounded-full shadow-lg focus:outline-none transition-transform duration-300"
          onClick={nextCard}
        >
          Next {`>`}
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
