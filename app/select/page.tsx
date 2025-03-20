"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import "@fontsource/roboto/400.css"; 
import "@fontsource/roboto/600.css"; 
import Header from "@/Components/Header";

function Page() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false); 
  const [isDiamondVisible, setIsDiamondVisible] = useState(false); 

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsDiamondVisible(true); 
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      setIsDiamondVisible(false); 
    }, 0); 
  };

  interface HandleButtonClickProps {
    route: string;
  }

  const handleButtonClick = (route: HandleButtonClickProps['route']): void => {
    router.push(route);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-6 relative font-roboto">
      <Header btnOn={false} />
       {/* A.I. Analysis Box at Top Left Corner */}
       <div className="absolute top-12 left-4 p-4">
        <h2 className="text-sm font-semibold">A.I. ANALYSIS</h2>
        <p className="text-sm">A.I. has estimated the following:</p>
        <p className="text-sm">Fix estimated information if needed.</p>
      </div>
      <div className="relative w-[280px] h-[280px] flex flex-wrap items-center justify-center">
        {/* Demographics Button */}
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleButtonClick('/demographics')}
          className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/8 rotate-45 w-[120px] h-[120px] bg-gray-200 shadow-lg flex items-center justify-center p-4 hover:bg-gray-300 rounded-lg cursor-pointer"
        >
          <div className="transform -rotate-45 text-center">
            <h2 className="text-sm font-semibold">Demographics</h2>
          </div>
        </button>

        {/* Skin Type Details Button */}
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleButtonClick('')}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/8 rotate-45 w-[120px] h-[120px] bg-gray-200 shadow-lg flex items-center justify-center p-4 hover:bg-gray-300 rounded-lg cursor-pointer"
        >
          <div className="transform -rotate-45 text-center">
            <h2 className="text-sm font-semibold">Skin Type Details</h2>
          </div>
        </button>

        {/* Cosmetic Concerns Button */}
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleButtonClick('')}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/8 rotate-45 w-[120px] h-[120px] bg-gray-200 shadow-lg flex items-center justify-center p-4 hover:bg-gray-300 rounded-lg cursor-pointer"
        >
          <div className="transform -rotate-45 text-center">
            <h2 className="text-sm font-semibold">Cosmetic Concerns</h2>
          </div>
        </button>

        {/* Weather Button */}
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleButtonClick('')}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-1/8 rotate-45 w-[120px] h-[120px] bg-gray-200 shadow-lg flex items-center justify-center p-4 hover:bg-gray-300 rounded-lg cursor-pointer"
        >
          <div className="transform -rotate-45 text-center">
            <h2 className="text-sm font-semibold">Weather</h2>
          </div>
        </button>
      </div>

      {/* Dotted Boxes */}
      {isDiamondVisible && (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none"> {/* Prevent pointer events */}
          <div className={`absolute w-[400px] h-[400px] border-2 border-dotted border-gray-400 rotate-45 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} diamondBox`}></div>
        </div>
      )}

      {/* Home Button at Bottom Right */}
              <div className="absolute bottom-9 right-16">
                <div className="flex items-center justify-center gap-4">
                  <p className="text-xs text-black uppercase font-bold opacity-60">Home</p>
                  <button
                    onClick={() => router.back()}
                    className="flex items-center justify-center w-6 h-6 border-2 border-gray-900 transform rotate-45 hover:scale-110 transition-all"
                  >
                    <MdPlayArrow className="rotate-[85deg] text-black text-lg z-10" />
                  </button>
                </div>
              </div>

      {/* Back Button at Bottom Left */}
              <div className="absolute bottom-9 left-16">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => router.back()}
                    className="flex items-center justify-center w-6 h-6 border-2 border-gray-900 transform rotate-45 hover:scale-110 transition-all"
                  >
                    <MdPlayArrow className="rotate-[16deg] text-black text-lg z-10" />
                  </button>
                  <p className="text-xs text-black uppercase font-bold opacity-60">Back</p>
                </div>
              </div>
    </div>
  );
}

export default Page;
