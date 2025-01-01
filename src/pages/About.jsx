import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
       
      >
        <img 
          src="assets/carousel/Your paragraph text (5).png" 
          alt="Aquaculture Hero Image" 
          className="object-cover w-700 h-1920"
        />
        <div
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black"
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-semibold">Empowering Aquaculture with IoT & Machine Learning</h1>
          <p className="mt-4 text-lg">
            Revolutionizing fish farming for a sustainable future.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-8" data-aos="fade-up">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are dedicated to preventing fish kills and improving aquaculture
            using IoT and machine learning technologies. Our team is committed to
            creating sustainable and smart solutions for the aquaculture industry,
            ensuring a better future for both aquatic life and farmers.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full mb-12">
          <img 
            src="/assets/carousel/Your paragraph text (1).png" 
            alt="IoT in Aquaculture" 
            className="w-full max-w-screen-xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div
        className="bg-gray-100 p-8 rounded-lg shadow-lg"
        data-aos="fade-right"
      >
        <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
        <p className="mt-4 text-lg text-gray-600">
          We focus on integrating IoT technologies with aquaculture to prevent fish kills and optimize the management of aquatic farms. By utilizing machine learning algorithms, we aim to predict and mitigate risks, enhance water quality monitoring, and provide actionable insights for farmers.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Through collaboration with local farmers and researchers, we are developing solutions that make aquaculture more efficient, sustainable, and environmentally friendly. Our commitment is to innovate and adapt to the challenges faced by the industry, ensuring a better tomorrow.
        </p>
      </div>

      {/* Timeline of Achievements Section */}
      <div className="container mx-auto px-4 py-16" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-center text-gray-800">Timeline of Achievements</h3>
        <div className="mt-8 space-y-4">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-gray-800">2023 January</p>
            <p className="text-lg text-gray-600">Launched the pilot IoT-based fish farm monitoring system.</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-gray-800">2024 January</p>
            <p className="text-lg text-gray-600">First successful partnership with local aquaculture farms.</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-gray-800">2024 June</p>
            <p className="text-lg text-gray-600">Integration of machine learning for predictive analysis of water quality.</p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gray-50 py-16" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Our Impact</h3>
          <p className="mt-4 text-lg text-gray-600">
            By using IoT and machine learning, we’re not just improving farming efficiency; we’re saving ecosystems, boosting sustainability, and empowering farmers to predict and prevent fish kills before they happen.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800">Reduced Fish Kills</h4>
              <p className="mt-2 text-gray-600">Our system predicts critical environmental changes that reduce the occurrence of fish kills, improving farm yields.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800">Sustainable Farming</h4>
              <p className="mt-2 text-gray-600">With real-time monitoring and AI-based predictions, we ensure aquaculture operations are more sustainable and environmentally friendly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800">Empowered Farmers</h4>
              <p className="mt-2 text-gray-600">Our technology empowers farmers with data-driven insights to make informed decisions, reducing waste and maximizing profits.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 text-center" data-aos="zoom-in">
        <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
        <div className="flex justify-center gap-8 mt-6 flex-wrap">
          {/* Team Member 1 */}
          <div
            className="text-center"
            data-aos="flip-left"
          >
            <img 
              src="/assets/carousel/Your paragraph text (5).png" 
              alt="Team Member 1" 
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">Dr. Mathew M. Egessa</p>
            <p className="text-gray-500">Lead Scientist</p>
          </div>

          {/* Team Member 2 */}
          <div
            className="text-center"
            data-aos="flip-left"
          >
            <img 
              src="/assets/carousel/Your paragraph text (5).png" 
              alt="Team Member 2" 
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">Dr. Paul Orina</p>
            <p className="text-gray-500">Aquaculture Specialist</p>
          </div>


          {/* Team Member 3 */}
          <div
            className="text-center"
            data-aos="flip-left"
          >
            <img 
              src="/assets/carousel/Your paragraph text (5).png" 
              alt="Team Member 3" 
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">Eng. Aggrey S Shitsukane</p>
            <p className="text-gray-500">Tech Lead</p>
          </div>


          {/* Team Member 4 */}
          <div
            className="text-center"
            data-aos="flip-left"
          >
            <img 
              src="/assets/carousel/Your paragraph text (5).png" 
              alt="Team Member 4" 
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">Mr. Kelvin K Omieno</p>
            <p className="text-gray-500">Aquaculture Specialist</p>
          </div>


          {/* Team Member 5 */}
          <div
            className="text-center"
            data-aos="flip-left"
          >
            <img 
              src="/assets/carousel/Your paragraph text (5).png" 
              alt="Team Member 3" 
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">Fredrick Onyango</p>
            <p className="text-gray-500">Research Assistant</p>
          </div>

          
          {/* Team Member 6 */}
          <div
            className="text-center"
            data-aos="flip-left"
          >
            <img 
              src="/assets/carousel/Your paragraph text (5).png" 
              alt="Team Member 3" 
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">Vincent</p>
            <p className="text-gray-500">Research Assistant</p>
          </div>
        </div>
        <p className="mt-4 text-lg text-gray-600">Meet the passionate individuals behind our project!</p>
      </div>
      
      

      {/* Call-to-Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold">Join Us in Revolutionizing Aquaculture!</h3>
          <p className="mt-4 text-lg">If you’re interested in learning more or becoming a partner, reach out to us today and be part of the future of sustainable farming.</p>
          <button className="mt-8 px-8 py-2 bg-yellow-500 text-gray-800 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">Get Involved</button>
        </div>
      </div>
    </div>
  );
};

export default About;
