import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div id='resume' className='resume-bg'>
            <div className='container pt-3'>
                <h3 className='text-center pt-5 numbers-numbers-headline'>RESUME</h3>

                <div class="row mt-5">
                    <div class="col-sm-6 mt-4">
                        <div class="">
                            <h3 class="mb-4">Summary</h3>
                            <div className='resume-item'>
                                <h5 className='text-uppercase'>Abdullah Al Masud</h5>
                                <p><em>To be an expect employee and intend to work in a challenging and competitive
                                    Environment in an organizational position entrusted with higher responsibility and
                                    strategies decision making authority, motivated self-driven creative.</em></p>
                                <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>(123) 456-7891</li>
                                    <li>alice.barkley@example.com</li>
                                </ul>
                            </div>
                        </div>

                        <div class="">
                            <h3 class="mb-4">Education</h3>

                            <div className='resume-item'>
                                <h5 className='text-uppercase'>Al Quran & Islamc Studies</h5>
                                <h5 className='my-3'>2021 - 2024</h5>
                                <p><em>Islamic Arabic University, Mohammadpur, Dhaka</em> </p>
                                <p>To be an expect employee and intend to work in a challenging and competitive
                                    Environment in an organizational position entrusted with higher responsibility and
                                    strategies decision making authority, motivated self-driven creative.</p>
                            </div>

                            <div className='resume-item'>
                                <h5 className='text-uppercase'>Higher Secondary School Certificate / Equivalent </h5>
                                <h5 className='my-3'>2018 - 2019 ( 2020 - Improvment )</h5>
                                <p><em>Tamirul Millat Kamil Madrasah</em></p>
                                <p><em>To be an expect employee and intend to work in a challenging and competitive
                                    Environment in an organizational position entrusted with higher responsibility and
                                    strategies decision making authority, motivated self-driven creative.</em></p>
                            </div>

                        </div>

                    </div>

                    <div class="col-sm-6 mt-4">
                        <div class="">
                            <div class="">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume;