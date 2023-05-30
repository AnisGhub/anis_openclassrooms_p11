import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Apropos from './Apropos';
import Error from './Error';
import Logement from './Logement';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Router() {
  return (
      <div>
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
      </div>
  );
}

export default Router;