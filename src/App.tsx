import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProgressCircularTestPage from './components/ProgressCircular/ProgressCircularTest'; // Adapte le chemin si besoin
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/progress-circular-test'
          element={<ProgressCircularTestPage />}
        />
        {/* Ajoute d’autres routes ici si besoin */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
