import React from "react";
import { BlurFadeDemo } from "../../Compo/HomeCompo/BlurCard";
import { RetroGridDemo } from "../../Compo/HomeCompo/Retro";
import Hero from "../../Compo/HomeCompo/Hero";
import ProgressSection from "../../Compo/HomeCompo/ProgressSection";
import Name from "../../Compo/HomeCompo/Name";
import Projects from "../../Compo/HomeCompo/Projects";
import Achievements from "../../Compo/HomeCompo/Achievements";
import ContactMe from "../../Compo/HomeCompo/Contactme";
import FAQ from "../../Compo/HomeCompo/Faq";
import SocialLinks from "../../Compo/HomeCompo/SocialLinks";
import Skills from "../../Compo/HomeCompo/Skills";
import TagSphere from "../../Compo/HomeCompo/TagSphere";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      {/* <div className="h-[100vh] text-white flex justify-center items-center w-full   overflow-hidden">
        <Hero />
      </div>

      <div className=" flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
        <SocialLinks />
        <div className="text-4xl font-bold mb-6 mt-10">MileStones</div>
        <ProgressSection />
      </div> */}
      <Name />
      {/* <div className=" flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
        <div className="flex w-10/12 justify-around">
          <div className="w-4/12 flex items-center justify-center bg-gray-950 ">
            <TagSphere />
          </div>
          <div className="text-4xl font-bold my-6">My Skills</div>
        </div>

        <Skills />
      </div> */}

      {/* <section id="journey">
        <RetroGridDemo />
      </section>

   
      <section id="project">
        <div className=" flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
          <div className="text-4xl font-bold my-12">My Projects</div>
          <Projects />
          <div className="my-6 text-xl border-2 p-2">More projects</div>
        </div>
      </section>  */}
      <section id="achievements">
        <div className=" flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
          
          <Achievements />
          {/* <div className="my-6 text-xl border-2 p-2">More Achievements</div> */}
        </div>
      </section>

      {/* <div className="text-4xl font-bold flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
        <div className="my-12">Articles</div>
        <BlurFadeDemo />
        <div className="my-6 text-xl border-2 p-2 cursor-pointer rounded-md">Read More</div>
      </div> */}
      <FAQ />
      <ContactMe />
      
    </>
  );
};

export default Home;
