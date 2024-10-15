import React from 'react'
import { BlurFadeDemo } from "../Compo/BlurCard";
import { RetroGridDemo } from "../Compo/Retro";
import Hero from "../Compo/Hero";
import ProgressSection from "../Compo/ProgressSection";
import Name from "../Compo/Name";
import Projects from "../Compo/Projects";
import Achievements from "../Compo/Achievements";
import ContactMe from "../Compo/Contactme";
import FAQ from "../Compo/Faq";
import Loader from '../Compo/Loader';
import SocialLinks from '../Compo/SocialLinks';
import Skills from '../Compo/Skills';
import IconSphere from '../Compo/IconSphere';
import TextSphere from '../Compo/TagSphere';
import TagSphere from '../Compo/TagSphere';

const Home = () => {
  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "MUI",
    "Express",
    "MongoDB",
    "SQL",
    "React",
    "Vue",
    "Node.js",
    "Babel",
    "StoryBook",
    "ES6",
    "Jest",
    "Webpack",
    "Git",
    "GitHub",
    "EJS",
    "RESTful API"
  ]
  const options = {
    radius: 200,
    maxSpeed: 1.5
  }
  return (
    <>
    
    <div className="h-[100vh] text-white flex justify-center items-center w-full   overflow-hidden">
    <Hero />
  </div>
  
 
  <div className=" flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
  <SocialLinks/>
    <div className="text-4xl font-bold my-12">MileStones</div>
    <ProgressSection/>
    
  </div>
  <div id="root"></div>
  
  <Name/>
  <Skills/>
  {/* <TextSphere/> */}
  {/* <IconSphere/> */}
  <div className='w-full flex items-center justify-center bg-white'>
  <TagSphere />
  </div>
  
 
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
  </>
  )
}

export default Home