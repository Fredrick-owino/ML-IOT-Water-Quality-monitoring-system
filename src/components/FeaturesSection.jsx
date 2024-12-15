import React from "react";

const features = [
  {
    title: "Real-Time Monitoring",
    description: "Monitor water levels and quality in real-time using advanced sensors.",
    icon: "🌊",
  },
  {
    title: "Data Visualization",
    description: "View data trends through interactive graphs and charts.",
    icon: "📊",
  },
  {
    title: "Alerts & Notifications",
    description: "Get instant alerts for critical thresholds or anomalies.",
    icon: "🔔",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;