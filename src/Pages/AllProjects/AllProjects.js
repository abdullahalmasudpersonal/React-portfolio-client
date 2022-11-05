import React from 'react';
import UseProjects from '../../Hooks/UseProjects';
import Project from './Project';
import './Project.css';

const AllProjects = () => {
    const [projects, setProjects] = UseProjects([]);

    return (
        <div className='allproject-bg py-5'>
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                     {
                        projects.map(project =><Project key={project._id} project={project} />)
                    } 
                </div>
            </div>
        </div>
    );
};

export default AllProjects;