import React from 'react';
import { Link } from 'react-router-dom';
import RealTimeVisualization from './RealTimeVisualization';

const VisualizationPage = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Main Visualization</h2>
      <p className="text-gray-700 mb-6">
        Explore real-time water and atmospheric parameter visualizations below:
      </p>
      <div className="mb-8">
        {/* Line Graph Visualization */}
        <RealTimeVisualization />
      </div>
      <div>
        <Link
          to="/pulse"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Pulse Graph Visualization
        </Link>
      </div>
    </div>
  );
};

export default VisualizationPage;
