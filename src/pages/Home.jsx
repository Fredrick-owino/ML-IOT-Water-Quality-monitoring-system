import React from "react";

import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Captivating Intro */}
        <section className="py-12 text-center bg-white">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Revolutionizing Aquaculture for Sustainability
          </h2>
          <p className="text-lg text-gray-600">
            Our smart water monitoring system ensures real-time tracking and predictive analysis
            to safeguard aquatic ecosystems and empower fish farmers.
          </p>
        </section>
        

        {/* Image Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-100">
          {/* Image 1 */}
          <div>
            <img
              src="/assets/carousel/Your paragraph text (2).png"
              alt="Water Quality Sensors"
              className="rounded-lg shadow-md"
            />
            <p className="text-center mt-4 text-gray-700">
              Real-time sensors deployed across Lake Victoria to measure critical water quality parameters
              such as pH, temperature, and dissolved oxygen, providing invaluable data to monitor the health of aquatic ecosystems and prevent harmful algae blooms.
            </p>
          </div>

          {/* Image 2 */}
          <div>
            <img
              src="assets/carousel/Shahero-bg.jpg.jpg"
              alt="Machine Learning Analytics"
              className="rounded-lg shadow-md"
            />
            <p className="text-center mt-4 text-gray-700">
              Advanced machine learning models analyze trends in real-time data, predicting potential risks like fish kills or water quality degradation, and providing early warnings for better decision-making.
            </p>
          </div>

          {/* Image 3 */}
          <div>
            <img
              src="assets/carousel/Your paragraph text (3).png"
              alt="Farmers using Dashboards"
              className="rounded-lg shadow-md"
            />
            <p className="text-center mt-4 text-gray-700">
              Empowering fish farmers with intuitive, user-friendly dashboards and actionable insights, enabling them to make informed decisions, optimize resource usage, and improve farm productivity.
            </p>
          </div>

          {/* Image 4 */}
          <div>
            <img
              src="assets/carousel/data test.jpeg"
              alt="Field Work & Data Collection"
              className="rounded-lg shadow-md"
            />
            <p className="text-center mt-4 text-gray-700">
              Collaborating with local researchers and experts to ensure accurate data collection, validation, and ground-truthing, enabling robust system performance and real-world application of our technology.
            </p>
          </div>

          {/* Image 5 */}
          <div>
            <img
              src="assets/smart system.jpeg"
              alt="Lake Monitoring Deployment"
              className="rounded-lg shadow-md"
            />
            <p className="text-center mt-4 text-gray-700">
              Sensor nodes strategically deployed across Lake Victoria, especially in cage farms, ensure continuous and comprehensive monitoring of critical environmental factors, giving a clear overview of water quality and ecosystem health.
            </p>
          </div>

          {/* Image 6 */}
          <div>
            <img
              src="assets/carousel/testing.jpeg"
              alt="Training Farmers"
              className="rounded-lg shadow-md"
            />
            <p className="text-center mt-4 text-gray-700">
              Conducting hands-on training sessions for local fish farmers to help them adapt to IoT solutions and technology-driven practices, ensuring they are equipped with the knowledge to optimize their operations and adapt to modern aquaculture methods.
            </p>
          </div>

          {/* Image 7 */}
          <div className="md:col-span-2">
            <img
              src="assets/carousel/dr.jpeg"
              alt="Environmental Impact"
              className="rounded-lg shadow-md"
            />
            <p className="text-center mt-4 text-gray-700">
              Ensuring environmental sustainability through data-driven aquaculture management by promoting eco-friendly practices and reducing overfishing, water pollution, and other harmful impacts on aquatic ecosystems.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
