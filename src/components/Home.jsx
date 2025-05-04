import React from 'react'
import Particles from '../components/Particles';
import RotatingText from '../components/RotatingText'
import image from '../assets/img.png'
import Gradient from '../assets/Gradient.png'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <>
            <div style={{ width: '100%', position: 'relative', }} className='bg-black max-w-[2000px] mx-auto lg:h-[700px] sm:h-[1100px] h-[950px] overflow-hidden'>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.05}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
                <div className='absolute top-20 my-10 font-bold text-blue-500 flex flex-col xl:px-25 lg:px-15 px-5 w-[100%] '>
                    <div className='flex lg:flex-row flex-col-reverse lg:gap-30 items-center lg:justify-between lg:items-start'>
                        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }} className='sm:-mt-0 -mt-10'>
                            <h1 className='xl:text-[85px] md:text-[70px] sm:text-[60px] text-[50px] md:leading-25 leading-20'>Hi There!</h1>
                            <h1 className='xl:text-[85px] md:text-[70px] sm:text-[60px] text-[50px] md:leading-25 leading-20'>i'm <span className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>Prashant Sah</span></h1>
                            <div className='w-fit text-5xl mt-8'>
                                <RotatingText
                                    texts={['MERN Stack Developer', 'Website Designer', 'Passionate Programmer', 'Creative Coder']}
                                    mainClassName="px-6 py-3 bg-gradient-to-r from-black to-[#16015b] text-white text-center font-semibold rounded-full shadow-lg tracking-wide xl:text-5xl md:text-4xl text-[28px]"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden"
                                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                    rotationInterval={3000}
                                />
                            </div>
                        </motion.div>
                        <motion.div style={{ backgroundImage: `url(${Gradient})`, backgroundSize: 'cover' }} className='xl:max-w-[450px] max-w-[95%] lg:h-[500px] flex justify-center items-center relative -top-25 sm:pb-0 pb-10' initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}>
                            <img className='w-[600px]' src={image} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
