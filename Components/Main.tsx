import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { MdPlayArrow } from "react-icons/md";
import gsap from "gsap";

const Main = () => {
    const sophisticatedRef = useRef(null);
    const skincareRef = useRef(null);
    const discoverRef = useRef(null);
    const leftDiamondRef = useRef(null);
    const rightDiamondRef = useRef(null);
    const extraDiamond1Ref = useRef(null);
    const extraDiamond2Ref = useRef(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const diamondTl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (!sophisticatedRef.current || !skincareRef.current || !discoverRef.current || !leftDiamondRef.current) return;

        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({ paused: true })
                .fromTo(
                    sophisticatedRef.current,
                    { x: 0 },
                    { x: "-32.5vw", duration: .75, ease: "power2.out" }
                )
                .fromTo(
                    skincareRef.current,
                    { x: 0 },
                    { x: "-38vw", duration: .75, ease: "power2.out" },
                    "<"
                )
                .fromTo(
                    discoverRef.current,
                    { x: 0 },
                    { x: "-100vw", duration: .75, ease: "power2.out" },
                    "<"
                )
                .fromTo(
                    leftDiamondRef.current,
                    { opacity: 1 },
                    { opacity: 0, duration: 0.75, ease: "power2.out" },
                    "<"
                );

            // Animation for additional right diamonds
            diamondTl.current = gsap.timeline({ paused: true })
                .fromTo(
                    [extraDiamond1Ref.current, extraDiamond2Ref.current],
                    { scale: 0, opacity: 0 },
                    { scale: 1.5, opacity: 1, duration: .75, ease: "power2.out", stagger: 0.2 }
                );
        });

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => {
        tl.current?.play();
        diamondTl.current?.play();
    };

    const handleMouseLeave = () => {
        tl.current?.reverse();
        diamondTl.current?.reverse();
    };

    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Background Video */}
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                <source src="/videos/bubble-animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Left Diamond - Centered on Mobile */}
                    <div
                        ref={leftDiamondRef}
                        className="pointer-events-none absolute w-[200px] h-[200px] transform rotate-45 border-2 border-gray-300 border-dotted opacity-30 
                                    lg:left-[-225px] lg:w-[450px] lg:h-[450px] lg:opacity-60"
                    ></div>

                    {/* Right Diamond - Centered on Mobile */}
                    <div
                        ref={rightDiamondRef}
                        className="pointer-events-none absolute w-[220px] h-[220px] transform rotate-45 border-2 border-gray-400 border-dotted opacity-60 
                                    lg:right-[-225px] lg:w-[450px] lg:h-[450px]"
                    ></div>

                    {/* Extra Diamonds - Initially Hidden */}
                    <div
                        ref={extraDiamond1Ref}
                        className="pointer-events-none absolute w-[350px] h-[350px] transform rotate-45 border-2 border-gray-300 border-dotted opacity-0 
                                    lg:right-[-200px]"
                    ></div>
                    <div
                        ref={extraDiamond2Ref}
                        className="pointer-events-none absolute w-[325px] h-[325px] transform rotate-45 border-2 border-gray-200 border-dotted opacity-0 
                                     lg:right-[-175px]"
                    ></div>
                    {/* Take Test button */}
                    <Link
                        href={"/intro"}
                        className="take-test-btn hidden items-center justify-center gap-4 lg:flex lg:absolute right-16 cursor-pointer transition-transform duration-300 group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p className="text-xs uppercase font-bold opacity-60 transition-transform duration-300 group-hover:-translate-x-2">
                            Take Test
                        </p>

                        <div className="relative flex items-center justify-center w-8 h-8">
                            <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none transition-transform duration-700 group-hover:border-dotted group-hover:scale-110"></div>
                            <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab] pointer-events-none transition-transform duration-700 scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-150"></div>
                            <figure className="relative z-10">
                                <MdPlayArrow className="intro" />
                            </figure>
                        </div>
                    </Link>

                    {/* Discover A.I. button */}
                    <div
                        ref={discoverRef}
                        className="discover-ai-btn cursor-not-allowed items-center justify-center gap-4 lg:flex lg:flex-row-reverse lg:absolute left-16"
                    >
                        <p className="text-gray-300 text-xs uppercase font-bold opacity-60">Discover A.I.</p>
                        <div className="relative flex items-center justify-center w-8 h-8">
                            <div className="absolute inset-0 transform rotate-45 border-2 border-gray-300 pointer-events-none"></div>
                            <figure className="relative z-10">
                                <MdPlayArrow className="rotate-180 text-gray-300" />
                            </figure>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex items-center flex-col m-auto px-4 h-screen justify-center gap-10">
                    <h1 className="headline-text text-5xl lg:text-9xl lg:max-w-[600px] text-center tracking-[-0.07em] lg:absolute lg:left-[50%] lg:transform lg:-translate-x-[50%]">
                        <span ref={sophisticatedRef} className="block">
                            Sophisticated
                        </span>
                        <span ref={skincareRef} className="block">
                            Skincare
                        </span>
                    </h1>

                    <footer className="footer absolute bottom-0 uppercase w-[316px] h-[72px] top-[775px] left-[32px] 
                 text-gray font-[Roobert] text-[14px] 
                 leading-[24px] tracking-[0%] font-normal p-4">
                        Skinstric developed an A.I. that creates a highly-personalized routine
                        tailored to what your skin needs.
                    </footer>

                    {/* Mobile "Enter Experience" Button */}
                    <Link href="/intro" className="lg:hidden mt-4 flex items-center justify-center gap-2 px-4 py-2  text-black text-xs uppercase rounded-md">
                        <p>Enter Experience</p>
                        <div className="relative flex items-center justify-center w-[20px] h-[20px]">
                            <div className="absolute inset-0 transform rotate-45 border-2 border-black pointer-events-none"></div>
                            <MdPlayArrow className="relative z-10" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Main;
