"use client";
import React
 from "react";
import { Button } from "./ui/button";
import Video from "./Video";

export const Hero: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-[#fafafa] flex justify-center items-center overflow-hidden">
      <div className="relative z-50 mt-40 pointer-events-none select-none text-center">
        <h1 className="md:text-2xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 pointer-events-none mt-28">
          Turn Video Chaos into Clarity
        </h1>
        <p className="text-neutral-700 my-5">
          Transforms vast video libraries into instantly searchable, actionable
          insights — no manual tagging required.
        </p>
        <div className="my-10 flex items-center justify-center gap-4">
          <Button>Book a Demo</Button>
          <p className="text-neutral-600">
            5,000 people like you <br /> have purchased this product!
          </p>
        </div>
        <div id="video" className="mt-64">
          <Video />
        </div>
      </div>
    </div>
  );
};