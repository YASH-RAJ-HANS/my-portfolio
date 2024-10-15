import React from "react";
import "./index.css"; // Import Tailwind CSS
import { BlurFadeDemo } from "./Compo/BlurCard";
import Navbar from "./Compo/Navbar";
import { RetroGridDemo } from "./Compo/Retro";
import Hero from "./Compo/Hero";
import TimeLine from "./Compo/TimeLine";
import Footer from "./Compo/Footer";
import ProgressSection from "./Compo/ProgressSection";
import Name from "./Compo/Name";
import Projects from "./Compo/Projects";
import Achievements from "./Compo/Achievements";
import ContactMe from "./Compo/Contactme";
import FAQ from "./Compo/Faq";
import UserDataScraper from "./Scrapper";


const App = () => {
  return (
    <div className=" text-white  flex flex-col text-green-700 justify-center items-center">
      <Navbar />
      <UserDataScraper/>
      
      {/* <div className="h-[100vh] text-white flex justify-center items-center w-full   overflow-hidden">
        <Hero />
      </div>
     
      <div className=" flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
        <div className="text-4xl font-bold my-12">MileStones</div>
        <ProgressSection/>
        
      </div>
      
      
      <Name/>
      <RetroGridDemo />
      
    
      <div className=" flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
        <div className="text-4xl font-bold my-12">My Projects</div>
        <Projects/>
        <div className="my-6 text-xl border-2 p-2">More projects</div>
      </div>
      <div className=" flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
        <div className="text-4xl font-bold my-12">My Achievements</div>
        <Achievements/>
        <div className="my-6 text-xl border-2 p-2">More Achievements</div>
      </div>
      
      
      
      <div className="text-4xl font-bold flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
        <div className="my-12">Blogs</div>
        <BlurFadeDemo />
        <div className="my-6 text-xl border-2 p-2">Read More</div>
      </div>
      <FAQ/>
      <ContactMe/>
      <Footer/> */}
    </div>
  );
};

export default App;
