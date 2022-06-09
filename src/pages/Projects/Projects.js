import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Projects = () => {
    // const navigate = useNavigate()
    return (
        <div id='projects'>
            <h1 className='mt-12 text-[40px] text-primary text-center font-bold'>MY PROJECTS</h1>
            <h1 className='mb-12 text-[18px] text-gray-600 text-center '>THOSE I HAVE DONE SUCCESSFULLY</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-12 lg:px-12 px-4">
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="./images/p1.jpg" alt="project" /></figure>
                    <div class="card-body gap-6">
                        <h2 class="card-title">
                            Auto Manufecture 
                            <div class="badge bg-primary font-normal">Details</div>
                        </h2>
                        <p>Designed Fully Responsive Car Manufacture Site, The Auto-Manufec company manufacture many kinds of Car parts.</p>
                        <div class="card-actions justify-end">
                            <FontAwesomeIcon className='text-2xl mr-4' icon={faGithub}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-2xl' icon={faGlobe}></FontAwesomeIcon>
                            
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="./images/p2.jpg" alt="project" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Car WareHousing
                            <div class="badge bg-primary font-normal">Details</div>
                        </h2>
                        <p>This is a ware housing type web site, Applied authentication and authorization with firebase</p>
                        <div class="card-actions justify-end">
                            <FontAwesomeIcon className='text-2xl mr-4' icon={faGithub}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-2xl' icon={faGlobe}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="./images/p3.jpg" alt="project" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Hire Travel Guide
                            <div class="badge bg-primary font-normal">Details</div>
                        </h2>
                        <p>Booking A Travel package with a experienced Guide, Who Provide All types of Travel services </p>
                        <div class="card-actions justify-end">
                            <FontAwesomeIcon className='text-2xl mr-4' icon={faGithub}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-2xl ' icon={faGlobe}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;