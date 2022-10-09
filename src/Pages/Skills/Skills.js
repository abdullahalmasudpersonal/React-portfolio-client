import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className='counter-bg'>
            <div className='container pt-3'>
                <h3 className='text-center pt-5 mb-0 numbers-numbers-headline'>SKILLS</h3>

                <section className="progress-section">
                    <div className="container">
                        <div className="row ">

                            <div className="col-lg-3 mt-5">
                                <div className="progress-bars">
                                    <h2 className='text-dark'>90%</h2>
                                </div>
                                <h4 className='mt-5'>HTML</h4>
                            </div>

                            <div className="col-lg-3 mt-5">
                                <div className="progress-bars-four">
                                    <h2 className='text-dark'>90%</h2>
                                </div>
                                <h4 className='mt-5'>CSS</h4>
                            </div>

                            <div className="col-lg-3 mt-5">
                                <div className="progress-bars-six">
                                    <h2 className='text-dark'>65%</h2>
                                </div>
                                <h4 className='mt-5'>JAVASCRIPT</h4>
                            </div>


                            <div className="col-lg-3 mt-5">
                                <div className="progress-bars-seven">
                                    <h2 className='text-dark'>70%</h2>
                                </div>
                                <h4 className='mt-5'>REACT</h4>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Skills;