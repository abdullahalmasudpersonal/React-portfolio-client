import React from 'react';
import './AllBlogs.css';
import html from '../../Assets/img/Blogs/html.jpg';
import css from '../../Assets/img/Blogs/css.jpg';
import bootstrap from '../../Assets/img/Blogs/bootstrap.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AllBlogs = () => {
    return (
        <div className='allblogs-bg'>
            <div className='container py-5'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col ">
                        <div class="bolg-dev-dev h-100">
                                <img src={html} class="card-img-top rounded-top w-100" alt="..." />
                            <div>
                                <span class="position-absolute start-50 translate-middle badge rounded-pill bg-dark text-light py-2 px-3">
                                    3 November, 2021
                                </span>
                            </div>
                            <div class="p-3 text-justify">
                                <h5 class="pt-3 text-center">HTML</h5>
                                <p class="">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
                            </div>
                            <div class="bolg-read-more">
                                <button><span>Read More </span>
                                    <span>
                                        <FontAwesomeIcon style={{ height: '12px' }} icon={faChevronRight} />
                                        <FontAwesomeIcon style={{ height: '12px' }} icon={faChevronRight} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class=" h-100">
                            <img src={css} class="card-img-top" alt="..." />
                            <div class="">
                                <h5 class="card-title">Card title</h5>
                                <p class="">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={bootstrap} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;