import React, { useEffect } from 'react';
import './HProjects.css';
import laptopStore1 from '../../Assets/img/porjects/laptop-store/laptop-store-1.png';
import laptopStore2 from '../../Assets/img/porjects/laptop-store/laptop-store-2.png';
import laptopStore3 from '../../Assets/img/porjects/laptop-store/laptop-store-3.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import UseProjects from '../../Hooks/UseProjects';
import Project from '../AllProjects/Project';
import { Link } from 'react-router-dom';
import Aos from 'aos';
library.add(fab)

const HProjects = () => {
    const [projects, setProjects] = UseProjects([]);
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div id='projects' className='project-bg'>
            <div className='container pt-3'>
                <h3 data-aos="flip-up" className='text-center pt-5 mt-5 about-about-headline'>PROJECTS</h3>
                <p data-aos="zoom-in" className='text-center mt-5 pt-3 pb-5'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                    in iste officiis commodi quidem hic quas.</p>

                <div class="row row-cols-1 row-cols-md-3 g-4 project-dev-bg">
                    {
                        projects.slice(0, 3).map(project => <Project key={project._id} project={project} />)
                    }
                </div>
                <div data-aos="zoom-in-right" className='blogs-see-all-btn mt-3'>
                    <Link to='/allprojects'>
                        <button >
                            See All Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HProjects;