import React, { use } from 'react';

const Card = ({ promiseCard, active }) => {
    const data = use(promiseCard);

    if (active === "cart") {
        return (
            <div className="flex justify-center items-center py-32">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
                    Select your products
                </h2>
            </div>
        );
    }

    return (
        <div className='w-[80%] md:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            {data.map((card) => (
                <div key={card.id} className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full relative max-w-sm'>
                    <div className='flex justify-between items-start mb-6'>
                        <div className='bg-gray-50 p-3 rounded-2xl'>
                            <img src={card.icon} alt="icon" className='w-10 h-10 object-contain' />
                        </div>
                        <span className='px-4 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-600'>
                            {card.tag}
                        </span>
                    </div>

                    <h3 className='text-2xl font-bold text-gray-900 mb-3'>{card.name}</h3>
                    <p className='text-gray-500 text-sm leading-relaxed mb-6 flex-grow'>
                        {card.description}
                    </p>

                    <div className='mb-6'>
                        <span className='text-3xl font-bold text-gray-900'>${card.price}</span>
                        <span className='text-gray-400 text-sm'>/Mo</span>
                    </div>

                    <ul className='space-y-4 mb-8'>
                        {card.features.map((feature, index) => (
                            <li key={index} className='flex items-center gap-3 text-gray-600 text-sm font-medium'>
                                <svg className='w-5 h-5 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M5 13l4 4L19 7' />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className='w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg'>
                        Buy Now
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Card; 