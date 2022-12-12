import React, { useEffect, useState } from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import ReactJs from "../../../images/icons/react.png";
import JavaScript from "../../../images/icons/JavaScript.png"
import Tailwind from "../../../images/icons/tailwind.png"
import Bootstrap from "../../../images/icons/Bootsrap.png"
import Firebase from "../../../images/icons/Firebase.png"
import MongoDB from "../../../images/icons/MongoDB.png"
import Express from "../../../images/icons/express.png"
import NodeJS from "../../../images/icons/node.png"
import CSS from "../../../images/icons/css.png"




const ProjectDetails = () => {
    const [project, setProject] = useState(null)
    let details;
    if (project) {
        details = project.details.split(".")
        console.log(details);
    }
    const id = useLoaderData()

    useEffect(() => {
        fetch("projects.json")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(data => {
                // console.log(data)
                const selected = data.find(p => p.id === id)
                console.log(selected)
                setProject(selected)

            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            {
                project && <div className='my-20'>
                    <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center justify-center '>PROJECT DETAILS <AiOutlineFundProjectionScreen className=' ml-3'></AiOutlineFundProjectionScreen></h3>


                    <div className='grid grid-cols-1  md:grid-cols-5 mx-5 lg:w-11/12 lg:mx-auto md:gap-5 mt-10'>
                        <div className=' col-span-3 my-10' >
                            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold flex items-center justify-center '>{project.title} </h3>
                            <div className='text-left my-20 ml-5'>
                                {
                                    details.map((d, i) => <li key={i}> {d}.</li>)
                                }
                                <div className='my-10 text-left font-bold'>
                                    <a href={project.link}><button className='btn pbutton btn-sm ml-2'>Live Link</button></a>
                                    <a href={project.client_repo}><button className='btn pbutton btn-sm ml-2'>Client Repository</button></a>
                                    {project.server_repo && <a href={project.server_repo}><button className='btn pbutton btn-sm ml-2'>Server Repository</button></a>}
                                </div>
                            </div>
                            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold flex items-center justify-center mb-5'>Technology Used</h3>

                            {
                                project.technologies.map((t, i) => <button className=' m-2 btn btn-outline btn-warning'>{t}</button>)
                            }
                        </div>
                        <div className=' flex flex-col gap-5 mx-auto items-center col-span-2 '>
                            <img src={project.image[0]} alt="" className=' ' />
                            <img src={project.image[1]} alt="" className=' ' />
                            <img src={project.image[2]} alt="" className=' ' />

                        </div>
                    </div>
                </div>
            }
            <Footer></Footer>

        </div>
    );
};

export default ProjectDetails;