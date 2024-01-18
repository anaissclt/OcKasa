// IMPORTS
import React from "react"; // bibliothèque React
import { StrictMode } from "react"; // composant qui aide à détecter les problèmes potentiels dans l'application
import ReactDOM from "react-dom/client"; // bibliothèque pour le rendu des composants React dans le DOM
import { BrowserRouter } from "react-router-dom"; //composant qui permet d'ajouter la gestion des routes
import App from "./App";

// STYLE
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);