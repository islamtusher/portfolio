import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faLocationDot, faMobile, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className=" bg-[#111] text-gray-300 py-6">
            <div className="max-w-[1428px] mx-auto px-12">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-6'>
                    <div className="order-last lg:order-1 flex flex-col items-center lg:items-start justify-center"> 
                        <div className="">
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon className='text-[22px] text-gray-300  pr-4' icon={faGoogle} />
                            <h1 className=''>tusher26997@gmail.com</h1>
                        </div>
                        <div className=" flex items-center">
                            <FontAwesomeIcon className='text-[22px] text-gray-300  pr-4' icon={faPhoneAlt} />
                            <h1 className=''>01643613878</h1>
                        </div>
                        </div>
                    </div>
                    <div className="text-center lg:order-2">
                        <FontAwesomeIcon className='text-[18px] border hover:text-primary rounded-full p-3 text-gray-300 cursor-pointer ' icon={faHome} />
                        <FontAwesomeIcon className='text-[18px] border mx-3 hover:text-primary rounded-full p-3 text-gray-300 cursor-pointer ' icon={faLinkedin} />
                        <FontAwesomeIcon className='text-[18px] border hover:text-primary rounded-full p-3 text-gray-300 cursor-pointer ' icon={faGithub} />
                    </div>
                    <div className="flex flex-row justify-center lg:justify-end lg:order-3">
                        <div className="flex items-center">
                            <h1>Dhaka, Bangladesh</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;