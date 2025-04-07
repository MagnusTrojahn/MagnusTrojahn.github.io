import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects.jsx';
import ProjectPollen from './components/ProjectPollen';
import Contact from './components/Contact';
import Seafacts from './components/Seafacts';
import 'bootstrap/dist/css/bootstrap.min.css';

// Add Montserrat font import
const fontStyle = {
  fontFamily: "'Montserrat', sans-serif"
};

function App() {
  return (
    <div style={{ backgroundColor: '#F5F5DC', minHeight: '100vh', ...fontStyle }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/project-pollen" element={<ProjectPollen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seafacts" element={<Seafacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
