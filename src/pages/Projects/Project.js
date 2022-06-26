import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Aos from 'aos';

const Project = ({ project }) => {
    const navigate = useNavigate()
    Aos.init({
        duration: 400
    });
    return (
        <div data-aos="zoom-out-down">
            <div class="card rounded-none">
                <figure><img src={project.images[0]} alt="project"/></figure>
                <div class="card-body p-3 lg:p-5 lg:pb-0 gap-y-4">
                    <div className="flex flex-col items-center justify-between ">
                        {/* <h2 class="card-title text-white">{project.title} </h2> */}
                        <div class="card-actions justify-center items-center mt-6 lg:mt-0">
                            <a className='hover:text-sky-400 text-primary font-bold' target='_blank' rel="noreferrer" href={project.clientCode}>
                                Client Code 
                            </a>
                            <p className=' text-primary text-xl'>|</p>
                            {
                                project.serverCode &&
                                <>
                                    <a className='hover:text-sky-400 text-primary font-bold' target='_blank' rel="noreferrer" href={project.serverCode}>
                                    Server Code
                                    </a>
                                    <p className=' text-primary text-xl'>|</p>
                                </>
                            }
                            <a className='hover:text-sky-400 text-primary font-bold' target='_blank' rel="noreferrer" href={project.liveLink}>
                                Demo
                            </a>
                        </div>    
                    </div> 
                </div>
                <div className="mt-4 text-center">
                    <button onClick={()=>navigate(`/details/${project._id}`)} class="common-btn rounded-none">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;