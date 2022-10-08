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


const Home = () => {

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
          <source src={bgVideo22} type='video/mp4' />
        </video>
      </div>
      <About />
      <Resume/>
      <Project/>
      <Services/>
      <Blogs/>
      <ConnectUs/>
    </div>

  );
};

export default Home;