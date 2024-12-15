import React from 'react';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('public/assets/carousel/Your paragraph text.png')" }}>
        
        <div className="flex flex-col justify-center items-center h-full text-center text-blue">
          
          
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Services</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Real-Time Monitoring */}
            <div className="text-center bg-white p-6 shadow-lg rounded-lg">
              <img src="public/assets/carousel/Your paragraph text (5).png" alt="Real-Time Monitoring" className="mx-auto " />
              <h3 className="mt-4 text-xl font-semibold">Real-Time Monitoring</h3>
              <p className="mt-2 text-gray-600">
                Keep track of water quality in real-time with our cutting-edge IoT sensors, ensuring quick responses to potential threats.
              </p>
            </div>
            {/* Alert Systems */}
            <div className="text-center bg-white p-6 shadow-lg rounded-lg">
              <img src="public/assets/carousel/iot 15.jpeg" alt="Alert Systems" className="mx-auto " />
              <h3 className="mt-4 text-xl font-semibold">Alert Systems</h3>
              <p className="mt-2 text-gray-600">
                Receive instant notifications for critical conditions, helping to prevent fish kills and maintain ecological balance.
              </p>
            </div>
            {/* Historical Data Analysis */}
            <div className="text-center bg-white p-6 shadow-lg rounded-lg">
              <img src="public/assets/12.jpeg" alt="Historical Data Analysis" className="mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Historical Data Analysis</h3>
              <p className="mt-2 text-gray-600">
                Access historical trends and predictive analysis for proactive decision-making regarding water resource management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-700 text-center"> Why This Technology?</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Innovative Technology */}
            <div className="flex items-center space-x-6">
              <img src="public/assets/carousel/iot7.jpeg" alt="Innovative Technology" className="w-24 h-24 rounded-full" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800">Innovative Technology</h3>
                <p className="text-gray-700">
                  Leverage state-of-the-art sensors and analytics to monitor and protect Lake Victoria like never before.
                </p>
              </div>
            </div>
            {/* Sustainability */}
            <div className="flex items-center space-x-6">
              <img src="public/assets/carousel/13.jpeg" alt="Sustainability" className="w-24 h-24 rounded-full" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800">Commitment to Sustainability</h3>
                <p className="text-gray-700">
                  Our solutions focus on ecological preservation and sustainable development for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready for caged Fish Farmig At Victoria?</h2>
          <p className="mt-4 text-lg">
            Join us in our mission to uncover fish kills risks reduction upto 80% ensure water safety and sustainability. Explore our services or contact us for more information.
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
