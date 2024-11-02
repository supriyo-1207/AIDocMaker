// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Docs from './pages/Docs';
import NotFound from './pages/NotFound';
import View from './pages/View';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/document" element={<Docs />} />
          <Route path="/view" element={<View />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
