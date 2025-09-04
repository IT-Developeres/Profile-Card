
import './App.css';
import Card from './card-components/card';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Name from './card-components/name';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/card-only" element={<Card />} />
          <Route path="/name" element={<Name />} />
        </Routes>
      </Router>

    
    </>
  );
}

export default App;
