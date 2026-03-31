import React from 'react';

const Counter = () => {
    return (
        <div className='bg-[#4F39F6]'>

            <div className=' w-[80%] gap-10 md:w-[75%] mx-auto grid md:grid-cols-3 justify-center md:gap-4 py-10 my-5'>
                <div>
                    <h2 className='text-5xl text-white font-semibold '>50K+</h2>
                    <p className='text-white pt-5'>Active User</p>
                </div>      
                <div>
                    <h2 className='text-5xl text-white font-semibold '>200K+</h2>
                    <p className='text-white pt-5'>Premium Tools</p>
                </div>
                <div>
                    <h2 className='text-5xl text-white font-semibold '>4.9</h2>
                    <p className='text-white pt-5'>Rating</p>
                </div>

            </div>
            
        </div>
    );
};

export default Counter;