"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import { useRouter } from "next/navigation";
import DiamondBackground from "./DiamondBackground";

const Form = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phase, setPhase] = useState<"name" | "location">("name");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedLocation = localStorage.getItem("location");
    if (storedName) setName(storedName);
    if (storedLocation) setLocation(storedLocation);
  }, []);

  const validateInput = (input: string) => {
    return /^[A-Za-z\s]+$/.test(input);
  };

  const handleNext = () => {
    if (phase === "name" && validateInput(name)) {
      localStorage.setItem("name", name);
      setPhase("location");
      setError("");
    } else if (phase === "location" && validateInput(location)) {
      localStorage.setItem("location", location);
      setError("");
      submitData();
    } else {
      setError("Please enter a valid input without numbers or special characters.");
    }
  };

  const submitData = async () => {
    try {
      const response = await fetch(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, location }),
        }
      );

      if (!response.ok) throw new Error("Failed to submit data");

      const responseData = await response.json(); // Parse response

      // Show success message with user's name
      alert(`🎉 Submitted Successful! \n\n${responseData.SUCCESS || `Added ${name} from ${location}`}`);

      router.push("/camera"); // Navigate to camera page
    } catch (error) {
      console.error("Submission error:", error);
      setError("Failed to submit data. Please try again.");
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <DiamondBackground />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h1 className="uppercase text-xs font-semibold text-center">
          {phase === "name" ? "Introduce Yourself" : "Where are you from?"}
        </h1>
        {!isFocused && (
          <h2 className="uppercase opacity-60 text-[10px] mt-2">Click to type</h2>
        )}
        <div className="relative group mt-3">
          <input
            type="text"
            placeholder={phase === "name" ? "Introduce Yourself" : "Where are you from?"}
            value={phase === "name" ? name : location}
            onChange={(e) =>
              phase === "name" ? setName(e.target.value) : setLocation(e.target.value)
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-[350px] lg:w-[450px] text-center text-3xl lg:text-5xl border-b-2 border-transparent focus:border-transparent focus:outline-none transition-colors duration-200 placeholder:text-black focus:placeholder:text-opacity-60"
          />
          <span className="absolute left-1/2 bottom-0 h-0.5 w-[350px] bg-black transform -translate-x-1/2 scale-x-0 origin-center group-focus-within:scale-x-100 transition-transform duration-200"></span>
        </div>
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      </div>
      {/* Navigation buttons */}
      <div className="absolute bottom-9 flex justify-between w-[80vw] lg:w-[94vw]">
        <div className="flex items-center justify-center cursor-pointer gap-4">
          <div className="flex items-center justify-center gap-4">
            {phase === "location" && (
              <button
                onClick={() => setPhase("name")}
                className="relative flex items-center justify-center cursor-pointer w-6 h-6 border-2 border-gray-900 transform rotate-45 hover:scale-110 transition-all"
                title="Back to Name"
              >
                <MdPlayArrow className="rotate-[135deg] text-black text-lg z-10" />
              </button>
            )}
          </div>
          {phase === "name" && (
            <div className="group relative flex items-center justify-center w-6 h-6 border-2 border-gray-900 transform rotate-45 transition-all hover:scale-110 group-hover:border-dotted">
              <Link href={'/'} className="flex items-center justify-center w-full h-full">
                <MdPlayArrow className="rotate-[135deg] text-black text-lg z-10" />
              </Link>
            </div>
          )}
          <p className="text-xs uppercase font-bold opacity-60">Back</p>
        </div>
        {/* Next/Proceed Button Location */}
        {name.trim() !== "" && phase === "name" && (
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase font-bold opacity-60">Process</p>
            <button
              onClick={() => setPhase("location")}
              className="relative flex items-center justify-center cursor-pointer w-6 h-6 border-2 border-gray-900 transform rotate-45 hover:scale-110 transition-all"
              title="Proceed to Location"
            >
              <MdPlayArrow className="rotate-[67.5deg] text-black text-lg z-10" />
            </button>
          </div>
        )}
        {/* Next/Proceed Button Next Page */}
        {location.trim() !== "" && phase === "location" && (
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase font-bold opacity-60">Submit</p>
            <button
              onClick={handleNext}
              className="relative flex items-center justify-center cursor-pointer w-6 h-6 border-2 border-gray-900 transform rotate-45 hover:scale-110 transition-all"
            >
              <MdPlayArrow className="rotate-[67.5deg] text-black text-lg z-10" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
