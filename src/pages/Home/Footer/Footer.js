import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAnglesUp, faAngleUp, faArrowAltCircleRight, faArrowAltCircleUp, faArrowCircleUp, faArrowUp, faArrowUpFromBracket, faHome, faTriangleCircleSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="bg-[#191919] text-gray-300 py-6">
            <div className="max-w-[1428px] mx-auto px-12">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-6'>
                    <div className="order-last order-1 flex flex-col items-center lg:items-start justify-center"> 
                        <div className="">
                            <div className="flex items-center mb-2">
                                <HashLink smooth to='#home' class="">
                                    <img className='w-[45px]' src='./images/logo.png' alt='logo' />
                                </HashLink>
                                <p className=''>Rafiqul Islam Tusher</p>
                            </div>
                        <div className=" flex items-center">
                            
                        </div>
                        </div>
                    </div>
                    <div className="text-center order-2">
                        <HashLink smooth to='/home#home'>
                            <FontAwesomeIcon className='text-[18px] border hover:text-primary rounded-full p-3 text-gray-300 cursor-pointer ' icon={faArrowAltCircleUp} />
                        </HashLink>
                        <a target='_blank' rel="noreferrer" href='https://github.com/islamtusher'>                        
                            <FontAwesomeIcon className='text-[18px]  mx-3  border hover:text-primary rounded-full p-3 text-gray-300 cursor-pointer ' icon={faGithub} />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/rafiqul-islam-tusher/'>
                            <FontAwesomeIcon className='text-[16px] border hover:text-primary rounded-full p-3 text-gray-300 cursor-pointer ' icon={faLinkedinIn} />
                        </a>
                    </div>
                    <div className="flex flex-row justify-center lg:justify-end order-3">
                        <div className="flex items-center">
                            <p>Copyright © 2022 Developed by Tusher</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;