import React from 'react';
import useProjects from '../../hooks/useProjects';
import Project from './Project';

const Projects = () => {
    const projects = useProjects()
    return (
        <div id='projects' className='py-12  bg-[#191919]'>
            <h1 id='title' className='section-title  text-center '>My Latest Projects</h1>
            <h1 className='mb-12 text-[15px] subtitle text-center '>WORK I HAVE DONE </h1>
            <div className="grid max-w-[1428px] mx-auto grid-cols-1 lg:grid-cols-3 justify-items-center gap-12 lg:px-12 px-4">
                {
                    projects.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;