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
        src={`${process.env.PUBLIC_URL}/assets/loading.svg`}
        alt="Loading"
        className="rotating"
        onClick={handleClick}
        style={{ width: '20rem', height: '50rem' }}
      />
      <div className="loading-text">
        SK
      </div>
      <div className="loading-info">
        Click here...
      </div>
    </div>
  );
}

export default Loading;
