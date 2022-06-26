
import React from 'react';
import './About.css'
import Aos from 'aos';
import { HashLink } from 'react-router-hash-link';

const About = () => {
    Aos.init({
        duration: 600
    });
    return (
        <div id='about' class=" flex items-center bg-[#111] w-full min-h-[100vh] py-16 font-[Poppins]">
            <div class="w-full lg:w-[1000px] mx-auto ">
                <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6 px-4 lg:px-0 ">
                    <div data-aos="fade-left" class="order-last flex flex-col gap-6 text-white">
                        <h1 class="section-title ">About Me</h1>
                        <article>
                            I am a Full-Stack Developer. I enjoy creating Responsive applications, in addition, to being user-friendly and developing that backend aspect as well. I have already done a few front-end and full-stack projects and also I am trying to optimize better 
                        </article>
                        <div className="">
                            <HashLink smooth to='/home#projects'>
                                <button className='common-btn mr-6'>MY PROJECTs</button>
                            </HashLink>
                            <HashLink smooth to='/home#contact'>
                                <button className='common-btn'>Contact</button>
                            </HashLink>
                        </div>
                    </div>
                    <div data-aos="fade-right" class="card w-full lg:max-w-sm py-16 px-3 profile-card rounded-none font-normal">
                        <div class="card-body z-10">
                            <div className="text-white">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
                                
                                