"use client";
import React from "react";
import { Button } from "./ui/button";
import Video from "./Video";

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full bg-[#fafafa] flex justify-center items-center overflow-hidden">
      <div className="relative z-50 px-4 md:px-8 lg:px-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 mt-16 md:mt-20 lg:mt-28">
          Turn Video Chaos into Clarity
        </h1>
        <p className="text-neutral-700 text-sm sm:text-base md:text-lg lg:text-xl my-4 lg:my-6">
          Transforms vast video libraries into instantly searchable, actionable
          insights — no manual tagging required.
        </p>
        <div className="my-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="px-4 py-2 text-sm sm:text-base">Book a Demo</Button>
          <p className="text-neutral-600 text-xs sm:text-sm md:text-base">
            5,000 people like you <br className="hidden sm:block" /> have purchased this product!
          </p>
        </div>
        <div id="video" className="mt-16 md:mt-32 lg:mt-40 w-full">
          <Video />
        </div>
      </div>
    </div>
  );
};
