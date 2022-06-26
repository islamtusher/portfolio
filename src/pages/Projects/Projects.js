import React from 'react';
import useProjects from '../../hooks/useProjects';
import Project from './Project';

const Projects = () => {
    const projects = useProjects()
    // "image": "https://i.ibb.co/PW8FmrC/p3.jpg",
    // "image": "https://i.ibb.co/frj69dM/p2.jpg",
    // "image": "https://i.ibb.co/vHp60kx/p1.jpg",
    console.log(projects);
    return (
        <div id='projects' className=" py-8 flex items-center justify-center bg-[#191919]">
            <div  className=' '>
                <h1 id='title' className='section-title  text-center '>My Latest Projects</h1>
                <h1 className='mb-12 text-[15px] subtitle text-center '>WORK I HAVE DONE </h1>
                <div className="grid max-w-[1428px] mx-auto grid-cols-1 lg:grid-cols-3 justify-items-center gap-12 lg:px-12 px-4">
                    {
                        projects?.map(project => <Project key={project._id} project={project}></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;