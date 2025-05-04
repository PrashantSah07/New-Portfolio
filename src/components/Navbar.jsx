import React, { useEffect, useState } from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import GlitchText from '../components/GlitchText'
import StarBorder from '../components/StarBorder'
import Gradient from '../assets/Gradient.png'

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`text-white flex justify-between items-center sticky top-0 z-100  mx-auto transition-all duration-400 ease-in-out ${scrolling ? 'bg-gradient-to-r from-black to-[#16015b] rounded-full lg:max-w-[79%] max-w-[85%] top-5 sm:py-5 py-4  sm:px-6 px-5' : 'bg-black max-w-[2000px] top-0 sm:px-10 px-5 sm:py-7 py-4'
                }`}>
                <GlitchText
                    speed={2}
                    enableShadows={true}
                    enableOnHover={true}
                    className='custom-class'>
                    DESTINY
                </GlitchText>
                <div className='hidden lg:flex'>
                    <ul className='flex items-center gap-2'>
                        <a href="#">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='px-3 py-1.5 rounded-full flex justify-center items-center gap-2'>Home <FaArrowTrendUp /></button>
                            </StarBorder>
                        </a>
                        <a href="#about">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='px-3 py-1.5 rounded-full flex justify-center items-center gap-2'>About <FaArrowTrendUp /></button>
                            </StarBorder>
                        </a>
                        <a href="#skills">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='px-3 py-1.5 rounded-full flex justify-center items-center gap-2'>Skills <FaArrowTrendUp /></button>
                            </StarBorder>
                        </a>
                        <a href="#projects">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='px-3 py-1.5 rounded-full flex justify-center items-center gap-2'>Projects <FaArrowTrendUp /></button>
                            </StarBorder>
                        </a>
                        <a href="#contact">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='px-3 py-1.5 rounded-full flex justify-center items-center gap-2'>Contact <FaArrowTrendUp /></button>
                            </StarBorder>
                        </a>
                    </ul>
                </div>
                <div className={`flex lg:hidden flex-col duration-300 ${isShow ? 'gap-0' : 'gap-1.5'}`} onClick={function () {
                    setIsShow(!isShow)
                }}>
                    <span className={`bg-white h-1 w-6  duration-300 ${isShow && 'rotate-45 absolute'}`} ></span>
                    <span className={`bg-white h-1 w-6 duration-300  ${isShow && '-rotate-45'}`} ></span>
                </div>
            </div>


            <div className={`backdrop-blur-sm bg-white/1 lg:hidden flex justify-center items-center h-full  w-[100%] fixed top-0 z-50 duration-300 ${isShow ? 'translate-x-[0%]' : 'translate-x-[100%]'}`} onClick={function () { setIsShow(false) }}>
                <ul className='bg-black border-[#ffffff3c] border-1  flex flex-col items-center gap-2 w-[90%] py-20 sm:px-20 px-10 rounded-3xl relative overflow-hidden' onClick={function (e) { e.stopPropagation(); }}>
                    <img src={Gradient} className='absolute -left-30 -top-40' alt="" />
                    <a href="#" className='w-full'>
                        <StarBorder as="div" className="custom-class w-full" color="white" speed="5s">
                            <button className='px-3 py-2 rounded-full flex justify-center items-center gap-2 w-[100%]' onClick={function () {
                                setIsShow(false);
                            }}>Home <FaArrowTrendUp /></button>
                        </StarBorder>
                    </a>
                    <a href="#about" className='w-full'>
                        <StarBorder as="div" className="custom-class w-full" color="white" speed="5s">
                            <button className='px-3 py-2 rounded-full flex justify-center items-center gap-2 w-[100%]' onClick={function () {
                                setIsShow(false);
                            }}>About <FaArrowTrendUp /></button>
                        </StarBorder>
                    </a>
                    <a href="#skills" className='w-full'>
                        <StarBorder as="div" className="custom-class w-full" color="white" speed="5s">
                            <button className='px-3 py-2 rounded-full flex justify-center items-center gap-2 w-[100%]' onClick={function () {
                                setIsShow(false);
                            }}>Skills <FaArrowTrendUp /></button>
                        </StarBorder>
                    </a>
                    <a href="#projects" className='w-full'>
                        <StarBorder as="div" className="custom-class w-full" color="white" speed="5s">
                            <button className='px-3 py-2 rounded-full flex justify-center items-center gap-2 w-[100%]' onClick={function () {
                                setIsShow(false);
                            }}>Projects <FaArrowTrendUp /></button>
                        </StarBorder>
                    </a>
                    <a href="#contact" className='w-full'>
                        <StarBorder as="div" className="custom-class w-full" color="white" speed="5s">
                            <button className='px-3 py-2 rounded-full flex justify-center items-center gap-2 w-[100%]' onClick={function () {
                                setIsShow(false);
                            }}>Contact <FaArrowTrendUp /></button>
                        </StarBorder>
                    </a>
                    <img src={Gradient} className='absolute -bottom-40 -right-30' alt="" />
                </ul>
            </div>
        </>
    )
}

export default Navbar
