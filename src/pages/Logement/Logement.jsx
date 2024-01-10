// IMPORTS
import React from 'react';
import { useParams } from 'react-router-dom';
import DataLocation from '../../assets/data.json';
import ErrorPage from '../Error/Error';
import Slideshow from '../../components/Slideshow/Slideshow';

const Location = () => {
  const { id } = useParams(); // Récupère l'id du logement dans l'url
  const logement = DataLocation.find(item => item.id === (id));  // Recherche dans les données en fonction de l'ID

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <div>
       <Slideshow pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
    </div>
  );
}

export default Location;