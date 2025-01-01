import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PulseGraph from '../pages/PulseGraph';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VisualizationPage />} />
        <Route path="/pulse" element={<PulseGraph />} />
      </Routes>
    </Router>
  )
};

export default AppRoutes;
