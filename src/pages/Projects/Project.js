import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const navigate = useNavigate()
    
    return (
        <div>
            <div class="card bg-base-100 shadow-xl rounded-none">
                <figure><img src={project.images[0]} alt="project"/></figure>
                <div class="card-body gap-6">
                    <div className="flex justify-between items-center">
                        <h2 class="card-title">{project.title} </h2>
                        <div class="card-actions justify-end">
                            {
                                project.serverCode && <a target='_blank' rel="noreferrer" href={project.serverCode}><FontAwesomeIcon className='text-2xl mr-4' icon={faGithub}></FontAwesomeIcon></a>
                            }
                            <a target='_blank' rel="noreferrer" href={project.clientCode}><FontAwesomeIcon className='text-2xl mr-4' icon={faGithub}></FontAwesomeIcon></a>
                            <a target='_blank' rel="noreferrer" href={project.liveLink}><FontAwesomeIcon className='text-2xl' icon={faGlobe}></FontAwesomeIcon></a>
                        </div>    
                    </div>                            
                    <article title={project.description}>{project.description.slice(0,110)}...</article>
                    <button onClick={()=>navigate(`/details/${project._id}`)} class="btn bg-primary font-normal">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;