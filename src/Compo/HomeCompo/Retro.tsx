"use client";

import RetroGrid from "../../@/components/magicui/retro-grid";
import ProgressSection from "./ProgressSection";
import TimeLine from "./TimeLine";
import Timeline from "../../app/Timeline.svg";
import TimelineTop from "../../app/TimelineTop.svg";
export function RetroGridDemo() {
  return (
    <div className="pt-40 relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-zinc-950 md:shadow-xl">
      <div className=" text-4xl font-bold my-6 mb-10 text-indigo-100 z-[5]">
        Experience
      </div>
      <TimeLine />

      <RetroGrid />
      <div
        className="absolute bottom-0 opacity-70 inset-0 bg-gradient-to-b from-transparent to-zinc-950"
        style={{ zIndex: 1 }}
      ></div>
      <img src={Timeline} alt="" className="absolute bottom-0" />
      <img src={TimelineTop} alt="" className="absolute top-[20vh] opacity-55" />
    </div>
  );
}
