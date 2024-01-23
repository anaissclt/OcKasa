// IMPORTS
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// COMPONENTS
import Slideshow from "../../components/Slideshow/Slideshow";
import Stars from "../../components/Stars/Stars";
import Collapse from "../../components/Collapse/Collapse";

// STYLE
import "./logement.css";

// ASSETS
import DataLocation from "../../assets/data.json";

const Location = () => {
  const { id } = useParams(); // Récupère l'id du logement dans l'url
  const logement = DataLocation.find((item) => item.id === id); // Recherche dans les données en fonction de l'ID

  const navigate = useNavigate(); // UseNavigate pour la navigation

  useEffect(() => {
    if (!logement) {
      // navigation vers /404 si le logement n'est pas trouvé
      navigate("/404");
    }
  }, [logement, navigate]);

  return (
    <>
      <Slideshow pictures={logement.pictures} />

      <section className="Logement_Container">
        <div className="Logement_Information">
          <h1 className="Logement_Title">{logement.title}</h1>
          <p className="Logement_Location">{logement.location}</p>
          <ul className="Logement_Tag_Ul">
            {logement.tags.map((tag, index) => (
              <li key={index} className="Logement_Tag_Li" >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="Logement_Owner">
          <div className="Logement_Owner_Container">
            <p className="Logement_Owner_Name">{logement.host.name}</p>
            <img
              className="Logement_Owner_Img"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <Stars star={logement.rating} />
        </div>
      </section>
        <div className="Logement_Collapse">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
    </>
  );
};

export default Location;
