import React, { useEffect, useState } from "react";
import { cards } from "./Data";
import BoxReveal from "../@/components/magicui/box-reveal";

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
      className="h-screen w-full bg-cover flex items-center bg-center relative transition-all duration-1000 ease-out relative"
      style={{
        position: "relative",
        overflow: "hidden",
        opacity:"120%",
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
        className="absolute h-[90vh] w-full max-w-[30rem] flex flex-col bg-opacity-70 rounde-br-[20rem] rounded-tr-[20rem] justify-center overflow-hidden pt-8 top-20 -left-2 py-10 bg-zinc-950  px-10 border-2 border-purple-600"
      >
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold opacity-100">
            Magic UI<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            UI library for{" "}
            <span className="text-[#5046e6]">Design Engineers</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-[1.5rem]">
            <p>
              -&gt; 20+ free and open-source animated components built with
              <span className="font-semibold text-[#5046e6]"> React</span>,
              <span className="font-semibold text-[#5046e6]"> Typescript</span>,
              <span className="font-semibold text-[#5046e6]">
                {" "}
                Tailwind CSS
              </span>
              , and
              <span className="font-semibold text-[#5046e6]">
                {" "}
                Framer Motion
              </span>
              . <br />
              -&gt; 100% open-source, and customizable. <br />
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <button className="mt-[1.6rem] bg-[#5046e6]">Explore</button>
        </BoxReveal>
      </div>

      <div className=" flex items-center justify-between mx-auto ">
        <div className="absolute w-[40vw] bottom-0 right-0 h-[30vh]   px-4  ">
          {cards.map((card, index) => {
            const angle =
              ((index - activeIndex + cards.length) % cards.length) * 45;
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`absolute bottom-14 r w-[300px] h-[200px] bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl flex items-center  justify-center text-xl text-white font-semibold 
                    transition-transform duration-700 ease-in-out transform origin-center ${
                      isActive
                        ? "z-20 scale-150 shadow-2xl border-[2px] border-white "
                        : "z-10 scale-90 opacity-70"
                    }`}
                style={{
                  backgroundImage: `url(${cards[index]?.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",

                  transform: isActive
                    ? `translateZ(15vw) scale(1.2) `
                    : `rotateY(${
                        angle - 30
                      }deg) translate(15vw) scale(0.9) rotateY(${20}deg) skewX(0deg)`,
                  borderRadius: isActive ? "" : "4px",
                }}
                onClick={() => setActiveIndex(index)}
              >
                {isActive && `Card ${card.id}`}
              </div>
            );
          })}
        </div>

        <button
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
        </button>
      </div>
    </div>
  );
};

export default Hero;
