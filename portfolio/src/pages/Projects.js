import React from 'react';
import '../index.css';

function Skills() {
  return (
    <div className="projects-container">
        <div className="projects-sk">
        SRK
      </div>
      <div className="projects-projects">
        PROJECTS
      </div>
      <div className="rectangle">
        <div className="image-holder">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/Biblo_connect_logo.jpg`} 
            alt="Project 1"
            className="project-image1" 
          />
        </div>
        <div className="project-desc">
          <h3>&emsp;&emsp;&nbsp;&nbsp;Biblo -&gt; Connect</h3>
          <p>This project is a web application that allows users to...</p>
          <a 
            href="https://github.com/team-pattarai/Bibloconnect-App-for-book-lovers.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="rectangle">
        <div className="image-holder">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/compass_pro.png`} 
            alt="Project 2"
            className="project-image2" 
          />
        </div>
        <div className="project-desc">
          <h3>&emsp;&emsp;&nbsp;&nbsp;Campus_Navigator</h3>
          <p>This project is a mobile app that helps users track...</p>
          <a 
            href="https://github.com/KABILANSRK/Campus_Navigator.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="rectangle">
        <div className="image-holder">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/telegram.svg`} 
            alt="Project 3"
            className="project-image3" 
          />
        </div>
        <div className="project-desc">
          <h3>&nbsp;Multifunctional Telegram Bot</h3>
          <p>This project is a mobile app that helps users track...</p>
          <a 
            href="https://github.com/KABILANSRK/Multi-funtional-telegram-bot.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>

      

    </div>
  );
}

export default Skills;
