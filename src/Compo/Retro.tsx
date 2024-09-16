"use client";

import RetroGrid from "../@/components/magicui/retro-grid";
import ProgressSection from "./ProgressSection";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[90vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-zinc-950 md:shadow-xl">
     
      <ProgressSection/>

      <RetroGrid />
    </div>
  );
}
