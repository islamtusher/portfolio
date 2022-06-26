import { faBootstrap, faCss3, faGithub, faHtml5, faJs, faJsfiddle, faJsSquare, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Skills = () => {
    Aos.init({
        duration: 600
    });
    return (
        <div  className="">
            <div  id='skills' className="bg-[#191919] py-20 font-[Montserrat]">
                <div className="text-gray-100 tracking-wider text-center mb-8">
                    <h1 className=' section-title'>My Skills</h1>
                    <p className='text-gray-300 tracking-wider'>
                        I have done a few projects, and code with my experienced in technologies
                        <FontAwesomeIcon className='ml-2 text-gray-500' icon={faArrowRight}></FontAwesomeIcon>
                        <HashLink smooth to='/home#projects' className='text-primary'> Projects</HashLink>
                    </p>
                </div>
                <div data-aos="zoom-in" className='lg:w-[60%] max-w-[1300px] lg:p-0 mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-y-8 justify-center items-center lg:items-end px-4 lg:px-0'>
                    <div className="flex flex-col items-center gap-2">
                        <img className='w-[50px]' src="./images/skills/skill-2.png" alt='' />
                        <p  className=' text-lg text-gray-100  tracking-wider'>HTML</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img className='w-[50px]' src="./images/skills/skill-3.png" alt='' />
                        <p className=' text-lg text-gray-100 tracking-wider'>CSS</p>    
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                        <img className='w-[60px]' src="./images/skills/skill-6.png" alt='' />
                        <p className=' text-lg text-gray-100 tracking-wider'>Bootstrap </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img className='w-[90px]' src="./images/skills/skill-8.png" alt='' />
                        <p className=' text-lg text-gray-100 tracking-wider'>Tailwind </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img className='w-[50px]' src="./images/skills/skill-7.png" alt='' />
                        <p  className=' text-lg text-gray-100 tracking-wider'> Javascript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img className='w-[50px]' src="./images/skills/skill-5.png" alt='' />
                        <p  className=' text-lg text-gray-100 tracking-wider'>Reactjs</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                        <img className='w-[50px] text-gray-500' src="./images/mongodb.svg" alt='' />
                        <p  className=' text-lg text-gray-100 tracking-wider'>MongoDB</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <FontAwesomeIcon icon={faNodeJs} className='text-green-600 text-[50px]'></FontAwesomeIcon>
                        <p  className=' text-lg text-gray-100 tracking-wider'>Nodejs</p>
                    </div>
                    
                        {/* <FontAwesomeIcon icon={faHtml5} className='text-white text-[65px]'></FontAwesomeIcon>
                        </div>
                        <FontAwesomeIcon icon={faCss3} className='text-white text-[65px]'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faJs} className='text-white text-[65px]'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faReact} className='text-white text-[65px]'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faBootstrap} className='text-white text-[65px]'></FontAwesomeIcon> */}
                </div>
            </div>

        </div>
        
    );
};

export default Skills;