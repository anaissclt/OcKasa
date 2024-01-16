// IMPORTS
import { Link } from "react-router-dom";

// STYLE
import "./footer.css";

// ASSETS
import logoFooter from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="Footer_Container">
      <Link to="/">
        <img src={logoFooter} alt="Logo de Kasa" />
      </Link>
      <p className="Footer_Text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;