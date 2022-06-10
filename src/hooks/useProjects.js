import { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://islamtusher.github.io/portfolio-fatchable-api/projects.json')
        .then(res => res.json())
            .then(data => {
                setProjects(data)
                console.log(data)
        })
    }, [])

    
    return projects
};

export default useProjects;