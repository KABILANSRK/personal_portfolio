import React from 'react';
import { useNavigate } from 'react-router-dom';

function Loading() {
  const navigate = useNavigate();

  const handleClick = () => { 
    navigate('/home');
  };

  return (
    <div className="loading-container">
      <img
        src={`${process.env.PUBLIC_URL}/assets/triangle_gradient.png`}
        alt="-"
        className="bg-triangle3"
        style={{ width: '5rem', height: '25rem' }}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/triangle_gradient.png`}
        alt="-"
        className="bg-triangle4"
        style={{ width: '10rem', height: '30rem' }}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/loading.png`}
        alt="Loading"
        className="rotating"
        onClick={handleClick}
        style={{ width: '10rem', height: '40rem' }}
      />
      <div className="loading-text">
        SRK
      </div>
      <div className="loading-info">
        Click here...
      </div>
    </div>
  );
}

export default Loading;
