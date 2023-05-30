import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/anis_openclassrooms_p11">
        <Router />
    </BrowserRouter>
  </React.StrictMode>
);

