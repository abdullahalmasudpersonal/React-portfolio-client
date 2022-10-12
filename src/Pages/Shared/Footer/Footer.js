import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-bg text-center text-white">
            <h3 className='text-center pt-4'>Abullah Al Masud</h3>
            <div className="container mt-3 pb-0">
                <section className="mb-4">

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1 facebook-padding" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-dribbble"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-pinterest"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-stack-overflow"></i
                    ></a>


                </section>
            </div>
            <div className="text-center pb-3 footer-bottom-bg" >
                © 2022
                <a className="text-white"> Abdullah Al Masud All Rights Reserved <br/>
                    Designed by <span className='desigined-by'>Abdullah al masud</span></a>
            </div>
        </footer>
    );
};

export default Footer;