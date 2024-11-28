import React from "react";
import Wave from "../../app/Wave.svg";
import Wave2 from "../../app/Wave2.svg";
const Name = () => {
  return (
    <div className="diff aspect-[16/9] h-[50vh] max-md:h-[200px]  w-[98vw] mt-40">
      <div className="diff-item-1 ">
        <div
          className="bg-gray-800  grid place-content-center text-[160px] max-xl:text-[120px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[30px] font-black text-white "
          style={{
            backgroundImage: `url(${Wave2})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backfaceVisibility: "revert",
          }}
        >
          <div
            style={{
              backgroundImage: `url(https://media.istockphoto.com/id/1170811934/vector/close-up-of-womans-eyes-with-hopeful-expression.jpg?s=612x612&w=0&k=20&c=ArS8z_c-djFanXz9SKvaPvQAwIXuEY6Lw4SxvC2TpCA=)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text", // For Safari and Chrome
              backgroundClip: "text", // For other browsers
              WebkitTextFillColor: "transparent", // For Safari and Chrome
            }}
          >
            DEVELOPER
          </div>
          
        </div>
      </div>
      <div className="diff-item-2">
        <div
          className="bg-gray-800 grid place-content-center text-[160px] max-xl:text-[120px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[30px]   font-black shadow-[200px] text-white"
          style={{
            backgroundImage: `url(${Wave})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          {/* <div
            style={{
              backgroundImage: `url(https://media.istockphoto.com/id/1170811934/vector/close-up-of-womans-eyes-with-hopeful-expression.jpg?s=612x612&w=0&k=20&c=ArS8z_c-djFanXz9SKvaPvQAwIXuEY6Lw4SxvC2TpCA=)`,
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
        </div>
      </div>
      <div className=" diff-resizer h-[70px]"></div>
    </div>
  );
};

export default Name;
