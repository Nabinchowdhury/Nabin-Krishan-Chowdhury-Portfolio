import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoIosContacts, } from "react-icons/io";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Contact = ({ contact, setSpinner }) => {
    const form = useRef();

    const handleSendMessage = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_xytrv0f', "template_hl36c68", form.current, 'svtxtcXSwxpDDLpZS')
            .then((result) => {
                // console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className=' pb-20 pt-20' ref={contact} >
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold flex justify-center items-center'>Contact <IoIosContacts className='ml-3'></IoIosContacts></h3>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row ">


                    <div className="text-center lg:text-left lg:w-50 flex flex-col justify-center items-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-3xl text-center font-bold">Reach Me Out!</h1>
                        <p className="py-6 text-center">Hi! How can I help you? If you want to contact me, please type your Name, Email and Message here. Ask me anything.  I'll email you back then.
                            Feel free to contact me! <br /> Thank You.</p>
                        <p className="py-6 "> OR </p>
                        <div className='grid grid-flow-col gap-5'>
                            <a href="https://www.linkedin.com/in/nabin-krishan-chowdhury-88a406235/"><FaLinkedinIn className='text-white text-2xl sm:text-3xl cursor-pointer'></FaLinkedinIn></a>
                            <a href="https://github.com/Nabinchowdhury"><FaGithub className='text-white text-2xl sm:text-3xl cursor-pointer'>
                            </FaGithub ></a>
                            <a href="https://www.facebook.com/nabin.ron/"><FaFacebookF className='text-white text-2xl sm:text-3xl cursor-pointer'></FaFacebookF></a>
                            <a href="https://www.youtube.com/channel/UC59Z2ixk00FxWwdACFC_b9g"><FaYoutube className='text-white text-2xl sm:text-3xl cursor-pointer'></FaYoutube></a>
                            <a href="https://twitter.com/NK_Chowdhury1"><FaTwitter className='text-white text-2xl sm:text-3xl cursor-pointer'></FaTwitter></a>

                        </div>
                    </div>



                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl border">
                        <form ref={form} onSubmit={handleSendMessage} className="card-body" >


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='sender_name' placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="sender_email" placeholder="Enter Your Email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea type="text" name="sender_message" placeholder="Write your message" className="input input-bordered h-32" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn pbutton font-bold ">Send</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            {setSpinner(false)}
        </div >
    );
};

export default Contact;