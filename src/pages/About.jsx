import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-96"
        data-aos="fade-in" // AOS Animation for Hero Section
      >
        <img 
          src="assets/carousel/Your paragraph text (5).png" 
          alt="Aquaculture Hero Image" 
          className="object-cover w-full h-full opacity-50"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue"
          data-aos="fade-up" // AOS Animation for Hero Text
        >
          <h1 className="text-4xl font-semibold">Empowering Aquaculture with IoT & Machine Learning</h1>
          <p className="mt-4 text-lg">Revolutionizing fish farming for a sustainable future.</p>
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
            className="w-full max-w-screen-xl mx-auto"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div
        className="bg-gray-100 p-8 rounded-lg shadow-lg"
        data-aos="fade-right" // AOS Animation for Mission Section
      >
        <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
        <p className="mt-4 text-lg text-gray-600">
          We focus on integrating IoT technologies with aquaculture to prevent fish kills and optimize the management of aquatic farms. By utilizing machine learning algorithms, we aim to predict and mitigate risks, enhance water quality monitoring, and provide actionable insights for farmers.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Through collaboration with local farmers and researchers, we are developing solutions that make aquaculture more efficient, sustainable, and environmentally friendly. Our commitment is to innovate and adapt to the challenges faced by the industry, ensuring a better tomorrow.
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-16 text-center" data-aos="zoom-in">
        <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
        <div className="flex justify-center gap-8 mt-6 flex-wrap">
          {/* Team Member 1 */}
          <div
            className="text-center"
            data-aos="flip-left" // AOS Animation for Team Member
          >
            <img 
              src="/assets/carousel/Your paragraph text (5).png" 
              alt="Team Member 1" 
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">Dr. Mathew M. Egessa</p>
          </div>

          {/* Team Member 2 */}
          <div
            className="text-center"
            data-aos="flip-left" // AOS Animation for Team Member
          >
            <img 
              src="/assets/carousel/Your paragraph text (5).png" 
              alt="Team Member 2" 
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">Dr. Paul Orina</p>
          </div>

          {/* Team Member 3 */}
          <div
            className="text-center"
            data-aos="flip-left" // AOS Animation for Team Member
          >
            <img 
              src="/assets/carousel/Your paragraph text (5).png" 
              alt="Team Member 3" 
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">Eng. Aggrey S Shitsukane</p>
          </div>

          {/* Team Member 4 */}
          <div
            className="text-center"
            data-aos="flip-left" // AOS Animation for Team Member
          >
            <img 
              src="/assets/carousel/Your paragraph text (5).png" 
              alt="Team Member 4" 
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">Mr. Kelvin K Omieno</p>
          </div>
        </div>
        <p className="mt-4 text-lg text-gray-600">Meet the passionate individuals behind our project!</p>
      </div>
    </div>
  );
};

export default About;
