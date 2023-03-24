import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import './styles/app.css';
import Error from './pages/Error';
import Logement from './pages/Logement';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <BrowserRouter basename="/anis_openclassrooms_p11">
        <div className='container'> 
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/logement/:logementId" element={<Logement />} />
              <Route path='*' element={<Error />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;