// IMPORTS
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home';

// LAYOUTS
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';



// Routes de l'application
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
    <Footer />
    </>
  );
}

export default App;