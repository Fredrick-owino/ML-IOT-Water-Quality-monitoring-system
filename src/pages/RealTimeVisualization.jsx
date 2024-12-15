import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const RealTimeVisualization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const simulatedData = Array.from({ length: 10 }, (_, i) => ({
        timestamp: `Time ${i}`,
        temperature: Math.random() * (35 - 15) + 15,
        dissolvedOxygen: Math.random() * (10 - 2) + 2,
      }));
      setData(simulatedData);
    };
    fetchData();
    const interval = setInterval(fetchData, 3000); // Update every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
          <Line type="monotone" dataKey="dissolvedOxygen" stroke="#387908" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealTimeVisualization;
