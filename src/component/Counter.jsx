import React from 'react';

const Counter = () => {
    return (
        <div className='bg-[#4F39F6]'>

            <div className=' w-[80%] flex  flex-col items-center justify-center gap-10   md:w-[75%] mx-auto md:flex-row md:justify-between  py-5 my-5'>
                <div className='w-[30%] text-center'>
                    <h2 className='text-5xl text-white font-semibold '>50K+</h2>
                    <p className='text-white pt-5'>Active User</p>
                </div>      
                <div className='text-center w-[40%] border-[1px] border-y-gray-300 py-8 border-x-0 md:border-[1px] md:border-y-0 md:border-x-gray-300 '>
                    <h2 className='text-5xl text-white font-semibold '>200K+</h2>
                    <p className='text-white pt-5'>Premium Tools</p>
                </div>
                <div className='w-[30%] text-center'>
                    <h2 className='text-5xl text-white font-semibold '>4.9</h2>
                    <p className='text-white pt-5'>Rating</p>
                </div>

            </div>
            
        </div>
    );
};

export default Counter;