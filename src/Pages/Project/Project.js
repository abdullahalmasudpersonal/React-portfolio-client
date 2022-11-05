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
                <h3 className='text-center pt-5 mt-5 mb-5 about-about-headline'>PROJECTS</h3>
                <p className='text-center mt-5 pt-5'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                    in iste officiis commodi quidem hic quas.</p>

                <div class="row row-cols-1 row-cols-md-3 g-4 project-dev-bg">
                    <div class="col  ">
                        <div class=" h-100 project-dev-shadow">
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
                            {/* ------------------ */}
                            <div className=" project-project-dev">
                                <h5 className=" mt-3">Laptop Store</h5>
                                <p className=" ">Laptop Manufacturing Website</p>
                                <div className=""><small>
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
                                    <a href='https://laptop-stores.web.app/' target='_blank'>   <button className='project-live-btn' ><FontAwesomeIcon icon={faEye} /> Live Preview</button></a>
                                    <a href='https://github.com/abdullahalmasudpersonal/Laptop-Store-Client' target='_blank'><button className='project-live-btn'> <i className="fab fa-github"></i> Client</button></a>
                                    <a href='https://github.com/abdullahalmasudpersonal/laptop_store_server' target='_blank'><button className='project-live-btn'> <i className="fab fa-github"></i> Server</button></a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class=" h-100 project-dev-shadow">
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
                            {/* ------------------ */}
                            <div className=" project-project-dev">
                                <h5 className=" mt-3">Computer Accessories Warehouse</h5>
                                <p className=" ">Computer Accessories Warehouse Website</p>
                                <div className=""><small>
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
                                    <a href='https://computer-accessories-warehouse.web.app/' target='_blank'>   <button className='project-live-btn' ><FontAwesomeIcon icon={faEye} /> Live Preview</button></a>
                                    <a href='https://github.com/abdullahalmasudpersonal/Computer-Accessories-Warehouse-Client' target='_blank'><button className='project-live-btn'> <i className="fab fa-github"></i> Client</button></a>
                                    <a href='https://github.com/abdullahalmasudpersonal/Computer-Accessories-Warehouse-server' target='_blank'><button className='project-live-btn'> <i className="fab fa-github"></i> Server</button></a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class=" h-100 project-dev-shadow">
                            {/* ------------------ */}
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
                            {/* ------------------ */}
                            <div className=" project-project-dev">
                                <h5 className=" mt-3">Netcom</h5>
                                <p className=" ">Netcom Social Media Web Application</p>
                                <div className=""><small>
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
                                    <a href='https://netcom1.web.app/' target='_blank'>   <button className='project-live-btn' ><FontAwesomeIcon icon={faEye} /> Live Preview</button></a>
                                    <a href='https://github.com/abdullahalmasudpersonal/netcom-client' target='_blank'><button className='project-live-btn'> <i className="fab fa-github"></i> Client</button></a>
                                    <a href='https://github.com/abdullahalmasudpersonal/netcom-server' target='_blank'><button className='project-live-btn'> <i className="fab fa-github"></i> Server</button></a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;