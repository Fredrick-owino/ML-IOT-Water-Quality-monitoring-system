import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Visualization = () => {
  const [data, setData] = useState([]);
  
  const [alert, setAlert] = useState({ isActive: false, message: '' });

  const thresholds = {
    temperature: { min: 20, max: 30 },
    dissolvedOxygen: { min: 6, max: 10 },
    pH: { min: 6.5, max: 8.5 },
    turbidity: { min: 1, max: 5 },
    windSpeed: { min: 0, max: 15 },
    waterLevel: { min: 0.5, max: 5 },
    humidity: { min: 30, max: 70 },
    pressure: { min: 950, max: 1050 },
  };

  const generateData = () => {
    const timestamp = new Date().toLocaleTimeString();
    return {
      timestamp,
      temperature: parseFloat((20 + Math.random() * 10).toFixed(2)),
      dissolvedOxygen: parseFloat((6 + Math.random() * 4).toFixed(2)),
      pH: parseFloat((6.5 + Math.random() * 2).toFixed(2)),
      turbidity: parseFloat((1 + Math.random() * 4).toFixed(2)),
      windSpeed: parseFloat((Math.random() * 15).toFixed(2)),
      waterLevel: parseFloat((0.5 + Math.random() * 4.5).toFixed(2)),
      humidity: Math.floor(30 + Math.random() * 40),
      pressure: Math.floor(950 + Math.random() * 100),
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateData();
      const exceeded = [];
      for (const [key, value] of Object.entries(thresholds)) {
        if (newData[key] < value.min || newData[key] > value.max) {
          exceeded.push(key);
        }
      }

      setAlert({
        isActive: exceeded.length > 0,
        message: exceeded.length > 0 ? `Alert: ${exceeded.join(', ')} out of range.` : '',
      });

      setData((prev) => [...prev.slice(-9), newData]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Real-Time Data Visualization
      </h2>
      <p className="mb-8 text-center text-gray-600">
        Below are graphs visualizing water quality and atmospheric parameters alongside their real-time values.
      </p>

      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-3 text-white font-semibold rounded ${
            alert.isActive ? 'bg-red-500' : 'bg-green-500'
          }`}
        >
          {alert.isActive ? alert.message : 'All parameters are stable.'}
        </button>
      </div>

      {/* Layout: Parameter List and Graph */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Parameter List */}
        <div className="bg-white p-6 rounded shadow-md w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Real-Time Water Data</h3>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Parameter</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 && (
                <>
                  <tr>
                    <td className="px-4 py-2">Temperature (°C)</td>
                    <td className="px-4 py-2">{data[data.length - 1].temperature}</td>
                    <td className="px-4 py-2">{data[data.length - 1].timestamp}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Dissolved Oxygen (mg/L)</td>
                    <td className="px-4 py-2">{data[data.length - 1].dissolvedOxygen}</td>
                    <td className="px-4 py-2">{data[data.length - 1].timestamp}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">pH Levels</td>
                    <td className="px-4 py-2">{data[data.length - 1].pH}</td>
                    <td className="px-4 py-2">{data[data.length - 1].timestamp}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Turbidity (NTU)</td>
                    <td className="px-4 py-2">{data[data.length - 1].turbidity}</td>
                    <td className="px-4 py-2">{data[data.length - 1].timestamp}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* Graph */}
        <div className="bg-white p-6 rounded shadow-md w-full md:w-3/4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Water Quality Parameters</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperature (°C)" />
                <Line
                  type="monotone"
                  dataKey="dissolvedOxygen"
                  stroke="#387908"
                  name="Dissolved Oxygen (mg/L)"
                />
                <Line type="monotone" dataKey="pH" stroke="#0074d9" name="pH Levels" />
                <Line type="monotone" dataKey="turbidity" stroke="#ff0090" name="Turbidity (NTU)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Atmospheric Parameters */}
      <div className="flex flex-col md:flex-row gap-8 mt-12">
        {/* Parameter List */}
        <div className="bg-white p-6 rounded shadow-md w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Real-Time Atmospheric Data</h3>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Parameter</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 && (
                <>
                  <tr>
                    <td className="px-4 py-2">Wind Speed (m/s)</td>
                    <td className="px-4 py-2">{data[data.length - 1].windSpeed}</td>
                    <td className="px-4 py-2">{data[data.length - 1].timestamp}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Water Level (m)</td>
                    <td className="px-4 py-2">{data[data.length - 1].waterLevel}</td>
                    <td className="px-4 py-2">{data[data.length - 1].timestamp}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Humidity (%)</td>
                    <td className="px-4 py-2">{data[data.length - 1].humidity}</td>
                    <td className="px-4 py-2">{data[data.length - 1].timestamp}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Pressure (hPa)</td>
                    <td className="px-4 py-2">{data[data.length - 1].pressure}</td>
                    <td className="px-4 py-2">{data[data.length - 1].timestamp}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* Graph */}
        <div className="bg-white p-6 rounded shadow-md w-full md:w-3/4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Atmospheric Parameters</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="windSpeed"
                  stroke="#ff7300"
                  name="Wind Speed (m/s)"
                />
                <Line
                  type="monotone"
                  dataKey="waterLevel"
                  stroke="#387908"
                  name="Water Level (m)"
                />
                <Line type="monotone" dataKey="humidity" stroke="#0074d9" name="Humidity (%)" />
                <Line type="monotone" dataKey="pressure" stroke="#ff0090" name="Pressure (hPa)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualization;
