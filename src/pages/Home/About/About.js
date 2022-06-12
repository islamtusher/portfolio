import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './About.css'

const About = () => {
    return (
        <div id='about' class=" flex items-center bg-[#111] min-h-[100vh] py-16 font-[Poppins]">
            <div class="w-full lg:w-[1000px] mx-auto ">
                <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6 px-4 lg:px-0 ">
                    <div class="order-last flex flex-col gap-6 text-white">
                        <h1 class="text-5xl font-bold ">About Me</h1>
                        <article>
                            I am a Full-Stack Developer. I enjoy creating Responsive applications, in addition, to being user-friendly and developing that backend aspect as well. I have already done a few front-end and full-stack projects and also I am trying to optimize better 
                        </article>
                        <div className="">
                            <HashLink smooth to='/home#projects'>
                                <button className='btn bg-transparent border text-lg font-normal px-5 mr-5'>MY PROJECT</button>
                            </HashLink>
                            <button className='btn bg-transparent border text-lg font-normal px-5 '>MY SKILLS</button>
                        </div>
                    </div>
                    <div class="card w-full lg:max-w-sm py-16 px-3 profile-card rounded-none font-normal">
                        <div class="card-body z-10">
                            <div className="text-white">
                                {/* 
                                <div className="flex flex-col gap-6">
                                    <h1>Education: BSc in Computeer Science</h1>
                                    <div className="">
                                        <FontAwesomeIcon className='text-[35px] py-0 text-white cursor-pointer' icon={faLocationDot}></FontAwesomeIcon>
                                        <h1>Dhaka</h1>
                                        <h1>Bangladesh</h1>
                                    </div>
                                    <div className="">
                                        <Link to=''>
                                            <FontAwesomeIcon
                                                className='text-[35px] py-0  text-white cursor-pointer'
                                                icon={faLinkedin}>
                                            </FontAwesomeIcon>
                                        </Link>
                                        <Link to=''>
                                            <FontAwesomeIcon
                                                className='text-[35px] py-0  text-white cursor-pointer'
                                                icon={faGithub}>
                                            </FontAwesomeIcon>
                                        </Link>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
                                
                                