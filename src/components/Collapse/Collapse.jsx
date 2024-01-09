// IMPORTS
import React from "react";
import { useState } from "react";
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
        {Array.isArray(content)
          ? content.map((index) => <p key={index}></p>)
          : content}
      </div>
    </section>
  );
};

export default Collapse;
