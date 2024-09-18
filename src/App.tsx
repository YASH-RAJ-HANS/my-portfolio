import React from "react";
import "./index.css"; // Import Tailwind CSS
import { BlurFadeDemo } from "./Compo/BlurCard";
import Navbar from "./Compo/Navbar";
import { RetroGridDemo } from "./Compo/Retro";
import Hero from "./Compo/Hero";
import TimeLine from "./Compo/TimeLine";
import Footer from "./Compo/Footer";
import ProgressSection from "./Compo/ProgressSection";

const App = () => {
  return (
    <div className=" text-white  flex flex-col text-green-700 justify-center items-center">
      <Navbar />
      <div className="h-[100vh] text-white flex justify-center items-center w-full   overflow-hidden">
        <Hero />
      </div>
      {/* <div className=" text-4xl font-bold mb-6">Progress Section</div> */}
      
      <ProgressSection/>
      <RetroGridDemo />
      
      {/* <div className=" text-4xl font-bold mb-6">TimeLine</div>
      <TimeLine/> */}
      <div className="text-4xl font-bold flex items-center justify-center flex-col w-full z-[0]">
        <div className="my-6">Blogs</div>
        <BlurFadeDemo />
        <div className="my-6 text-xl border-2 p-2">Read More</div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
