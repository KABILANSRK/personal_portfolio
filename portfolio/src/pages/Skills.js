import React from 'react';
import '../index.css'; // Make sure you import the CSS file

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-sk">
        SRK
      </div>
      <div className="skills-box left-box">
        <h2 className="skills-heading1">Software Developer</h2>
        <p className="skills-text">
          I enjoy writing clean code and creating useful products.<br /><br />
          I like to code in:<br />
          &emsp;&emsp;&emsp;Python, Javascript, Node, C, MongoDB.<br /><br />
          Tools:<br />
          &emsp;&emsp;&emsp;VScode, Github.
        </p>
      </div>
      <div className="skills-box right-box">
        <h2 className="skills-heading2">Front End Developer</h2>
        <p className="skills-text">
          I find it exciting to bring new concepts to life. As a frontend developer, I feel fortunate because my work directly impacts the user's experience.<br />
          <br />
          Skills:<br />
          &emsp;&emsp;&emsp;Html, Css, Js, React.<br /><br />
          Tools:<br />
          &emsp;&emsp;&emsp;VScode, Figma, Github.
        </p>
      </div>
    </div>
  );
}

export default Skills;
