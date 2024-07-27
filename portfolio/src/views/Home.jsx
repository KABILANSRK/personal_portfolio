import React from 'react';
import profilePic from '../assets/kabilan_picture.jpg'; // Import the image

const Home = () => {
  return (
    <div style={styles.circle}>
      <img src={profilePic} alt="Profile_pic" style={styles.image} />
    </div>
  );
};

const styles = {
  circle: {
    width: '150px',        
    height: '150px',       
    borderRadius: '50%',   
    overflow: 'hidden',    
    display: 'flex',       
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #fff', 
    backgroundColor: '#333', 
  },
  image: {
    width: '100%',         
    height: '100%',        
    objectFit: 'cover',  
  },
};

export default Home;