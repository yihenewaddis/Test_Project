import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import InstantPayment from './pages/InstantPayment.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<InstantPayment />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
