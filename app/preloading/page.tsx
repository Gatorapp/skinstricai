"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DiamondBackground from "@/Components/DiamondBackground";

const preloading = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/select"); 
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <DiamondBackground />
      <p className="absolute text-lg font-semibold text-center">
        PREPARING YOUR ANALYSIS...
      </p>
    </div>
  );
};

export default preloading;
