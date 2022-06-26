import React from 'react';
import { useNavigate } from 'react-router';
import Aos from 'aos';

const Project = ({ project }) => {
    const navigate = useNavigate()
    Aos.init({
        duration: 600
    });
    return (
        <div data-aos="fade-up" >
            <div class="card rounded-none">
                <figure><img src={project.images[0]} alt="project"/></figure>
                <div class="card-body p-3 lg:p-5 lg:pb-0 gap-y-4">
                    <div className="flex flex-col items-center justify-between ">
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
                    <button onClick={()=>navigate(`/details/${project._id}`)} class="common-btn rounded-none mb-6">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;