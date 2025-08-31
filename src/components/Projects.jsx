import React from 'react'
import curly from '../assets/Curly.svg'
import disneyProject from '../assets/disneyProject.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import urlshortner from '../assets/urlshortner.png'
import Gradient from '../assets/Gradient.png'
import StarBorder from '../components/StarBorder'
import { FaArrowTrendUp } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div id='projects' className='text-white max-w-[2000px] mx-auto xl:px-27 lg:px-15 px-5 mt-35 mb-10 flex flex-col gap-12 pb-50 overflow-hidden'>
            <h1 className='text-4xl font-bold text-blue-500'>Projects</h1>
            <p className='flex justify-center items-center'> <img src={curly} alt="" /></p>

            <motion.div className='lg:grid grid-cols-2 flex flex-col sm:my-20 my-10 items-center sm:static relative' initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}>
                <div className={`sm:rounded-2xl rounded-t-2xl bg-[#2b0b3a8b] pr-5 pt-5  sm:relative z-10 sm:w-[80%] lg:w-full md:right-15 right-10 lg:right-0`}>
                    <img className="w-full object-contain rounded-xl relative z-10" src={disneyProject} alt="Disney + Hotstar Clone" />
                    <img className='absolute lg:-top-30 lg:left-70  sm:-top-40 -top-25 lg:w-[550px] w-full' src={Gradient} alt="" />
                </div>
                <div className=" bg-[#1e123291] h-fit p-4 sm:rounded-2xl rounded-b-2xl sm:relative lg:right-10 lg:top-10 z-0 md:w-[70%] sm:w-[80%] lg:w-full md:left-27 left-10 lg:left-0 top-2">
                    <h2 className="text-xl font-bold mb-2 bg-gradient-to-tr from-white to-pink-500 bg-clip-text text-transparent text-right">Disney + Hotstar Clone</h2>
                    <p className="text-gray-400 mb-4 text-right lg:pl-5 text-[13px] sm:text-[16px]"><span className='text-blue-600 font-medium'>Disney + Hotstar</span>  clone with multiple routes for Home, Details, and Watch pages. Smooth page loading, search, and genre filters. Uses <span className='text-yellow-500 font-medium'>TMDB API</span> to show popular, <span className='text-green-600 font-medium'>trending</span>, blockbuster movies, and category wise content like Kids Shows, Indian, and <span className='text-red-600 font-medium'>Hollywood</span>. User friendly navigation and video playback included.</p>
                    <div className='flex gap-2 justify-end'>
                        <a target='_blank' href="https://prashantdisney.vercel.app/">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='flex items-center justify-center px-3 gap-2 py-1 rounded-3xl bg-[#3a393c3f] duration-100'><CiGlobe size={25} /><FaArrowTrendUp size={15} /></button>
                            </StarBorder>
                        </a>
                        <a target='_blank' href="https://github.com/PrashantSah07/Disney-Hotstar-Clone">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='flex items-center justify-center px-3 py-1 gap-2 rounded-3xl bg-[#3a393c3f] duration-100'><LuGithub size={25} /><FaArrowTrendUp size={15} /></button>
                            </StarBorder>
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div className='lg:grid grid-cols-2 flex flex-col-reverse sm:my-30 my-10 items-center sm:static relative' initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}>
                <div className=" bg-[#1e123291] h-fit p-4 lg:pr-10 sm:rounded-2xl rounded-b-2xl sm:relative lg:left-10 md:right-27 right-10 top-2 lg:top-10 md:w-[70%] sm:w-[80%] lg:w-full">
                    <h2 className="text-xl font-bold mb-2 bg-gradient-to-tr from-white to-pink-500 bg-clip-text text-transparent">Flight Agency Website</h2>
                    <p className="text-gray-400 mb-4 sm:text-[16px] text-[13px]">A responsive <span className='text-yellow-500 font-medium'>flight booking</span> platform with real-time flight data, advanced search filters, smooth animations, and a modern UI. Built using <span className='font-medium'>React.js</span>, <span className='font-medium'>TailwindCSS</span>, and <span className='text-red-600 font-medium'>AviationStack API.</span></p>
                    <div className='flex gap-2'>
                        <a target='_blank' href="https://flight-agency-websitee.vercel.app/">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='flex items-center justify-center px-3 gap-2 py-1 rounded-3xl bg-[#3a393c3f] duration-100'><CiGlobe size={25} /><FaArrowTrendUp size={15} /></button>
                            </StarBorder>
                        </a>
                        <a target='_blank' href="https://github.com/PrashantSah07/Flight-Agency-Website">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='flex items-center justify-center px-3 py-1 gap-2 rounded-3xl bg-[#3a393c3f] duration-100'><LuGithub size={25} /><FaArrowTrendUp size={15} /></button>
                            </StarBorder>
                        </a>
                    </div>
                </div>
                <div className={`sm:rounded-2xl rounded-t-2xl bg-[#2b0b3a8b] pl-5 pt-5 sm:relative sm:w-[80%] lg:w-full md:left-15 left-10 lg:left-0`}>
                    <img className="w-full object-contain rounded-xl relative z-10" src={project1} alt="Flight Agency Website" />
                    <img className='absolute lg:-top-30 lg:right-70 sm:-top-40 -top-25 lg:w-[550px] w-full' src={Gradient} alt="" />
                </div>
            </motion.div>

            <motion.div className='lg:grid grid-cols-2 flex flex-col sm:my-20 my-10 items-center sm:static relative' initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}>
                <div className={`sm:rounded-2xl rounded-t-2xl bg-[#2b0b3a8b] pr-5 pt-5  sm:relative z-10 sm:w-[80%] lg:w-full md:right-15 right-10 lg:right-0`}>
                    <img className="w-full object-contain rounded-xl relative z-10" src={project2} alt="Beautify Store" />
                    <img className='absolute lg:-top-30 lg:left-70  sm:-top-40 -top-25 lg:w-[550px] w-full' src={Gradient} alt="" />
                </div>
                <div className=" bg-[#1e123291] h-fit p-4 sm:rounded-2xl rounded-b-2xl sm:relative lg:right-10 lg:top-10 z-0 md:w-[70%] sm:w-[80%] lg:w-full md:left-27 left-10 lg:left-0 top-2">
                    <h2 className="text-xl font-bold mb-2 bg-gradient-to-tr from-white to-pink-500 bg-clip-text text-transparent text-right">Beautify Store</h2>
                    <p className="text-gray-400 mb-4 text-right lg:pl-5 text-[13px] sm:text-[16px]">A stylish beauty products website featuring <span className='text-yellow-500 font-medium'>makeup items</span> like mascara, lipstick, <span className='text-red-600 font-medium'>foundation</span>, and more.Users can filter products by category and easily add favorites to the cart.Clean design with smooth navigation and responsive layout for seamless <span className='text-green-500 font-medium'>shopping</span> experience.</p>
                    <div className='flex gap-2 justify-end'>
                        <a target='_blank' href="https://beautify-store.vercel.app/">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='flex items-center justify-center px-3 gap-2 py-1 rounded-3xl bg-[#3a393c3f] duration-100'><CiGlobe size={25} /><FaArrowTrendUp size={15} /></button>
                            </StarBorder>
                        </a>
                        <a target='_blank' href="https://github.com/PrashantSah07/Beautify-Store">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='flex items-center justify-center px-3 py-1 gap-2 rounded-3xl bg-[#3a393c3f] duration-100'><LuGithub size={25} /><FaArrowTrendUp size={15} /></button>
                            </StarBorder>
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div className='lg:grid grid-cols-2 flex flex-col-reverse sm:my-20 my-10 items-center sm:static relative' initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}>
                <div className=" bg-[#1e123291] h-fit p-4 lg:pr-10 sm:rounded-2xl rounded-b-2xl sm:relative lg:left-10 lg:top-10 md:right-27 right-10 top-2 md:w-[70%] sm:w-[80%] lg:w-full">
                    <h2 className="text-xl font-bold mb-2 bg-gradient-to-tr from-white to-pink-500 bg-clip-text text-transparent">URL shortner</h2>
                    <p className="text-gray-400 mb-4 text-[13px] sm:text-[16px]">A fast and <span className='text-yellow-400 font-medium'>user-friendly</span> web app that shortens long URLs into simple, <span className='text-green-400 font-medium'>shareable links.</span> It offers a clean, responsive design for better usability and secure, real-time <span className='text-orange-600 font-medium'>link generation.</span> Built with Next.js, MongoDB, and TailwindCSS.</p>
                    <div className='flex gap-2'>
                        <a target='_blank' href="https://easyurl.vercel.app/">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='flex items-center justify-center px-3 gap-2 py-1 rounded-3xl bg-[#3a393c3f] duration-100'><CiGlobe size={25} /><FaArrowTrendUp size={15} /></button>
                            </StarBorder>
                        </a>
                        <a target='_blank' href="https://github.com/PrashantSah07/URL-Shortner">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='flex items-center justify-center px-3 py-1 gap-2 rounded-3xl bg-[#3a393c3f] duration-100'><LuGithub size={25} /><FaArrowTrendUp size={15} /></button>
                            </StarBorder>
                        </a>
                    </div>
                </div>
                <div className={`sm:rounded-2xl rounded-t-2xl bg-[#2b0b3a8b] pl-5 pt-5 sm:relative sm:w-[80%] lg:w-full md:left-15 left-10 lg:left-0`}>
                    <img className="w-full object-contain rounded-xl relative z-10" src={urlshortner} alt="E-commerce" />
                    <img className='absolute lg:-top-30 lg:right-70  sm:-top-40 -top-25  lg:w-[550px] w-full' src={Gradient} alt="" />
                </div>
            </motion.div>

            <motion.div className='lg:grid grid-cols-2 flex flex-col sm:mt-20 mt-10 items-center sm:static relative' initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}>
                <div className={`sm:rounded-2xl rounded-t-2xl bg-[#2b0b3a8b] pr-5 pt-5 sm:relative z-10 sm:w-[80%] lg:w-full md:right-15 right-10 lg:right-0`}>
                    <img className="w-full object-contain rounded-xl relative z-10" src={project3} alt="Flight Agency Website" />
                    <img className='absolute lg:-top-30 lg:left-70  sm:-top-40 -top-25 lg:w-[550px] w-full' src={Gradient} alt="" />
                </div>
                <div className=" bg-[#1e123291] h-fit p-4 sm:rounded-2xl rounded-b-2xl sm:relative lg:right-10 lg:top-10 z-0 md:w-[70%] sm:w-[80%] lg:w-full md:left-27 left-10 lg:left-0 top-2">
                    <h2 className="text-xl font-bold mb-2 bg-gradient-to-tr from-white to-pink-500 bg-clip-text text-transparent text-right">E-commerce</h2>
                    <p className="text-gray-400 mb-4 text-right lg:pl-7 text-[13px] sm:text-[16px]">The E-commerce <span className='text-yellow-400 font-medium'>Shopper</span> App allows users to browse products, apply filters, add items to the cart, and place orders easily. It features a clean, responsive <span className='text-orange-600 font-medium'>design</span> and real-time product data, built using React.js and TailwindCSS.</p>
                    <div className='flex gap-2 justify-end'>
                        <a target='_blank' href="https://e-commerce-with-react-henna.vercel.app/">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='flex items-center justify-center px-3 gap-2 py-1 rounded-3xl bg-[#3a393c3f] duration-100'><CiGlobe size={25} /><FaArrowTrendUp size={15} /></button>
                            </StarBorder>
                        </a>
                        <a target='_blank' href="https://github.com/PrashantSah07/E-commerce-With-React">
                            <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                <button className='flex items-center justify-center px-3 py-1 gap-2 rounded-3xl bg-[#3a393c3f] duration-100'><LuGithub size={25} /><FaArrowTrendUp size={15} /></button>
                            </StarBorder>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects
