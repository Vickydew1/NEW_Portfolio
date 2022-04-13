import React from 'react';
import Chat from "../assests/Chat.jpg"
import Drum from "../assests/Drum.jpg"
import Tic from "../assests/Tic.jpg"
import Youtube from "../assests/Youtube.jpg"
import Portfolio from "../assests/Protfolio.jpg"
import realEstate from '../assests/aws.png'


const Work = () => {
  return (
    <div name="work" className=' w-full h-full md:h-full text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'> 
                    Project
                </p>
                <p className='py-6'>
                    Check Out some of my recent Work
                </p>
            </div>
{/* Container */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
{/* Grid Item */}
                <div style={{backgroundImage: `url(${Chat})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-center mx-auto content-div'>
                    {/* Hovwer */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Chat Application
                        </span>
                        <div>
                            <a href='https://chat-web-app-5350d.web.app/signin'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Demo</button>
                            </a>
                            <a href='https://github.com/Vickydew1/Chat-App.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Drum})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-center mx-auto content-div'>
                    {/* Hovwer */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Drum Kit Website
                        </span>
                        <div>
                            <a href='http://absent-popcorn.surge.sh/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Demo</button>
                            </a>
                            <a href='https://github.com/Vickydew1/Drum.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Tic})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-center mx-auto content-div'>
                    {/* Hovwer */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           Tic Tak Toe 
                        </span>
                        <div>
                            <a href='http://crooked-sizsadasdasdasdasaasde.surge.sh/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Demo</button>
                            </a>
                            <a href='https://github.com/Vickydew1/tictactoe.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Youtube})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-center mx-auto content-div'>
                    {/* Hovwer */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            YouTube Clone App
                        </span>
                        <div>
                            <a href='http://hysterical-mist.surge.sh/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Demo</button>
                            </a>
                            <a href='https://github.com/Vickydew1/YouTube_Clone.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Portfolio})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-center mx-auto content-div'>
                    {/* Hovwer */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Static Portfolio
                        </span>
                        <div>
                            <a href='http://vickydewangan.epizy.com/?i=1'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Demo</button>
                            </a>
                            <a href='https://github.com/Vickydew1/Portfolio.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-center mx-auto content-div'>
                    {/* Hovwer */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-white hover:bg-[#0a192f]'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
