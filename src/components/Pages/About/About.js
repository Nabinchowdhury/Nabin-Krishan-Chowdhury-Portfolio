import React from 'react';
import { FcAbout } from "react-icons/fc";
import aboutimg from "../../../images/about removebg-preview.png"
import aboutimgF from "../../../images/about-full-removebg-preview.png"
import aboutimgL from "../../../images/1.IMG_20200901_201042.jpg"
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = ({ about }) => {
    return (
        <div ref={about} className="py-20">
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold flex justify-center items-center'>About Me<FcAbout className='ml-3 text-white'></FcAbout></h3>

            <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-20 mx-10 md:mx-20 '>
                <div className='md:w-2/3 my-10'>

                    <img src={aboutimgL} alt="" className='rounded-3xl w-full h-full' />
                </div>

                <div className='md:ml-10 lg:mx-20 md:w-3/4'>
                    <p className='text-left lg:text-justify flex flex-col justify-center  w-full'><span className='text-2xl'>Hi There,</span>
                        <br />
                        <>
                            This is <span className='font-semibold'>NABIN KRISHAN CHOWDHURY.</span> I am a Full Stack Web Developer. I have completed my  B.Tech in Electronics and Communication from ADAMAS University, West Bengal, India. Currently I am in Bangladesh. I love to code and explore different kind of Computer Languages and Technologies. </><br /> <br />

                    </p>

                </div>
            </div>
            <p className='mx-10 lg:mx-20 inline'>
                I am also a Music loving person. Playing Guitar is my hobby. Beside coding, I am also passionate about Guitar. <br /> If you want, you can check me out here <a href="https://www.youtube.com/channel/UC59Z2ixk00FxWwdACFC_b9g" className='ml-1'><FaYoutube className='text-white text-2xl  inline'></FaYoutube></a> </p>
        </div>
    );
};

export default About;


{/* <Link to=""><FaYoutube className='text-white text-2xl  '></FaYoutube></Link> */ }