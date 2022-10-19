import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Blog = ({ blog }) => {
    const { name, image, description, date } = blog;

    return (
        <div class="col mb-3">
            <div class="bolg-dev-dev h-100">
                <img src={image} class="card-img-top rounded-top w-100" alt="..." />
                <div>
                    <span class="position-absolute start-50 translate-middle badge rounded-pill bg-dark text-light py-2 px-3">
                        {date}
                    </span>
                </div>
                <div class="p-3 text-justify">
                    <h5 class="pt-3 pb-2 text-center">{name}</h5>
                    <p class="">{description}</p>
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

    );
};

export default Blog;

{/* <div className='allblogs-bg py-5'>
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col mb-3">
                        <div class="bolg-dev-dev h-100">
                                <img src={html} class="card-img-top rounded-top w-100" alt="..." />
                            <div>
                                <span class="position-absolute start-50 translate-middle badge rounded-pill bg-dark text-light py-2 px-3">
                                    3 November, 2021
                                </span>
                            </div>
                            <div class="p-3 text-justify">
                                <h5 class="pt-3 pb-2 text-center">HTML</h5>
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
                    <div class="col mb-3">
                        <div class="bolg-dev-dev h-100">
                                <img src={css} class="card-img-top rounded-top w-100" alt="..." />
                            <div>
                                <span class="position-absolute start-50 translate-middle badge rounded-pill bg-dark text-light py-2 px-3">
                                    15 November, 2021
                                </span>
                            </div>
                            <div class="p-3 text-justify">
                                <h5 class="pt-3 pb-2 text-center">CSS</h5>
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
                    <div class="col mb-3">
                        <div class="bolg-dev-dev h-100">
                                <img src={bootstrap} class="card-img-top rounded-top w-100" alt="..." />
                            <div>
                                <span class="position-absolute start-50 translate-middle badge rounded-pill bg-dark text-light py-2 px-3">
                                    3 November, 2021
                                </span>
                            </div>
                            <div class="p-3 text-justify">
                                <h5 class="pt-3 pb-2 text-center">BOOTSTRAP</h5>
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
                    <div class="col mb-3">
                        <div class="bolg-dev-dev h-100">
                                <img src={html} class="card-img-top rounded-top w-100" alt="..." />
                            <div>
                                <span class="position-absolute start-50 translate-middle badge rounded-pill bg-dark text-light py-2 px-3">
                                    3 November, 2021
                                </span>
                            </div>
                            <div class="p-3 text-justify">
                                <h5 class="pt-3 pb-2 text-center">HTML</h5>
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
                    <div class="col mb-3">
                        <div class="bolg-dev-dev h-100">
                                <img src={html} class="card-img-top rounded-top w-100" alt="..." />
                            <div>
                                <span class="position-absolute start-50 translate-middle badge rounded-pill bg-dark text-light py-2 px-3">
                                    3 November, 2021
                                </span>
                            </div>
                            <div class="p-3 text-justify">
                                <h5 class="pt-3 pb-2 text-center">HTML</h5>
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
                </div>
            </div>
        </div> */}