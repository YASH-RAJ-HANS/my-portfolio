import React, { useEffect, useState } from "react";
import { BlurFadeTextDemo } from "./FadeText";

const cards = [
  {
    id: 1,
    imageUrl:
      "https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=nyP4c-s5cSZy1nv1K0xn1ynC-Xuc1sY4Y29ZQqcrztA=",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1725576415790-a5b4009a7952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1726266852911-ee5f5b49ea0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    imageUrl:
      "https://media.istockphoto.com/id/1355632594/photo/high-tech-startup-concept-innovative-male-software-engineer-standing-doing-big-data-analysis.webp?a=1&b=1&s=612x612&w=0&k=20&c=h4FtvF5Dnj3kh-GHDX72J92shR6lxlHEHcGHibUYioI=",
  },
  {
    id: 22,
    imageUrl:
      "https://media.istockphoto.com/id/932559358/photo/silhouette-of-virtual-human-on-circuit-pattern-technology-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=FSvJu1jnx06GipCnHOeuk73MtO31XJtIT83U9FWknXA=",
  },
  {
    id: 39,
    imageUrl:
      "https://images.unsplash.com/photo-1726266852911-ee5f5b49ea0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const nextCard = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
  
    const prevCard = () => {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
    };
  
    useEffect(() => {
      const intervalId = setInterval(nextCard, 3000); // Rotate every 2 seconds
      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);
  
    return (
      <div
        className="h-[100vh] w-full z-[2] bg-cover bg-center transition-all duration-700 relative"
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${cards[activeIndex]?.imageUrl})`,
            opacity: 1.6,
            zIndex: -1,
            backgroundSize: 'cover',
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          style={{ zIndex: 0 }}
        />
        <div className="h-screen flex items-center justify-center relative">
          <div className="relative w-full h-[70vh] mx-auto flex items-center justify-center mt-16 perspective-[1600px]">
            {cards.map((card, index) => {
              const angle =
                ((index - activeIndex + cards.length) % cards.length) * 45;
              const isActive = index === activeIndex;
  
              return (
                <div
                  key={index}
                  className={`absolute bottom-14 r w-[12vw] h-[18vh] bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl flex items-center border-2 border-white justify-center text-xl text-white font-semibold 
                    transition-transform duration-700 ease-in-out transform origin-center ${
                      isActive
                        ? "z-20 scale-150 shadow-2xl "
                        : "z-10 scale-90 opacity-70"
                    }`}
                  style={{
                    backgroundImage: `url(${cards[index]?.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: "no-repeat",
                    opacity: 1.3,
                    transform: isActive
                      ? `translateZ(15vw) scale(2)`
                      : `rotateY(${
                          angle - 30
                        }deg) translate(15vw) scale(1.4) rotateY(${20}deg) skewX(0deg)`,
                    borderRadius: isActive ? "" : "4px",
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  Card {card.id}
                </div>
              );
            })}
          </div>
          <button
            className="absolute left-10 px-6 py-3 text-lg text-white rounded-full shadow-lg focus:outline-none transition-transform duration-300"
            onClick={prevCard}
          >
            {`<`} Prev
          </button>
          <button
            className="absolute right-10 px-6 py-3 text-lg text-white rounded-full shadow-lg focus:outline-none transition-transform duration-300"
            onClick={nextCard}
          >
            Next {`>`}
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
