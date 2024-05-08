import './App.css';
import React from 'react';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar'; // Import Navbar component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/card/:id" element={<Card />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
