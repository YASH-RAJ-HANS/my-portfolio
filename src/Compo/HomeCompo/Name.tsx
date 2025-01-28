import React from "react";
import Wave from "../../app/Wave.svg";
import Wave2 from "../../app/Wave2.svg";
import './Name.css'
const Name = () => {
  return (
    <div className="diff aspect-[16/9] h-[70vh] max-md:h-[160px]  w-full mt-40">

      <div className="diff-item-1 ">
        <div
          className="bg-gray-800  grid place-content-center text-[160px] max-xl:text-[120px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[30px] font-black text-white z-[4]"
          style={{
            backgroundImage: `url(${Wave2})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backfaceVisibility: "revert",
          }}
        >
          {/* <div
          className="sm:font-outline-2 z-[2]"
            style={{
              backgroundImage: `url(https://media.istockphoto.com/id/1265282701/photo/abstract-watercolor-art-hand-paint-on-white-background-watercolor-background.jpg?s=612x612&w=0&k=20&c=qsFC-TyVSU4C8PTAorBaRruXfoxwzQwWq2dLBmPAHl8=)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text", // For Safari and Chrome
              backgroundClip: "text", // For other browsers
              WebkitTextFillColor: "transparent", // For Safari and Chrome
              
            }}
          >
            DEVELOPER
          </div> */}
          DEVELOPER
          {/* <div
        className="absolute -0 bg-gradient-to-b from-transparent to-zinc-900"
        style={{ zIndex: 0}}
      ></div> */}
          
        </div>
      </div>
      <div className="diff-item-2">
        <div
          className="bg-gray-800 grid place-content-center text-[160px] max-xl:text-[120px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[30px]   font-black shadow-[200px] text-white  z-[4]"
          style={{
            backgroundImage: `url(${Wave})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          {/* <div
          className="shadow-inner sm:font-outline-2 z-[2]"
            style={{
              backgroundImage: `url(https://media.istockphoto.com/id/1002072396/photo/watercolor-texture-abstract-grey-white-background.jpg?s=612x612&w=0&k=20&c=sUV9JohMLvYcVmW7HORF4ozMG_9F8Fkk-_0bbgAARlE=)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text", // For Safari and Chrome
              backgroundClip: "text", // For other browsers
              WebkitTextFillColor: "transparent", // For Safari and Chrome
            }}
          >
            YASH RAJ HANS
          </div> */}
          
          YASH RAJ HANS
          {/* <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900"
        style={{ zIndex: 0}}
      ></div> */}
        </div>
      </div>
      <div className=" diff-reizer h-[70px] z-[9]"></div>
    </div>
  );
};

export default Name;
