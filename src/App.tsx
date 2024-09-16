import React from "react";
import "./index.css"; // Import Tailwind CSS
import { BlurFadeDemo } from "./Compo/BlurCard";
import Navbar from "./Compo/Navbar";
import { RetroGridDemo } from "./Compo/Retro";
import Hero from "./Compo/Hero";
import { BentoDemo } from "./Compo/Bento";
import TimeLine from "./Compo/TimeLine";
import Footer from "./Compo/Footer";

const App = () => {
  return (
    <div className=" text-white  flex flex-col text-green-700 justify-center items-center">
      <Navbar />
      <div className="h-[110vh] text-white flex justify-center items-center w-full   overflow-hidden">
        <Hero />
      </div>
      <RetroGridDemo />
      <div className=" text-4xl font-bold my-6">TimeLine</div>
      <TimeLine/>
      <div className="text-4xl font-bold flex items-center justify-center flex-col w-full z-[0]">
        <div className="my-6">Blogs</div>
        <BlurFadeDemo />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
