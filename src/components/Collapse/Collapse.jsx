// IMPORTS
import React from "react";
import { useState } from "react";

// STYLE
import "./collapse.css";

//ASSETS
import arrow from "../../assets/arrow.png";

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="Collapse_Container">
      <h3 className="Collapse_Title">
        {title}
        <img
          className={toggle ? "arrow_up" : "arrow_down"}
          src={arrow}
          alt="Flèche"
          onClick={() => setToggle(!toggle)}
        />
      </h3>
      <div className={toggle ? "Collapse_Content" : "Collapse_Content_None"}>
        {Array.isArray(content) ? (
          <ul className="Collapse_List">
            {content.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        ) : (
          content
        )}
      </div>
    </section>
  );
};

export default Collapse;
