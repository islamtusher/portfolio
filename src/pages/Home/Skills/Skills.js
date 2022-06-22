import { faBootstrap, faCss3, faGithub, faHtml5, faJs, faJsfiddle, faJsSquare, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Skills = () => {
    return (
        <div className="bg-[#191919] py-28">
            <div className='w-2/3 mx-auto flex flex-col lg:flex-row gap-12 justify-center items-center'>
                <div className="flex flex-col items-center">
                    <img className='w-[65px]' src="./images/skills/skill-2.png" alt='' />
                    <p  className='text-white'>HTML</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className='w-[65px]' src="./images/skills/skill-3.png" alt='' />
                    <p className='text-white'>CSS</p>    
                </div>
                
                <div className="flex flex-col items-center">
                    <img className='w-[65px]' src="./images/skills/skill-6.png" alt='' />
                    <p className='text-white'>Bootstrap </p>
                </div>
                <div className="flex flex-col items-center">
                    <img className='w-[60px]' src="./images/skills/skill-7.png" alt='' />
                    <p  className='text-white'> Javascript</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className='w-[65px]' src="./images/skills/skill-5.png" alt='' />
                    <p  className='text-white'>React</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <img className='w-[65px] text-gray-500' src="./images/mongodb.svg" alt='' />
                    <p  className='text-white'>MongoDB</p>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faNodeJs} className='text-green-600 text-[65px]'></FontAwesomeIcon>
                    <p  className='text-white'>Node js</p>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faGithub} className='text-white text-[65px]'></FontAwesomeIcon>
                    <p  className='text-white'>Github</p>
                </div>
                
                    {/* <FontAwesomeIcon icon={faHtml5} className='text-white text-[65px]'></FontAwesomeIcon>
                    </div>
                    <FontAwesomeIcon icon={faCss3} className='text-white text-[65px]'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faJs} className='text-white text-[65px]'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faReact} className='text-white text-[65px]'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faBootstrap} className='text-white text-[65px]'></FontAwesomeIcon> */}
            </div>
        </div>
        
    );
};

export default Skills;