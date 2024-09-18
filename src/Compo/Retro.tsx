"use client";

import RetroGrid from "../@/components/magicui/retro-grid";
import ProgressSection from "./ProgressSection";
import TimeLine from "./TimeLine";

export function RetroGridDemo() {
  return (
    <div className="pt-40 relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-zinc-950 md:shadow-xl">
     
      {/* <ProgressSection/> */}
      <div className=" text-4xl font-bold my-6 mb-10">TimeLine</div>
      <TimeLine/>

      <RetroGrid />
      <div
        className="absolute top-50 opacity-70 inset-0 bg-gradient-to-b from-transparent to-zinc-950"
        style={{ zIndex: 1 }}
      ></div>
    </div>
  );
}
