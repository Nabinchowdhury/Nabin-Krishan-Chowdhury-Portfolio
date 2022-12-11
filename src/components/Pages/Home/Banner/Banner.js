import React from 'react';
import NKC from "../../../../images/nabin.jpg"

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-evenly items-center my-20'>
            <div className='my-10 '>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold py-5'>Nabin Krishan Chowdhury</h1>
                <h3 className='text-xl sm:text-2xl lg:3xl font-bold'>MERN Stack Developer</h3>
                <button className='btn btn-primary my-10'><a
                    href="https://drive.google.com/file/d/1LWbldKQuCa8WjIBuZmcx2qWUGWUassQT/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a></button>
            </div>

            <div>
                <img src={NKC} alt="nabin" className='rounded-full' />
            </div>
        </div>
    );
};

export default Banner;