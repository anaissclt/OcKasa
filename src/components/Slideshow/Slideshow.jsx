// Import
import React from 'react';

const Slideshow = ({ pictures }) => {
  return (
    <div className="Slideshow">
      {pictures.map((picture, index) => (
        <div key={index} className={`slide ${index === 0 ? 'active' : ''}`}>
          <img src={picture} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;