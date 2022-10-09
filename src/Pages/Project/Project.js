import React from 'react';
import './Project.css';
import laptopStore1 from '../../Assets/img/porjects/laptop-store/laptop-store-1.png';
import laptopStore2 from '../../Assets/img/porjects/laptop-store/laptop-store-2.png';
import laptopStore3 from '../../Assets/img/porjects/laptop-store/laptop-store-3.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
library.add(fab)

const Project = () => {
    return (
        <div id='projects' className='project-bg'>
            <div className='container pt-3'>
                <h3 className='text-center pt-5 about-about-headline'>PROJECTS</h3>
                <p className='text-center mt-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                    in iste officiis commodi quidem hic quas.</p>

                <div className="card-deck">
                    <div className="card rounded border-0 mt-2">
                        {/* ----------- */}
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 rounded-top" src={laptopStore1} />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-top" src={laptopStore2} />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-top" src={laptopStore3} />
                                </div>
                            </div>
                        </div>
                        {/* ----------- */}
                        <div className="card-body project-project-dev">
                            <h5 className="card-title">Laptop Store</h5>
                            <p className="card-title ">Laptop Manufacturing Website</p>
                            <div className="card-text "><small>
                                <ul>
                                    <li>Laptop Store is a manufacture company warehouse.</li>
                                    <li>From here the products are delivered to the dealers.</li>
                                    <li>Many products are sold together from here.</li>
                                    <li>Retail products are not sold from here.</li>
                                </ul>
                            </small>
                            </div>
                        </div>
                        <div className="p-2 project-project-dev">
                            <small className="d-flex justify-content-end">
                                <button className='project-live-btn' ><FontAwesomeIcon icon={faEye} /> Live Preview</button>
                                <button className='project-live-btn'> <i className="fab fa-github"></i
                                > Client</button>
                                <button className='project-live-btn'> <i className="fab fa-github"></i
                                > Server</button>
                            </small>
                        </div>
                    </div>

                    <div className="card rounded border-0 mt-2">
                        {/* ----------- */}
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 rounded-top" src={laptopStore1} />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-top" src={laptopStore2} />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-top" src={laptopStore3} />
                                </div>
                            </div>
                        </div>
                        {/* ----------- */}
                        <div className="card-body project-project-dev">
                            <h5 className="card-title">Laptop Store</h5>
                            <p className="card-title ">Laptop Manufacturing Website</p>
                            <div className="card-text "><small>
                                <ul>
                                    <li>Laptop Store is a manufacture company warehouse.</li>
                                    <li>From here the products are delivered to the dealers.</li>
                                    <li>Many products are sold together from here.</li>
                                    <li>Retail products are not sold from here.</li>
                                </ul>
                            </small>
                            </div>
                        </div>
                        <div className="p-2 project-project-dev">
                            <small className="d-flex justify-content-end">
                                <button className='project-live-btn' ><FontAwesomeIcon icon={faEye} /> Live Preview</button>
                                <button className='project-live-btn'> <i className="fab fa-github"></i
                                > Client</button>
                                <button className='project-live-btn'> <i className="fab fa-github"></i
                                > Server</button>
                            </small>
                        </div>
                    </div>

                    <div className="card rounded border-0 mt-2">
                        {/* ----------- */}
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 rounded-top" src={laptopStore1} />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-top" src={laptopStore2} />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-top" src={laptopStore3} />
                                </div>
                            </div>
                        </div>
                        {/* ----------- */}
                        <div className="card-body project-project-dev">
                            <h5 className="card-title">Laptop Store</h5>
                            <p className="card-title ">Laptop Manufacturing Website</p>
                            <div className="card-text "><small>
                                <ul>
                                    <li>Laptop Store is a manufacture company warehouse.</li>
                                    <li>From here the products are delivered to the dealers.</li>
                                    <li>Many products are sold together from here.</li>
                                    <li>Retail products are not sold from here.</li>
                                </ul>
                            </small>
                            </div>
                        </div>
                        <div className="p-2 project-project-dev">
                            <small className="d-flex justify-content-end">
                                <button className='project-live-btn' ><FontAwesomeIcon icon={faEye} /> Live Preview</button>
                                <button className='project-live-btn'> <i className="fab fa-github"></i
                                > Client</button>
                                <button className='project-live-btn'> <i className="fab fa-github"></i
                                > Server</button>
                            </small>
                        </div>
                    </div>

                    {/* <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default Project;