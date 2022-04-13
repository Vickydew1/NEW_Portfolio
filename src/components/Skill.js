import React from 'react';
import HTML from '../assests/html.png'
import CSS from '../assests/css.png'
import JavaScript from '../assests/javascript.png'
import react from '../assests/react.png'
import Firebase from '../assests/firebase.png'
import Github from '../assests/github.png'
import Tailwind from '../assests/tailwind.png'
import Mongo from '../assests/mongo.png'
import Node from '../assests/node.png'
import Python from '../assests/python.jpg'
import C from '../assests/c.png'

import Express from '../assests/Express.png'



const Skill = () => {
  return (
    <div name="skills" className='w-full h-full bg-[#0a192f]  text-gray-300 '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
            <div>
                <p className='text-4xl font-bold inline border-pink-600 border-b-4'>Skills</p>
                <p className='py-4 '>These are the technologies i've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={HTML} alt="HTML icon"/>
                    <p className='py-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={CSS} alt="CSS icon"/>
                    <p className='py-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon"/>
                    <p className='py-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={react} alt="react icon"/>
                    <p className='py-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={Firebase} alt="firebase icon"/>
                    <p className='py-4'>firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={Github} alt="Github icon"/>
                    <p className='py-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon"/>
                    <p className='py-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon"/>
                    <p className='py-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={Node} alt="Tailwind icon"/>
                    <p className='py-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 h-20 mx-auto" src={Express} alt="Tailwind icon"/>
                    <p className='py-4'>Express</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={Python} alt="Tailwind icon"/>
                    <p className='py-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'>
                    <img className="w-20 mx-auto" src={C} alt="C icon"/>
                    <p className='py-4'>C</p>
                </div>
               
               
            </div>
        </div>
    </div>
  )
}

export default Skill