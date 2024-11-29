import React, { useEffect, useState } from "react";
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
import SkillBox from "../../app/Skillbox.svg";
import Skillsvg from "../../app/Skill.svg";
import Milestone from "../../app/Milestone.svg";
import MilestoneDown from '../../app/MilestoneDown.svg'
const Home = () => {
  type Release = {
    version: string;
    title: string;
    date: string;
    description: string;
    isLatest?: boolean;
    downloadLink?: string;
  };

  const releases: Release[] = [
    {
      version: "v2.0.0",
      title: "Flowbite Application UI",
      date: "Released on January 13th, 2022",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
      isLatest: true,
      downloadLink: "#",
    },
    {
      version: "v1.3.0",
      title: "Flowbite Figma",
      date: "Released on December 7th, 2021",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
    {
      version: "v1.2.2",
      title: "Flowbite Library",
      date: "Released on December 2nd, 2021",
      description:
        "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
    },
  ];

  return (
    <>
      <div className="h-[100vh] text-white flex justify-center items-center w-full   overflow-hidden ">
        <Hero />
      </div>

      
      <section id="project">
        <div className="relative flex items-center justify-center flex-col w-full  mb-12 pt-40">
          <img
            src={Skillsvg}
            alt=""
            className="absolute top-0 opacity-50 z-[1] w-full"
          />
          <div className="text-4xl font-bold my-12 mt-36 z-[10]">
            My Projects
          </div>
          <Projects />
          <div className="my-6 text-xl border-2 p-2 z-[10]">More projects</div>
        </div>
      </section>
      <Name />

      <div className="relative flex items-center justify-center flex-col w-full z-[0]  mb-0">
        {/* <SocialLinks /> */}
        <img
          src={Milestone}
          alt=""
          className="absolute top-0 opacity-50  w-full min-h-[300px]"
        />
        {/* <img
          src={MilestoneDown}
          alt=""
          className="absolute bottom-0 opacity-20  w-full min-h-[300px]"
        /> */}

        <div className="text-4xl font-bold mt-40 z-[10] ">MileStones</div>
        <ProgressSection />
      </div>
      <div
        className="relative flex items-center justify-center flex-col w-full z-[0] mb-12
       "
      >
        <img
          src={Skillsvg}
          alt=""
          className="absolute top-0 opacity-80  w-full min-h-[300px]"
        />

        <div className="z-[10] p-4 text-4xl font-bold my-6 max-md:text-2xl mb-40 mt-[30vh]">
          Hire Me
        </div>
        <div className="flex w-[86vw] items-center justify-between max-md:w-full max-md:p-4  min-h-[400px] max-lg:flex-col-reverse gap-8 mt-40">
          <div className="w-7/12 max-lg:w-full  p-2 text-xl font-bold h-[300px] md:h-[400px] bg-gray-800  rounded-3xl relative overflow-hidden mt-12">
            <img
              src={SkillBox}
              alt=""
              className="absolute top-[-20vh] left-[-20vw]"
            />
            <ol className="relative  p-2 pt-6 h-full custom-scroll ml-2 pl-0">
              {releases.map((release, index) => (
                <li key={index} className="mb-10 ml-6">
                  <h3 className="mb-1 text-lg font-semibold text-white flex items-center">
                    {release.title}{" "}
                    {release.isLatest && (
                      <span className="bg-blue-900 text-blue-300 text-sm font-medium ml-3 px-2.5 py-0.5 rounded">
                        Latest
                      </span>
                    )}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-300">
                    {release.date}
                  </time>
                  <p className="text-base font-normal text-gray-200">
                    {release.description}
                  </p>
                  {release.downloadLink && (
                    <a
                      href=""
                      className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-400 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-700"
                    >
                      <svg
                        className="w-3.5 h-3.5 mr-2.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                      </svg>
                      My Resume
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div className="w-4/12 max-lg:w-full p-4 flex items-center justify-center h-auto ">
            <TagSphere Size={1.7} />
          </div>
        </div>
        <div className="z-[10] p-4 text-4xl font-bold my-6 max-md:text-2xl mt-[10vh]">
          My Skills
        </div>

        <Skills />
      </div>

      <section id="journey">
        <RetroGridDemo />
      </section>

      <section id="achievements">
        <div className=" flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
          <Achievements />
        </div>
      </section>

      <div className="text-4xl font-bold flex items-center justify-center flex-col w-full z-[0] mt-12 mb-12">
        <div className="my-12">Articles</div>
        <BlurFadeDemo />
        <div className="my-6 text-xl border-2 p-2 cursor-pointer rounded-md">
          Read More
        </div>
      </div>
      <FAQ />
      <ContactMe />
    </>
  );
};

export default Home;
