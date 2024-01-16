// IMPORTS
import { Link, NavLink } from "react-router-dom"; // composants de la bibliothèque React Router

// STYLE
import "./header.css";

// ASSETS
import logoHeader from "../../assets/logo-header.png";

const Header = () => {
  return (
    <nav className="Header_Container">
      <Link to="/">
        <img className="Header_Logo" alt="Logo de Kasa" src={logoHeader} />
      </Link>

      <div className="Header_Link">
        <NavLink to="/" className="Link">
          Accueil
        </NavLink>

        <NavLink to="/about" className="Link">
          À Propos
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
