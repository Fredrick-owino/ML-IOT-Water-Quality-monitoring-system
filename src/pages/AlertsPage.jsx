import React from "react";

// Sample alerts data (simulating real-time parameters)
const alerts = [
  {
    id: 1,
    title: "Water Temperature Warning",
    description: "The water temperature has risen above the recommended threshold.",
    timestamp: "2025-01-01 10:15 AM",
    type: "warning",
    parameter: "Temperature (°C)", // Added parameter type
  },
  {
    id: 2,
    title: "Dissolved Oxygen Critical",
    description: "Dissolved oxygen levels are critically low in the water.",
    timestamp: "2025-01-01 09:50 AM",
    type: "error",
    parameter: "Dissolved Oxygen (mg/L)",
  },
  {
    id: 3,
    title: "pH Level Alert",
    description: "The pH level has deviated from the optimal range.",
    timestamp: "2025-01-01 08:30 AM",
    type: "warning",
    parameter: "pH Level",
  },
  {
    id: 4,
    title: "Turbidity High",
    description: "Turbidity levels in the water are higher than expected.",
    timestamp: "2025-01-01 07:15 AM",
    type: "warning",
    parameter: "Turbidity (NTU)",
  },
  {
    id: 5,
    title: "Wind Speed Alert",
    description: "Wind speed is exceeding the safe limits.",
    timestamp: "2025-01-01 06:45 AM",
    type: "warning",
    parameter: "Wind Speed (m/s)",
  },
  {
    id: 6,
    title: "Humidity Low",
    description: "Humidity levels are below optimal for aquatic life.",
    timestamp: "2025-01-01 06:30 AM",
    type: "warning",
    parameter: "Humidity (%)",
  },
  {
    id: 7,
    title: "Pressure Normal",
    description: "Atmospheric pressure is within safe levels.",
    timestamp: "2025-01-01 06:00 AM",
    type: "info",
    parameter: "Pressure (hPa)",
  },
];

const AlertsPage = () => {
  return (
    <section className="py-12 bg-gray-50" id="alerts">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Alerts & Notifications
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-6">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg mx-2 hover:bg-blue-600">
            All
          </button>
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg mx-2 hover:bg-yellow-600">
            Warnings
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg mx-2 hover:bg-red-600">
            Errors
          </button>
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg mx-2 hover:bg-green-600">
            Information
          </button>
        </div>

        {/* Alerts List */}
        <div className="space-y-6">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-6 rounded-lg shadow-lg flex justify-between items-center ${
                alert.type === "warning"
                  ? "bg-yellow-100"
                  : alert.type === "error"
                  ? "bg-red-100"
                  : alert.type === "info"
                  ? "bg-green-100"
                  : "bg-white"
              }`}
            >
              <div className="flex items-center">
                {/* Icon */}
                <div
                  className={`p-2 rounded-full ${
                    alert.type === "warning"
                      ? "bg-yellow-500 text-white"
                      : alert.type === "error"
                      ? "bg-red-500 text-white"
                      : alert.type === "info"
                      ? "bg-green-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {/* You can use custom icons based on alert type */}
                  {alert.type === "warning" && "⚠️"}
                  {alert.type === "error" && "❌"}
                  {alert.type === "info" && "ℹ️"}
                </div>

                {/* Alert Details */}
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-700">{alert.title}</h3>
                  <p className="text-gray-600">{alert.description}</p>
                  <p className="text-sm text-gray-500">{alert.timestamp}</p>
                  <p className="text-sm text-gray-500 mt-1">{alert.parameter}</p> {/* Display the parameter */}
                </div>
              </div>

              {/* Action Button */}
              <button className="text-red-500 hover:text-red-700">Clear</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlertsPage;
