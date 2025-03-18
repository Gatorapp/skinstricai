"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
    btnOn: boolean;
}

const Header: React.FC<HeaderProps> = ({ btnOn }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isSadPopupVisible, setIsSadPopupVisible] = useState(false);

    
    useEffect(() => {
        gsap.fromTo(
            ".header__link",
            { clipPath: "inset(0% 80% 0% 80%)", duration: 1 },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1 }
        );
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); 
        setIsPopupVisible(true); 
    };

    const handleLeave = () => {
        setIsPopupVisible(false); 
        setIsSadPopupVisible(true); 
    };

    const handleStay = () => {
        setIsPopupVisible(false); 
    };

    const handleChangedMind = () => {
        setIsSadPopupVisible(false); 
    };

    return (
        <>
            <header className="items-center flex justify-between fixed left-0 top-0 z-[3] mx-auto w-full h-[64px] px-[32px]">
                <div className="items-center flex relative z-[30]">
                    <Link
                        href="/intro"
                        onClick={handleLinkClick}
                        className="font-roobert no-underline header__link hover:text-gray-500 transition-colors duration-300"
                        style={{
                            clipPath: "inset(0%)",
                            fontSize: "clamp(10px, 2px + .625vw, 14px)",
                        }}
                    >
                        SKINSTRIC  [ INTRO ]
                    </Link>
                </div>
                {btnOn && (
                    <div className="flex items-center relative z-[30]">
                        <div className="items-center flex">
                            <button className="cursor-not-allowed bg-[#1a1b1c] relative text-center border-[1px] border-[#1a1b1c] header__btn--wrapper rounded-none px-[16px] py-[8px] text-[#fcfcfc] inline-block flex-shrink-0">
                                <span className="items-center font-roobert inline-flex transition-all">ENTER CODE</span>
                            </button>
                        </div>
                    </div>
                )}
            </header>

            
            {isPopupVisible && (
                <div className="fixed top-[48px] left-[47px] w-[401px] h-auto bg-[#050000] shadow-lg border border-gray-400 p-6 text-white z-50">
                    <p className="uppercase font-[Roobert TRIAL] font-semibold text-[16px] leading-[24px] tracking-[0%]">
                        You are about to leave analysis.<br />
                        Are you sure?
                    </p>
                    <div className="w-full border-t border-gray-400 mt-10"></div>
                    <div className="flex justify-end gap-6">
                        <button 
                            className="text-white uppercase font-[Roobert TRIAL] font-semibold text-[16px] leading-[24px] tracking-[0%] cursor-pointer"
                            onClick={handleLeave}
                        >
                            Leave
                        </button>
                        <button 
                            className="text-white uppercase font-[Roobert TRIAL] font-semibold text-[16px] leading-[24px] tracking-[0%] cursor-pointer"
                            onClick={handleStay}
                        >
                            Stay
                        </button>
                    </div>
                </div>
            )}

            
            {isSadPopupVisible && (
                <div className="fixed top-[48px] left-[32px] w-[401px] h-[24] bg-[#080000] shadow-lg border border-gray-400 p-6 text-white z-50">
                    <p className="uppercase font-[Roobert TRIAL] font-semibold text-[16px] leading-[24px] tracking-[0%]">
                        Sad to see you go.
                    </p>
                    <div className="w-full border-t border-gray-400 mt-16"></div>
                    <div className="flex items-center justify-end space-x-8 mt-2">
                        <button 
                            className="text-white uppercase font-[Roobert TRIAL] font-semibold text-[16px] leading-[24px] tracking-[0%] cursor-pointer"
                            onClick={handleChangedMind}
                        >
                            Changed my mind
                        </button>
                        
                        <Link 
                            href="/" 
                            className="text-white uppercase font-[Roobert TRIAL] font-semibold text-[16px] leading-[24px] tracking-[0%] cursor-pointer"
                        >
                            ...
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
