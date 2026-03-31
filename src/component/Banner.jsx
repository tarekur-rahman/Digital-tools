import React from 'react';

import { CiPlay1 } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';


const Banner = () => {
    return (
        <div className=' flex-col  w-[80%] md:w-[75%] mx-auto flex md:flex-row   justify-between items-center gap-9 my-20 '>
            <div className="content space-y-7">
                <div className='md:w-[40%]'><p className='bg-blue-100 py-1 rounded-2xl px-3 text-blue-700 flex items-center gap-1'><GoDotFill/> New Ai Powerd Tools Available</p></div>
                <h1 className=' text-3xl leading-10 md:text-6xl font-semibold md:leading-18 text-[#101727]'>Supercharge Your <br /> Digital Workflow</h1>
                <p className=' md:w-[70%]'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today. Explore Products </p>
                <div className=" flex items-center gap-4">
                    <button className='btn bg-blue-700 rounded-2xl text-white'>Explore Products<FaArrowRightLong /></button>
                    <button className='btn btn-outline rounded-2xl border-blue-700 text-blue-700'> <CiPlay1 />Watch Demo</button>
                </div>
            </div>
            <div className="img shadow-2xl "> <img  src="/public/banner.png" alt="" /></div>
        </div>
    );
};

export default Banner;