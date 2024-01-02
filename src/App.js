// IMPORTS
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Error from "./pages/Error/Error";

// LAYOUTS
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

// Style
import './app.css';

// Routes de l'application
function App() {
  return (
    <>
      <div className="contenair">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;