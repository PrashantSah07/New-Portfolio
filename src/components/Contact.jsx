import React from 'react'
import Aurora from '../components/Aurora';
import StarBorder from '../components/StarBorder'
import { motion } from 'framer-motion'
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
    return (
        <div id='contact' className='text-white max-w-[2000px] mx-auto xl:px-27 lg:px-15 flex flex-col gap-20 sm:pb-20 pb-10 overflow-hidden'>
            <h1 className='text-4xl font-bold text-blue-500 pl-5 lg:pl-0'>Contact</h1>
            <div className='relative flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center absolute top-10 z-10'>
                    <form action="https://formspree.io/f/xvgzlzbj" method="POST" className='flex flex-col bg-[#110a1cb8] justify-center items-center p-5  py-10 gap-4 rounded-4xl lg:max-w-[900px] max-w-[95%] xl:mx-0 sm:mx-10 mx-5' onSubmit={function (e) {
                        e.target.reset();
                    }}>
                        <div className='flex sm:max-w-[80%] max-w-[95%] justify-center items-start'>
                            <div className=''>
                                <motion.input className='rounded-[8px] border-[#986dff] px-5 py-3 lg:w-[90%] w-full border-b-1 focus:outline-none' type="text" name='Name' placeholder='Your Name' required
                                    initial={{ x: 70, y: 20, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: 0.1 }} />
                                <motion.input className='rounded-[8px] border-[#986dff] px-5 py-3 lg:w-[90%] w-full border-b-1 focus:outline-none' type="email" name='Email' placeholder='Email Address' required
                                    initial={{ x: 70, y: 20, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: 0.2 }} />
                                <motion.input className='rounded-[8px] border-[#986dff] px-5 py-3 lg:w-[90%] w-full border-b-1 focus:outline-none' type="phone" name='Number' placeholder='Phone Number' required
                                    initial={{ x: 70, y: 20, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: 0.3 }} />
                                <motion.textarea className='rounded-[8px] border-[#986dff] px-5 py-3 lg:w-[90%] w-full border-b-1 focus:outline-none max-h-[80px]' type="message" name="Message" placeholder='How can i help you?' required
                                    initial={{ x: 70, y: 20, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: 0.4 }}></motion.textarea>
                            </div>
                            <div className='hidden lg:flex items-start flex-col gap-3 w-[40%] mt-5'>
                                <motion.div className='flex justify-center items-center gap-2'
                                    initial={{ x: 70, y: 20, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: 0.1 }}>
                                    <span><MdLocalPhone size={20} color='#966cfc' /></span>
                                    <div className='flex flex-col gap-0'>
                                        <span className='text-[12px] text-[#aba9ae]'>Phone</span>
                                        <span className='text-[12px] text-[#aba9ae]'>+91 9693217150</span>
                                    </div>
                                </motion.div>
                                <motion.div className='flex justify-center items-center gap-2'
                                    initial={{ x: 70, y: 20, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: 0.2 }}>
                                    <span><HiOutlineMail size={20} color='#966cfc' /></span>
                                    <div className='flex flex-col gap-0'>
                                        <span className='text-[12px] text-[#aba9ae]'>Email</span>
                                        <span className='text-[12px] text-[#aba9ae]'>prashantkumar855114@gmail.com</span>
                                    </div>
                                </motion.div>
                                <motion.div className='flex justify-center items-center gap-2'
                                    initial={{ x: 70, y: 20, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: 0.3 }}>
                                    <span><GrLocation size={20} color='#966cfc' /></span>
                                    <div className='flex flex-col gap-0'>
                                        <span className='text-[12px] text-[#aba9ae]'>Location</span>
                                        <span className='text-[12px] text-[#aba9ae]'>Bhopal, Madhya Pradesh, IND</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <StarBorder as="button" className="custom-class sm:w-[80%] w-[95%] mt-5 group" color="white" speed="5s">
                            <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
                            <input className='px-7 py-3 w-full rounded-lg relative z-10' type="submit" value="SEND" />
                            <span
                                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 transform scale-0 origin-bottom-left transition-transform duration-500 group-hover:scale-100 rounded-3xl"
                            />
                        </StarBorder>
                    </form>
                </div>
                <div className='rounded-4xl h-120 rotate-180 w-full'>
                    <Aurora
                        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                        blend={0.5}
                        amplitude={1.0}
                        speed={1}
                        style={{ border: '2px solid white' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact
