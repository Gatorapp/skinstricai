"use client";

import Header from '@/Components/Header';
import React, { useState } from 'react';

function Page() {
    const [selectedAttribute, setSelectedAttribute] = useState('RACE');

    // A.I. confidence data
    const data: Record<string, Record<string, number>> = {
        race: {
            "Black": 11.96,
            "White": 12.80,
            "Southeast Asian": 6.29,
            "South Asian": 14.26,
            "Latino Hispanic": 6.20,
            "East Asian": 25.26,
            "Middle Eastern": 23.23
        },
        age: {
            "0-2": 12.01,
            "3-9": 11.75,
            "10-19": 6.08,
            "20-29": 3.16,
            "30-39": 4.95,
            "40-49": 21.42,
            "50-59": 14.18,
            "60-69": 6.40,
            "70+": 10.01
        },
        gender: {
            "Male": 52.05,
            "Female": 47.95
        }
    };

    const handleClick = (attribute: React.SetStateAction<string>) => {
        setSelectedAttribute(attribute);
    };

    return (
        <div>
            <Header btnOn={true} />
            <div className='h-screen flex flex-col md:mt-28'>
                <main className='flex-1 w-full bg-white md:overflow-hidden overflow-auto'>
                    <div className="h-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col">
                        <div className='text-start ml-4 mb-4 md:mb-6 md:ml-0'>
                            <h2 className="text-lg md:text-xl font-bold mb-1">A.I. ANALYSIS</h2>
                            <h3 className="text-4xl md:text-6xl font-normal leading-tight">DEMOGRAPHICS</h3>
                            <h4 className="text-sm md:text-base mt-1">PREDICTED {selectedAttribute}</h4>
                        </div>
                        <div className='grid md:grid-cols-[3fr_7fr_5fr] gap-4 mt-10 mb-40 md:gap-6 pb-0 md:pb-0 md:mb-0'>
                            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
                                {['RACE', 'AGE', 'GENDER'].map((attribute) => (
                                    <button
                                        key={attribute}
                                        onClick={() => handleClick(attribute)}
                                        className={`w-full text-left p-3 rounded-lg cursor-pointer transition-colors ${selectedAttribute === attribute ? 'bg-black text-white' : 'bg-white text-black'
                                            } hover:bg-[rgba(225,225,226,1)]`}
                                    >
                                        <h4 className="text-sm font-medium mb-1">{attribute}</h4>
                                    </button>
                                ))}
                            </div>
                            <div className='bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center'>
                                <div className='relative w-full max-w-[300px] aspect-square mb-4'>
                                    <svg className='w-full h-full' viewBox='0 0 100 100'>
                                        <circle cx='50' cy='50' r='45' className='text-gray-200' stroke='currentColor' strokeWidth='6' fill='transparent' />
                                        <circle className='text-black' stroke='currentColor' strokeWidth='6' fill='transparent'
                                            strokeLinecap='round' strokeDasharray='251.32741228718345' strokeDashoffset="134.45208645291325" transform='rotate(-90 50 50)' cx='50' cy='50' r='45' />
                                    </svg>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <p className='text-3xl md:text-5xl font-bold'>
                                            {Math.max(...Object.values(data[selectedAttribute.toLowerCase() as keyof typeof data]))}%
                                        </p>
                                    </div>
                                </div>
                                <p className='text-sm text-gray-600 text-center mb-2'>
                                    {Object.keys(data[selectedAttribute.toLowerCase()]).reduce((a, b) =>
                                        data[selectedAttribute.toLowerCase()][a] > data[selectedAttribute.toLowerCase()][b] ? a : b
                                    )}
                                </p>
                                <p className='text-sm text-gray-600 text-center'>
                                    If A.I. estimate is wrong, select the correct one.
                                </p>
                            </div>
                            <div className='bg-gray-100 p-4 rounded-lg'>
                                <div className='space-y-2'>
                                    <h4 className='text-sm font-medium mb-2'>A.I. CONFIDENCE</h4>
                                    {/* Render confidence bars dynamically */}
                                    {Object.entries(data[selectedAttribute.toLowerCase()]).map(([label, value], index) => (
                                        <div className='flex items-center gap-2 text-xs' key={index}>
                                            <span className='w-20 truncate'>{label}</span>
                                            <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                                <div className='bg-black h-2 rounded-full' style={{ width: `${value}%` }}></div>
                                            </div>
                                            <span className='w-8 text-right'>
                                                {value}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='pt-4 pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16'>
                            <div className='flex justify-between max-w-6xl mx-auto px-4 md:px-8'>
                                <a className="rotate-45 hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center border border-black" href="/select">
                                    <span className="rotate-[-45deg] text-xs font-semibold">Back</span>
                                </a>
                                <a className="rotate-45 hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center border border-black" href="/">
                                    <span className="rotate-[-45deg] text-xs font-semibold">Home</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Page;
