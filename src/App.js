// IMPORTS
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Logement from "./pages/Logement/Logement";

// LAYOUTS
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

// STYLE
import "./app.css";

// Routes de l'application
const App = () => {
  return (
    <>
      <div className="Contenair_App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
