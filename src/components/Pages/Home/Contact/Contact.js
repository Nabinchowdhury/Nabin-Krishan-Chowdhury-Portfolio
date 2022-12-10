import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row jus">


                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Contact Me!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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