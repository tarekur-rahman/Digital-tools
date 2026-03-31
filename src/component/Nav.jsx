import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Nav = () => {
    return (
        <div className='shadow'>

            <div className=' w-[80%] flex justify-between items-center md:w-[75%] mx-auto py-3 gap-4'>
                     <div className=" logo text-2xl font-bold text-blue-800"><h2>DigiTools</h2></div>

                    <div className="menu sm:block hidden">
                     <ul className='flex items-center gap-7'>
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    
                    </ul>
                    </div>
            

                <div className="cart-login-btn flex justify-center items-center gap-7">
                    <div className="cart"><span className=' text-xl '><AiOutlineShoppingCart /></span></div>
                    <a href="#" >Login</a>
                    <button className='btn bg-blue-700 rounded-2xl text-white'>Get Started</button>


                </div>
            </div>
            
        </div>
    );
};

export default Nav;