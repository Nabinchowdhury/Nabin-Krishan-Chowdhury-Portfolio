import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "./Projects.css"



const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProjects(data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='bg-base-200 py-20'>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>PROJECTS </h3>


            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                {
                    projects.sort((a, b) => b.id - a.id).map(project => {
                        return <SwiperSlide key={project.id}>
                            <div className="card w-full bg-white shadow-xl">
                                <figure className=''><img src={project.image} alt="projects" className='' /></figure>
                                <div className="card-body">
                                    <div>Technoogies</div>
                                    {/* <h2 className="card-title justify-center text-xl">{project.title}</h2> */}
                                    <p>{project.details.slice(0, 96) + " ..."}</p>
                                    <div className="card-actions justify-end mt-4">
                                        <button className="btn btn-primary btn-sm">See Details</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    })
                }



            </Swiper>


            <p>{`<<<`}  <span className='mx-5 text-md'> PLEASE SLIDE LEFT OR RIGHT TO VIEW ALL PROJECTS</span>{`>>>`}</p>
        </div>
    );
};

export default Projects;