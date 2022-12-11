import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ contact }) => {
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
        <div className='bg-base-200 py-20' ref={contact} >
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Contact </h3>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row ">


                    <div className="text-center lg:text-left lg:w-50">
                        <h1 className="text-2xl sm:text-3xl lg:text-3xl text-center font-bold">Reach Me Out!</h1>
                        <p className="py-6">Hi! How can I help you? If you want to contact me, please type your Name, Email and Message here. Ask me anything. I'll email you back then. Feel free to contact me! Thank You.</p>
                    </div>



                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
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
                                <button className="btn btn-primary">Send</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;