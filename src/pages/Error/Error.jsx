// IMPORTS
import { Link } from "react-router-dom";

// STYLE
import "./error.css";

const Error = () => {
  return (
    <section className="Error_Container">
      <h1 className="Error_Title">404</h1>
      <p className="Error_Text">
        Oups! La page que vous demandez n'existe pas..
      </p>
      <Link to="/" className="Error_Link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
};

export default Error;