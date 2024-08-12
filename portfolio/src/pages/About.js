import React from 'react';
import '../index.css'; // Ensure your CSS file is imported

function About() {
  return (
    <div className="about-container">
        <div className='about-sk'>
            SRK
        </div>
      <div className="about-rectangle">
        <p className="about-text">
          Hello! I’m a passionate 3rd-year engineering student with a strong interest in software development. Dedicated to learning and implementing advanced technologies, I’m actively working on projects involving Python, MongoDB, C, React.js, and more.
          <br /><br /><br></br>
          I’m also an active member of the technical club Pattarai and serve as a media member in Fablab at my college. I love sharing my knowledge and projects on GitHub, where I showcase my skills in Python, JavaScript, and MERN stack development.
          <br /><br /> <br></br>
          My goal is to continuously enhance my skills, contribute to open-source projects, and tackle new challenges in the tech industry. Thank you for visiting my portfolio!
        </p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/about.png`} 
        alt="Decorative"
        className="about-image"
      />
      <div className="about-about">
        ABOUT
      </div>
    </div>
  );
}

export default About;
