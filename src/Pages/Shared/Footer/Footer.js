import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer-bg text-center text-white">
            <div class="container p-4 pb-0">
                <section class="mb-4">

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-github"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1 facebook-padding" href="#!" role="button"
                    ><i class="fab fa-facebook-f"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-twitter"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-instagram"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-dribbble"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-pinterest"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-stack-overflow"></i
                    ></a>


                </section>
            </div>

            <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022
                <a class="text-white"> Abdullah Al Masud</a>
            </div>
        </footer>
    );
};

export default Footer;