// IMPORTS
import React, { useState } from "react";

// STYLE
import "./slideshow.css";

// ASSETS
import arrowright from "../../assets/arrow-right.png";
import arrowleft from "../../assets/arrow-left.png";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const NextSlide = () => {
    setCurrentIndex((Next) => (Next === pictures.length - 1 ? 0 : Next + 1));
  };

  const PrevSlide = () => {
    setCurrentIndex((Previous) =>
      Previous === 0 ? pictures.length - 1 : Previous - 1
    );
  };

  return (
    <section className="Slide_Container">
        {/* Affiche les éléments seulement si plusieurs images existent */}
      {pictures.length > 1 && (
        <>
          <p className="Slide_Number">
            {currentIndex + 1} / {pictures.length}
          </p>
          <img
            className="Slider_Right"
            src={arrowright}
            alt="Flèche droite"
            onClick={NextSlide}
          />
          <img
            className="Slider_Left"
            src={arrowleft}
            alt="Flèche gauche"
            onClick={PrevSlide}
          />
        </>
      )}
      <img className="Slide_Img" src={pictures[currentIndex]} alt="Images du logement" />
    </section>
  );
};

export default Slideshow;
