import React from 'react';
import './Home.css';
import bgVideo from '../../Assets/Videos/BackgroundVideo/Particle - 5187.mp4';
import bgVideo2 from '../../Assets/Videos/BackgroundVideo/Network - 12716.mp4';
import bgVideo22 from '../../Assets/Videos/BackgroundVideo/Bokeh - 5233.mp4';
import About from '../About/About';
import Resume from '../About/Resume/Resume';
import Project from '../Project/Project';
import ConnectUs from '../ConnectUs/ConnectUs';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


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
        <video autoPlay loop muted style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1',
        }}>
          <source src={bgVideo} type='video/mp4' />
        </video>

        <div className='container'>

          <h4 className=' display-3 fw-bold home-my-name '>Abdullah al masud</h4>

          <h3 className='home-my-title'>
            I'm {' '}
            <span style={{ fontWeight: 'bold' }}>
              {text}
            </span>
            <Cursor style={{ color: 'white' }} />
          </h3>

          <section class="mt-3">
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
            ><i class="fab fa-dribbble"></i
            ></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-stack-overflow"></i
            ></a>
          </section>
          
          <button class="glow-on-hover fw-bold mt-4" type="button">DOWNLOAD RESUME</button>

        </div>
      </div>
      <About />
      <Resume />
      <Project />
      <Services />
      <Blogs />
      <ConnectUs />
    </div>

  );
};

export default Home;