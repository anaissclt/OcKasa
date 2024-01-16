// IMPORT
import React from 'react';
import PropTypes from 'prop-types'; // module PropTypes

// STYLE
import './banner.css';

const Banner = ({ image, text }) => {
  return (
    <div className="Banner_Container">
      <img src={image} alt="Banner" className="Banner_Img" />
      {text && <p className="Banner_Text">{text}</p>}
    </div>
  );
};

// PropTypes définit les types attendus pour les props
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;