import React from 'react';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('public/assets/carousel/Your paragraph text.png')" }}>
        <div className="flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-4xl font-bold">Innovative Solutions for Sustainable Aquaculture</h1>
          <p className="mt-4 text-lg">Harness the power of IoT and Machine Learning to protect Lake Victoria and its ecosystems.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Our Services</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Real-Time Monitoring */}
            <div className="text-center bg-white p-6 shadow-lg rounded-lg">
              <img src="assets/carousel/Your paragraph text (5).png" alt="Real-Time Monitoring" className="mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Real-Time Monitoring</h3>
              <p className="mt-2 text-gray-600">
                Keep track of water quality in real-time with our cutting-edge IoT sensors, ensuring quick responses to potential threats.
              </p>
              <button className="mt-4 text-teal-500 font-semibold">Learn More</button>
            </div>
            {/* Alert Systems */}
            <div className="text-center bg-white p-6 shadow-lg rounded-lg">
              <img src="assets/carousel/iot 15.jpeg" alt="Alert Systems" className="mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Alert Systems</h3>
              <p className="mt-2 text-gray-600">
                Receive instant notifications for critical conditions, helping to prevent fish kills and maintain ecological balance.
              </p>
              <button className="mt-4 text-teal-500 font-semibold">Learn More</button>
            </div>
            {/* Historical Data Analysis */}
            <div className="text-center bg-white p-6 shadow-lg rounded-lg">
              <img src="assets/12.jpeg" alt="Historical Data Analysis" className="mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Historical Data Analysis</h3>
              <p className="mt-2 text-gray-600">
                Access historical trends and predictive analysis for proactive decision-making regarding water resource management.
              </p>
              <button className="mt-4 text-teal-500 font-semibold">Learn More</button>
            </div>
          </div>
        </div>
      </section>

  {/* Why This Technology */}
<section className="py-16 bg-teal-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-teal-700 text-center">Why Choose This Technology?</h2>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Benefit 1: Real-Time Insights */}
      <div className="text-center bg-white p-6 shadow-lg rounded-lg">
        <img src="assets/carousel/iot7.jpeg" alt="Real-Time Insights" className="w-24 h-24 rounded-full mx-auto" />
        <h3 className="text-xl font-semibold text-teal-800">Real-Time Insights</h3>
        <p className="mt-2 text-gray-700">
          Get immediate access to water quality data, enabling proactive decision-making to prevent fish kills and environmental damage.
        </p>
      </div>
      {/* Benefit 2: Advanced Data Analytics */}
      <div className="text-center bg-white p-6 shadow-lg rounded-lg">
        <img src="assets/carousel/test1.jpeg" alt="Advanced Data Analytics" className="w-24 h-24 rounded-full mx-auto" />
        <h3 className="text-xl font-semibold text-teal-800">Advanced Data Analytics</h3>
        <p className="mt-2 text-gray-700">
          Utilize predictive analytics to forecast potential risks and trends, improving long-term water management and sustainability.
        </p>
      </div>
      {/* Benefit 3: Sustainability Focus */}
      <div className="text-center bg-white p-6 shadow-lg rounded-lg">
        <img src="assets/smart system.jpeg" alt="Sustainability Focus" className="w-24 h-24 rounded-full mx-auto" />
        <h3 className="text-xl font-semibold text-teal-800">Commitment to Sustainability</h3>
        <p className="mt-2 text-gray-700">
          Our technology supports eco-friendly practices, minimizing the environmental footprint while enhancing aquatic life preservation.
        </p>
      </div>
    </div>

    {/* Key Features */}
    <div className="mt-12 text-center">
      <h3 className="text-2xl font-semibold text-teal-800">Key Features</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <p className="text-lg text-gray-700">Efficient Data Collection</p>
        </div>
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v18h14V3H5z"></path>
          </svg>
          <p className="text-lg text-gray-700">Real-Time Alerts</p>
        </div>
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v12m0 0v-12m0 0H8m4 0h4"></path>
          </svg>
          <p className="text-lg text-gray-700">Predictive Analysis</p>
        </div>
      </div>
    </div>

    {/* How It Works */}
    <div className="mt-12 bg-teal-50 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-teal-700 text-center">How It Works</h3>
      <p className="mt-4 text-lg text-gray-700 text-center">
        Our system integrates IoT sensors, data analytics, and machine learning models to monitor water quality and predict potential threats in real time. It automatically collects data, processes it through sophisticated algorithms, and provides actionable insights to prevent environmental hazards.
      </p>
    </div>

    {/* Success Metrics */}
    <div className="mt-12 text-center">
      <h3 className="text-2xl font-semibold text-teal-700">Our Impact</h3>
      <div className="mt-6 flex justify-center space-x-10">
        <div>
          <h4 className="text-xl font-bold text-teal-700">80%</h4>
          <p className="text-gray-600">Reduction in Fish Kills</p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-teal-700">95%</h4>
          <p className="text-gray-600">Increase in Water Quality</p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-teal-700">50%</h4>
          <p className="text-gray-600">Faster Response Times</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Farmers Responce During Testing Period</h2>
          <div className="mt-10 space-y-8">
            <div className="text-xl font-semibold text-teal-700">
              "The real-time monitoring system has been a game-changer for our fish farm. We’ve reduced fish kills by 70%!"
              <p className="mt-2 text-gray-600">- Victor Omollo, Fish Farm Owner</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready for Caged Fish Farming at Lake Victoria?</h2>
          <p className="mt-4 text-lg">
            Join us in our mission to reduce fish kills by up to 80%, ensure water safety, and promote sustainability. Explore our services or contact us for more information.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;
