import React from 'react';
import './Home.css';
import '../../App.css';
import About from '../About/About';
import Resume from '../About/Resume/Resume';
import ConnectUs from '../ConnectUs/ConnectUs';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Counter from '../Counter/Counter';
import Skills from '../Skills/Skills';
import { useCallback } from "react";
import resume from '../../Assets/img/ResumePDF/MASUD Full-stack Developer Resume.pdf';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleAnimi from './config/ParticleAnimi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import MovingComponent from 'react-moving-text';
import HProjects from '../HProjects/HProjects';


const Home = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'React Developer', 'Font End Developer', 'Back End Developer', 'Full Stack Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div>
      <div id='home' className='home-bg'>

        <div className='container homeContainer' >

          <MovingComponent
            type="fadeInFromTop"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both">
            <h3 className=' display-3 fw-bold home-my-name '>Abdullah al masud</h3>
          </MovingComponent>

          <MovingComponent
            type="fadeInFromLeft"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both">
            <h3 className='home-my-title'>
              I'm {' '}
              <span style={{ fontWeight: 'bold' }}>
                {text}
              </span>
              <Cursor style={{ color: 'white' }} />
            </h3>
          </MovingComponent>

          <MovingComponent
            type="fadeInFromRight"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both">
            <section className="mt-3 homeSocialIcon">
              <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/abdullah-al-masud-48ab691b1" target='_blank' role="button"><i className="fab fa-linkedin-in"></i></a>

              <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/abdullahalmasudpersonal" role="button" target='_blank' ><i className="fab fa-github"></i></a>

              <a className="btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/users/19008268/abdullah-al-masud" role="button" target='_blank'><i className="fab fa-stack-overflow"></i></a>

              <a className="btn btn-outline-light btn-floating m-1 facebook-padding" href="https://www.facebook.com/abdullahal.masud.5891" role="button" target='_blank'><i className="fab fa-facebook-f"></i></a>

              <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/Abdulla14032407" role="button" target='_blank'><i className="fab fa-twitter"></i></a>

              <a className="btn btn-outline-light btn-floating m-1" href="https://dribbble.com/Abdullah540" role="button" target='_blank'><i className="fab fa-dribbble"></i></a>
            </section>
          </MovingComponent>
          {/*  <a download='Abdullah Resuem' href={resume}> <button className="glow-on-hover fw-bold mt-4" type="button"> RESUME <i className="fab fa-download"></i></button> </a> */}
          <MovingComponent
            type="fadeInFromBottom"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both">
            <section className='resumeIconAnimation'>
              <a download='Abdullah Al Masud Resume' href={resume}> <button className="resume-download-btn btn btn-outline-light btn-floating fw-bold mt-4" type="button">Resume &nbsp;<FontAwesomeIcon className='' s icon={faDownload} /></button> </a>
            </section>
          </MovingComponent>
        </div>
      </div>
      <div className='home-down-bg'>
        <About />
        <Counter />
        <Skills />
        <Resume />
        <HProjects />
        <Services />
        <Blogs />
        <ConnectUs />
      </div>
    </div>
  );
};

export default Home;