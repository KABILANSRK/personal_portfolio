import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  return (
    <div className="home-container">
      <div className="left-half">
      <div className="text-home">
        SRK
      </div>
      <a href="https://www.linkedin.com/in/kabilansrkk/" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/assets/linkedin.svg`} 
              alt="LinkedIn"
              className="top-svg1"
            />
          </a>
          <a href="https://github.com/KABILANSRK" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/assets/github.svg`} 
              alt="GitHub"
              className="top-svg2"
            />
          </a>
        <Link to="/about" className="custom-link about-link">ABOUT</Link>
        <Link to="/skills" className="custom-link skills-link">SKILLS</Link>
        <div className="left-rectangle">
          <div className='bold-text1'>
            Hi,
          </div>
          <div className='bold-text2'>
            I'm Kabilan.
          </div>
          <div className='light-text'>
            <br></br>
            <br></br>
          A passionate and driven engineering student with expertise <br></br> in software development. Also I excel in <br></br> projects using Python,C, HTML, and React.js and <br></br> I am dedicated to creating innovative tech solutions and contributing    to the tech community.
          </div>
        </div>
      </div>
      <div className="right-half">
      <a href="mailto:kabilans.26csb@licet.ac.in" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/assets/email_black.svg`} 
              alt="Email"
              className="top-svg3"
            />
          </a>
          <a href="https://www.instagram.com/_.kabilan._srk?igsh=MXN1NGtqZjh4bnQxcw==" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/assets/instagram_blackk.svg`} 
              alt="Instagram"
              className="top-svg4"
            />
          </a>
        <Link to="/projects" className="custom-link projects-link">PROJECTS</Link>
        <a href="https://drive.google.com/file/d/1KjkhDBOwiyGH8MmlwPTVBEnaKx_sNGYb/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="custom-link resume-link">
          RESUME
        </a>
        <div className="right-rectangle">
        <img
            src={`${process.env.PUBLIC_URL}/assets/home.png`}
            alt="Decorative"
            className="rectangle-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
