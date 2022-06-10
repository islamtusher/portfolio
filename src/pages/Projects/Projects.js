import React from 'react';
import useProjects from '../../hooks/useProjects';
import Project from './Project';

const Projects = () => {
    const projects = useProjects()
    return (
        <div id='projects'>
            <h1 className='mt-12 text-[40px] text-primary text-center font-bold'>MY PROJECTS</h1>
            <h1 className='mb-12 text-[18px] text-gray-600 text-center '>THOSE I HAVE DONE SUCCESSFULLY</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-12 lg:px-12 px-4">
                {
                    projects.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;