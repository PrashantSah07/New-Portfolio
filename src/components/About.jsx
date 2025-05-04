import React from 'react'
import aboutImg from '../assets/about.svg'
import { motion } from 'framer-motion'
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import StarBorder from '../components/StarBorder'
import Resume from '../assets/resume.pdf'

const About = () => {
    return (
        <div id='about' className='text-white max-w-[2000px] mx-auto xl:px-27 lg:px-15 px-5 mt-20 xl:mt-0'>
            <div className='mx-auto flex flex-col gap-10 bg-gradient-to-br from-[#020012] via-[#0f0c293e] to-[#302b63] py-10 pb-15 px-5 rounded-4xl'>
                <h1 className='text-4xl font-bold text-blue-500'>About Me</h1>
                <div className='flex lg:justify-between gap-15 lg:flex-row flex-col items-center px-2 lg:px-0'>
                    <img className='max-w-[400px]' src={aboutImg} alt="" />
                    <div className='flex flex-col gap-5 mt-12'>
                        <p className='sm:text-[18px] text-[16px]'>Hi, I'm a passionate and self-driven <span className='font-semibold text-amber-400'>web developer</span> with a deep curiosity for technology and design. I constantly explore new technologies to craft seamless and engaging digital <span className='font-semibold text-purple-600'>experiences.</span></p>
                        <p className='sm:text-[18px] text-[16px]'>My journey in web development blends creativity with functionality, ensuring every project is both visually appealing and highly <span className='font-semibold text-red-600'>interactive.</span> Here, you'll get to know about my <span className='font-semibold text-green-500'>learning</span> journey and innovations</p>
                        <div className="flex sm:gap-4 gap-2">
                            <a target='_blank' href="https://github.com/PrashantSah07">
                                <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                    <motion.button
                                        className="hover:scale-[1.1] hover:bg-white hover:text-black duration-200 rounded-2xl sm:p-3 p-2"
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: false}}
                                        transition={{ duration: 0.5, delay: 0.1 }}>
                                        <LuGithub size={30} />
                                    </motion.button>
                                </StarBorder></a>

                            <a target='_blank' href="https://www.linkedin.com/in/prashantkumar00/">
                                <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                    <motion.button
                                        className="hover:scale-[1.1] duration-200 sm:p-3 p-2  rounded-2xl hover:bg-blue-600"
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: false}}
                                        transition={{ duration: 0.5, delay: 0.2 }}>
                                        <CiLinkedin size={30} />
                                    </motion.button>
                                </StarBorder>
                            </a>

                            <a target='_blank' href="https://www.instagram.com/Prashant_sah07">
                                <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                    <motion.button
                                        className="hover:scale-[1.1] duration-200 sm:p-3 p-2  rounded-2xl hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: false}}
                                        transition={{ duration: 0.5, delay: 0.3 }}>
                                        <AiOutlineInstagram size={30} />
                                    </motion.button>
                                </StarBorder>
                            </a>


                            <a target='_blank' href="https://wa.me/+919693217150">
                                <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                    <motion.button
                                        className="hover:scale-[1.1] duration-200 sm:p-3 p-2  rounded-2xl hover:bg-green-500"
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: false}}
                                        transition={{ duration: 0.5, delay: 0.4 }}>
                                        <FaWhatsapp size={30} />
                                    </motion.button>
                                </StarBorder>
                            </a>

                            <a target='_blank' href="mailto:prashantkumar855114@gmail.com">
                                <StarBorder as="div" className="custom-class" color="white" speed="5s">
                                    <motion.button
                                        className="hover:scale-[1.1] duration-200 sm:p-3 p-2  rounded-2xl hover:bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500"
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: false}}
                                        transition={{ duration: 0.5, delay: 0.5 }}>
                                        <IoMailOutline size={30} />
                                    </motion.button>
                                </StarBorder>
                            </a>
                        </div>

                        <div>
                            <StarBorder as="div" className="custom-class" color="red" speed="5s">
                                <a target="_blank" href={Resume}>
                                    <button className="relative overflow-hidden py-4 px-10 text-white rounded-lg group">
                                        {/* animated background */}
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 transform scale-0 origin-bottom-left transition-transform duration-500 group-hover:scale-100 rounded-3xl"
                                        />
                                        {/* button label */}
                                        <span className="relative z-10">GET CV</span>
                                    </button>
                                </a>
                            </StarBorder>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
