const features = [
  {
    title: "Real-Time Monitoring",
    description:
      "Monitor water levels, temperature, pH, and dissolved oxygen in real-time using advanced IoT sensors strategically placed across Lake Victoria, ensuring the safety of the ecosystem and the health of the fish.",
    icon: "🌊",
    link: "/visualization",
  },
  {
    title: "Data Visualization",
    description:
      "View detailed data trends and insights through interactive graphs, charts, and heatmaps, providing a clear picture of water quality fluctuations and helping fish farmers make informed decisions.",
    icon: "📊",
    link: "/visualization",
  },
  {
    title: "Alerts & Notifications",
    description:
      "Receive instant notifications and alerts when water quality parameters cross critical thresholds, allowing for timely intervention to prevent fish kills and other ecological threats.",
    icon: "🔔",
    link: "/alerts",
  },
  {
    title: "Machine Learning Predictions",
    description:
      "Leverage advanced machine learning models to predict risks like fish kills based on environmental data, empowering fish farmers with predictive insights for better planning and proactive management.",
    icon: "🤖",
    link: "#ml-predictions",
  },
  {
    title: "Field Data Collection",
    description:
      "Work alongside local researchers and experts to collect ground truth data, ensuring the accuracy and reliability of the sensor data and further enhancing the system’s predictive capabilities.",
    icon: "📚",
    link: "#field-data-collection",
  },
  {
    title: "Training & Support",
    description:
      "Benefit from comprehensive training sessions for farmers, helping them adapt to modern IoT-based aquaculture management systems and empowering them with the knowledge to optimize farm productivity and sustainability.",
    icon: "🎓",
    link: "#training-support",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-100" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Key Features of Our System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <a
              href={feature.link}
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4 text-blue-500">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

