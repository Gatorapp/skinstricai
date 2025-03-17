import React, { useEffect, useState } from "react";

const DiamondBackground = () => {
  const [diamondRotations, setDiamondRotations] = useState([0, 0, 0]);

  useEffect(() => {
    let animationFrameId: number;

    const rotateDiamonds = () => {
      setDiamondRotations((prevRotations) => [
        prevRotations[0] + 0.18,
        prevRotations[1] + 0.20,
        prevRotations[2] + 0.22,
      ]);
      animationFrameId = requestAnimationFrame(rotateDiamonds);
    };

    animationFrameId = requestAnimationFrame(rotateDiamonds);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <div
        className="hidden lg:block absolute w-[500px] h-[500px] border-2 border-[--primary] border-dotted opacity-30"
        style={{ transform: `rotate(${diamondRotations[0]}deg)` }}
      ></div>
      <div 
        className="hidden lg:block absolute w-[600px] h-[600px] border-2 border-[--primary] border-dotted opacity-20"
        style={{ transform: `rotate(${diamondRotations[1]}deg)` }}
      ></div>
      <div
        className="hidden lg:block absolute w-[700px] h-[700px] border-2 border-[--primary] border-dotted opacity-10"
        style={{ transform: `rotate(${diamondRotations[2]}deg)` }}
      ></div>
    </>
  );
};

export default DiamondBackground;
