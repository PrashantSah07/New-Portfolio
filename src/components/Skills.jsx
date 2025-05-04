import React from 'react'
import skills from '../assets/skills.png'
import RollingGallery from '../components/RollingGallery'
import bulb from '../assets/bulb.png'

const Skills = () => {
    return (
        <div id='skills' className='text-white max-w-[2000px] mx-auto xl:px-27 lg:px-15 px-5 my-35'>
            <div className='flex flex-col gap-20'>
                <h1 className='text-4xl font-bold text-blue-500 flex items-center gap-3'>Skills <img className='w-[50px]' src={bulb} alt="" /></h1>
                <div className='flex flex-col gap-20 justify-center items-center'>
                    <RollingGallery autoplay={true} pauseOnHover={true} />
                    <img src={skills} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skills
