import Header from '@/Components/Header'
import React from 'react'

function page() {
    return (
        <div>
            <Header btnOn={true} />
            <div className='h-screen flex flex-col md:mt-28'>
                <main className='flex-1 w-full bg-white md:overflow-hidden overflow-auto'>
                    <div className="h-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col">
                        <div className='text-start ml-4 mb-4 md:mb-6 md:ml-0'>
                            <h2 className="text-lg md:text-xl font-bold mb-1">A.I. ANALYSIS</h2>
                            <h3 className="text-4xl md:text-6xl font-normal leading-tight">DEMOGRPHICS</h3>
                            <h4 className="text-sm md:text-base mt-1">PREDICTED RACE & AGE</h4>
                        </div>
                        <div className='grid md:grid-cols-[3fr_7fr_5fr] gap-4 mt-10 mb-40 md:gap-6 pb-0 md:pb-0 md:mb-0'>
                            <div className='bg-gray-100 p-4 rounded-lg space-y-4'>
                                <div className='p-3 rounded-lg cursor-pointer transtion-colors bg-black text-white'>
                                    <h4 className='text-sm font-medium mb-1'>RACE</h4>
                                    <p className='text-xs'>BLACK</p>
                                </div>
                                <div className='p-3 rounded-lg cursor-pointer transtion-colors bg-black text-white'>
                                    <h4 className='text-sm font-medium mb-1'>AGE</h4>
                                    <p className='text-xs'>10-19</p>
                                </div>
                                <div className='p-3 rounded-lg cursor-pointer transtion-colors bg-black text-white'>
                                    <h4 className='text-sm font-medium mb-1'>GENDER</h4>
                                    <p className='text-xs'>FEMALE</p>
                                </div>
                            </div>
                            <div className='bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center'>
                              <div className='relative w-full max-w-[300px] aspect-square mb-4'>
                                <svg className='w-full h-full' viewBox='0 0 100 100'>
                                    <circle cx='50' cy='50' r='45' className='text-gray-200' stroke='currentColor' strokeWidth='6' fill='transparent'/>
                                    <circle className='text-black' stroke='currentColor' strokeWidth='6' fill='transparent'
                                    stroke-linecap='round' stroke-dasharray='251.32741228718345' stroke-dashoffset="134.45208645291325" transform='rotate(-90 50 50)' cx='50' cy='50' r='45'/>
                                </svg>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <p className='text-3xl md:text-5xl font-bold'>
                                        47
                                        %
                                    </p>
                                </div>
                              </div> 
                                <p className='text-sm text-gray-600 text-center mb-2'>BLACK</p>
                                <p className='text-sm text-gray-600 text-center'>If A.I. estimate is wrong, select the correct one.</p>
                              </div> 
                              <div className='bg-gray-100 p-4 rounded-lg'>
                                <div className='space-y-2'>
                                    <h4 className='text-sm font-medium mb-2'>A.I. CONFIDENCE</h4>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <span className='w-20 truncate'>Black</span>
                                        <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                            <div className='bg-black h-2 rounded-full' style={{ width: '46.5%' }}></div>
                                        </div>
                                        <span className='w-8 text-right'>
                                            46.5%
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <span className='w-20 truncate'>Middle east</span>
                                        <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                            <div className='bg-black h-2 rounded-full'style={{ width: '34.9%' }}></div>
                                        </div>
                                        <span className='w-8 text-right'>
                                            34.9%
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <span className='w-20 truncate'>White</span>
                                        <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                            <div className='bg-black h-2 rounded-full'style={{ width: '12.2%' }}></div>
                                        </div>
                                        <span className='w-8 text-right'>
                                            12.2%
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <span className='w-20 truncate'>South asian</span>
                                        <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                            <div className='bg-black h-2 rounded-full'style={{ width: '3.1%' }}></div>
                                        </div>
                                        <span className='w-8 text-right'>
                                            3.1%
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <span className='w-20 truncate'>East asian</span>
                                        <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                            <div className='bg-black h-2 rounded-full'style={{ width: '1.6%' }}></div>
                                        </div>
                                        <span className='w-8 text-right'>
                                            1.6%
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <span className='w-20 truncate'>Latino hispanic</span>
                                        <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                            <div className='bg-black h-2 rounded-full'style={{ width: '1.1%' }}></div>
                                        </div>
                                        <span className='w-8 text-right'>
                                            1.1%
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <span className='w-20 truncate'>Southeast asian</span>
                                        <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                            <div className='bg-black h-2 rounded-full'style={{ width: '0.6%' }}></div>
                                        </div>
                                        <span className='w-8 text-right'>
                                            0.6%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                                    <div className=' pt-4 pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8  md:mb-16'>
                                        <div className='flex justify-between max-w-6xl mx-auto px-4 md:px8'>
                                        <a className="rotate-45 hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center border border-black" href="/select"><span className="rotate-[-45deg] text-xs font-semibold">Back</span></a>
                                        <a className="rotate-45 hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center border border-black" href="/"><span className="rotate-[-45deg] text-xs font-semibold">Home</span></a>
                                        </div>
                                    </div>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default page