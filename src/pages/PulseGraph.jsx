import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const PulseGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generateData = () => {
      const parameters = [
        'Temperature', 'Dissolved Oxygen', 'pH', 'Turbidity', 'Wind Speed',
        'Water Level', 'Humidity', 'Pressure'
      ];
      return parameters.map((param, index) => ({
        parameter: param,
        value: Math.random() * 100, // Simulated random value
        id: index,
      }));
    };

    const updateData = () => {
      const newData = generateData();
      setData(newData);
    };

    const interval = setInterval(updateData, 1000); // Update every second
    updateData();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-4">Pulse Graph</h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid stroke="#444" />
            <XAxis type="number" />
            <YAxis dataKey="parameter" type="category" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#fff"
              strokeWidth={2}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PulseGraph;
