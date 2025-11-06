

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
        <div className=' bg-cover bg-centert  bg-[url(https://images.unsplash.com/photo-1539038501956-e6ec02c504ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600)] h-screen pt-8  flex justify-between flex-col  w-full bg-red-700'>
        <img className='w-16  ml-8'  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-4xl font-bold'>Get Started with Uber </h2>
                    <Link to= "/login" className='flex item-center justify-center    w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
                </div>
        </div>
        </div>
    );
}   
export default Home;