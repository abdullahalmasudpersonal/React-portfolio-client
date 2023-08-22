import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import { fab } from '@fortawesome/free-brands-svg-icons'; */
import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../Assets/img/Profile/profile-img.jpg';
import './About.css';
import MovingComponent from 'react-moving-text';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)



const About = () => {
    return (
        <div id='about' className='about-bg'>
            <div className='container pt-3'>
                <h3 className='text-center pt-5 about-about-headline'>ABOUT</h3>

                <p className='about-about-info pt-5 m-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <div className="row">
                    <div className="col-md-4 mt-3">
                        <MovingComponent
                            type="fadeInFromLeft"
                            duration="1000ms"
                            delay="0s"
                            direction="normal"
                            timing="linear"
                            iteration="1"
                            fillMode="none">
                            <img className='img-fluid rounded mx-auto' src={profileImg} alt='Abullah al masud' />
                        </MovingComponent>

                    </div>
                    <div className="col-md-8 mt-3">
                        <div className="">
                            <MovingComponent
                                type="fadeInFromRight"
                                duration="1000ms"
                                delay="0s"
                                direction="normal"
                                timing="linear"
                                iteration="1"
                                fillMode="none">
                                <h4>Full Stack Developer & Web Desiginer</h4>
                                <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="">
                                            <ul className='ps-0' style={{ listStyleType: 'none' }}>
                                                <li className='mt-3'> <FontAwesomeIcon icon={faChevronRight} /> &nbsp; <strong>Birthday:</strong> <span> July 2000</span></li>
                                                <li className='mt-3'> <FontAwesomeIcon icon={faChevronRight} /> &#160; <strong>Website:</strong> <span><Link className='text-decoration-none text-white'
                                                    href="https://abdullahalmasud.netlify.app/"
                                                    target="_blank">abdullahalmasud.netlify.app</Link></span></li>
                                                <li className='mt-3'> <FontAwesomeIcon icon={faChevronRight} /> &#160; <strong>Phone:</strong> <span>+880 1726457771</span></li>
                                                <li className='mt-3'> <FontAwesomeIcon icon={faChevronRight} /> &#160; <strong>City:</strong> <span>Dhaka, Bangladesh</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="">
                                            <ul className='ps-0' style={{ listStyleType: 'none' }}>
                                                <li className='mt-3'> <FontAwesomeIcon icon={faChevronRight} /> &nbsp; <strong>Age:</strong> <span>24 Years</span></li>
                                                <li className='mt-3'> <FontAwesomeIcon icon={faChevronRight} /> &#160; <strong>Degree:</strong> <span>Honors (Runnig)</span></li>
                                                <li className='mt-3'> <FontAwesomeIcon icon={faChevronRight} /> &#160; <strong>Email:</strong> <span>abdullahalmasud772@gmail.com</span></li>
                                                <li className='mt-3'> <FontAwesomeIcon icon={faChevronRight} /> &#160; <strong>Freelance:</strong> <span>Available</span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p className='pt-2'>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                            </MovingComponent>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;