import React, { useState } from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Typical from "react-typical";
import Navbar from './Navbar';
import { Link } from "react-scroll";

const Home = () => {
 
  return (
    <div name="home" className='w-full h-screen  bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 text-2xl'>Hi, My name is </p>
            <h1 className='text-4xl sm:text-5xl font-bold text-[#e6e8f0] '>Vicky dewangan</h1>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#8892ba] '>
                I am <Typical 
                  steps={[
                    "Ethusiastic Dev🤩",
                    1000,
                    "Front-End Dev😋",
                    1000,
                    "MERN Stack Dev😎",
                    1000,
                    "Full-Stack Dev💯",
                    1000,
                    "React Dev📱",
                    1000,
                    "Python Programmer🐍",
                    1000,
                  ]}
                  loop={3}
                />
              </h2>
              <p className='text-[#8892ba] py-4 max-w-[700px]'>
                  I'm a full-stack developer specializing in building exceptional digital experience, Currently focused on learning new skills and sharpening other skills.
              </p>
              <div>
                  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                  <Link
            to="work"
            smooth={true}
            duration={500}
          >View Project</Link>
                  <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                    </span></button>
              </div>
        </div>
    </div>
  )
}

export default Home