import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProgressCircularTestPage from './components/ProgressCircular/ProgressCircularTest'; // Adapte le chemin si besoin
import HomePage from './pages/HomePage';
import ProgressLinearTestPage from './pages/ProgressLinearTestPage';

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
        <Route
          path='/progress-linear-test'
          element={<ProgressLinearTestPage />}
        />
        {/* Ajoute d’autres routes ici si besoin */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
