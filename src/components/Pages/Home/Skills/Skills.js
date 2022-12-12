import React from 'react';
import ReactJs from "../../../../images/icons/react.png"
import JavaScript from "../../../../images/icons/JavaScript.png"
import Tailwind from "../../../../images/icons/tailwind.png"
import Bootstrap from "../../../../images/icons/Bootsrap.png"
import Firebase from "../../../../images/icons/Firebase.png"
import MongoDB from "../../../../images/icons/MongoDB.png"
import Express from "../../../../images/icons/express.png"
import NodeJS from "../../../../images/icons/node.png"
import CSS from "../../../../images/icons/css.png"
import HTML from "../../../../images/icons/HTML.png"
import { GiSkills } from "react-icons/gi";


const Skills = () => {
    return (
        <div className='mx-5 lg:mx-20 flex flex-col items-center my-20'>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold flex justify-center items-center mb-20'>Skills<GiSkills className='ml-3 text-white'></GiSkills></h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto '>
                <div className='flex justify-center items-center sm:mx-10'>
                    <img src={ReactJs} alt="" />
                    <progress className="progress progress-info w-44 border mx-5" value="80" max="100"></progress>
                    <p className='font-bold text-white text-xl'>80%</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={JavaScript} alt="" />
                    <progress className="progress progress-info w-44 border mx-5" value="75" max="100"></progress>
                    <p className='font-bold text-white text-xl'>75%</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={CSS} alt="" />
                    <progress className="progress progress-info w-44 border mx-5" value="65" max="100"></progress>
                    <p className='font-bold text-white text-xl'>65%</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={Tailwind} alt="" />
                    <progress className="progress progress-info w-44 border mx-5" value="85" max="100"></progress>
                    <p className='font-bold text-white text-xl'>85%</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={Bootstrap} alt="" />
                    <progress className="progress progress-info w-44 border mx-5" value="80" max="100"></progress>
                    <p className='font-bold text-white text-xl'>80%</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={HTML} alt="" />
                    <progress className="progress progress-info w-44 border mx-5" value="90" max="100"></progress>
                    <p className='font-bold text-white text-xl'>90%</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={Express} alt="" />
                    <progress className="progress progress-info w-44 border mx-5" value="85" max="100"></progress>
                    <p className='font-bold text-white text-xl'>85%</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={NodeJS} alt="" />
                    <progress className="progress progress-info w-44 border mx-5" value="35" max="100"></progress>
                    <p className='font-bold text-white text-xl'>35%</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={MongoDB} alt="" />
                    <progress className="progress progress-info w-44 border mx-5" value="70" max="100"></progress>
                    <p className='font-bold text-white text-xl'>70%</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={Firebase} alt="" />
                    <progress className="progress progress-info w-44 border mx-5" value="85" max="100"></progress>
                    <p className='font-bold text-white text-xl'>85%</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;