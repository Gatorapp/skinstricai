"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Image as ImageIcon } from "lucide-react";
import Header from "@/Components/Header";
import { MdPlayArrow } from "react-icons/md";

const CameraUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const startCamera = async () => {
    setIsCameraOn(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const imageUrl = canvasRef.current.toDataURL("image/png");
        setPreview(imageUrl);
        
        // Stop the camera and hide the button
        stopCamera();
      }
    }
  };
  

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setIsCameraOn(false);
    }
  };

  return (
    <>
  <Header btnOn={true} />
  <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
  <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative mb-32 md:mb-60 space-y-12 md:space-y-0 "> 
          {/* Camera Scan Box */}
          <div className="relative flex flex-col items-center cursor-pointer mt-48 mr-48" onClick={startCamera}>
            <div className="w-[120px] h-[120px] md:w-[300px] md:h-[300px] border border-dotted border-gray-800 rotate-45 animate-slow-spin"></div>
            <div className="w-[110px] h-[110px] md:w-[290px] md:h-[290px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-dotted border-gray-800 animate-medium-spin"></div>
            <div className="w-[100px] h-[100px] md:w-[280px] md:h-[280px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-dotted border-gray-800 animate-fast-spin"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Camera className="w-6 h-6 md:w-12 md:h-12" />
              <div className="absolute top-[55%] right-[-40px] md:right-[-90px] translate-y-[-20px] text-center">
                <div className="w-[40px] md:w-[80px] h-px bg-black"></div>
                <p className="text-[7px] md:text-[10px] font-semibold mt-1 leading-tight">
                  ALLOW A.I. <br /> TO SCAN YOUR FACE
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Upload Box */}
          <div className="relative flex flex-col items-center cursor-pointer mt-48 ml-48" onClick={handleFileUpload}>
            <div className="w-[120px] h-[120px] md:w-[300px] md:h-[300px] border border-dotted border-gray-800 rotate-45 animate-fast-spin"></div>
            <div className="w-[110px] h-[110px] md:w-[290px] md:h-[290px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-dotted border-gray-800 animate-medium-spin"></div>
            <div className="w-[100px] h-[100px] md:w-[280px] md:h-[280px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-dotted border-gray-800 animate-slow-spin"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <ImageIcon className="w-6 h-6 md:w-12 md:h-12" />
              <div className="absolute top-[55%] left-[-40px] md:left-[-90px] translate-y-[20px] text-center">
                <div className="w-[40px] md:w-[80px] h-px bg-black"></div>
                <p className="text-[7px] md:text-[10px] font-semibold mt-1 leading-tight">
                  ALLOW A.I. <br /> ACCESS GALLERY
                </p>
              </div>
            </div>
          </div>

          {/* Hidden File Inputs */}
          <label htmlFor="file-upload" className="hidden">Upload Image</label>
          <input id="file-upload" type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
        </div>

        {/* Webcam Preview */}
        {isCameraOn && (
  <div className="absolute top-14 right-14 w-64 h-64 border border-gray-800 rounded-lg overflow-hidden flex flex-col items-center">
    <video ref={videoRef} autoPlay className="w-full h-full object-cover"></video>
    
    {/* Show the button only if the camera is active */}
    {isCameraOn && (
      <button 
        onClick={capturePhoto} 
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
      >
        Capture Photo
      </button>
    )}
  </div>
)}


        {/* Captured Image Preview */}
        {preview && (
          <div className="absolute top-14 right-14 w-32 h-32 border border-gray-800 rounded-lg overflow-hidden">
            <img src={preview} alt="Captured" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Hidden Canvas for Capturing Photo */}
        <canvas ref={canvasRef} className="hidden"></canvas>

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
        
    {/* Animation Styles */}
    <style jsx>{`
      @keyframes slowSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes mediumSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes fastSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-slow-spin { animation: slowSpin 5.4s linear infinite; }
      .animate-medium-spin { animation: mediumSpin 5.2s linear infinite; }
      .animate-fast-spin { animation: fastSpin 5s linear infinite; }
    `}</style>
  </div>
</>

  );
};
export default CameraUpload;
