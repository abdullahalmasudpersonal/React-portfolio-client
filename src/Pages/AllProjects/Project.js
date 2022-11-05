import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Project.css';

const Project = ({ project }) => {
    const { porject_img1, porject_img2, porject_img3, porject_name, porject_live_link, porject_client_side, porject_server_side } = project;

    return (
        <div class="col  ">
            <div class=" h-100 project-dev-shadow">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 rounded-top" src={porject_img1} />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 rounded-top" src={porject_img2} />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 rounded-top" src={porject_img3} />
                        </div>
                    </div>
                </div>
                {/* ------------------ */}
                <div className=" project-project-dev">
                    <h5 className=" mt-3">{porject_name}</h5>
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
                        <a href={porject_live_link} target='_blank'>   <button className='project-live-btn' ><FontAwesomeIcon icon={faEye} /> Live Preview</button></a>
                        <a href={porject_client_side} target='_blank'><button className='project-live-btn'> <i className="fab fa-github"></i> Client</button></a>
                        <a href={porject_server_side} target='_blank'><button className='project-live-btn'> <i className="fab fa-github"></i> Server</button></a>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Project;