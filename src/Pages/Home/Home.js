import React from 'react';
import './Home.css';
import '../../App.css';
import About from '../About/About';
import Resume from '../About/Resume/Resume';
import Project from '../Project/Project';
import ConnectUs from '../ConnectUs/ConnectUs';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Counter from '../Counter/Counter';
import Skills from '../Skills/Skills';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleAnimi from './config/ParticleAnimi';


const Home = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'React Developer', 'Font End Developer', 'Back End Developer', 'Full Stack Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);


  return (
    <div>
      <div id='home' className='home-bg'>

       {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />  */}

        <ParticleAnimi/>  



        <div className='container'>

          <h4 className=' display-3 fw-bold home-my-name '>Abdullah al masud</h4>

          <h3 className='home-my-title'>
            I'm {' '}
            <span style={{ fontWeight: 'bold' }}>
              {text}
            </span>
            <Cursor style={{ color: 'white' }} />
          </h3>

          <section className="mt-3">
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/abdullah-al-masud-48ab691b1" target='_blank' role="button"><i className="fab fa-linkedin-in"></i></a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/abdullahalmasudpersonal" role="button" target='_blank' ><i className="fab fa-github"></i></a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/users/19008268/abdullah-al-masud" role="button" target='_blank'><i className="fab fa-stack-overflow"></i></a>

            <a className="btn btn-outline-light btn-floating m-1 facebook-padding" href="https://www.facebook.com/abdullahal.masud.5891" role="button" target='_blank'><i className="fab fa-facebook-f"></i></a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/Abdulla14032407" role="button" target='_blank'><i className="fab fa-twitter"></i></a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://dribbble.com/Abdullah540" role="button" target='_blank'><i className="fab fa-dribbble"></i></a>

            
          </section>

          <button className="glow-on-hover fw-bold mt-4" type="button">DOWNLOAD RESUME</button>

        </div>
      </div>
      <div className='home-down-bg'>
        <About />
        <Counter />
        <Skills />
        <Resume />
        <Project />
        <Services />
        <Blogs />
        <ConnectUs />
      </div>
    </div>

  );
};

export default Home;