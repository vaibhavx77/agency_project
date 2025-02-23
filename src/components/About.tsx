import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Transforming Ideas into <span className="text-[#E0A458]">Digital Excellence</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              With over 5 years of experience in digital craftsmanship, we specialize in creating
              powerful digital solutions that drive real business results. Our approach combines
              technical expertise with creative innovation.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-neutral-800 rounded-lg">
                <div className="text-[#E0A458] text-3xl font-bold mb-2">100+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="p-4 bg-neutral-800 rounded-lg">
                <div className="text-[#E0A458] text-3xl font-bold mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E0A458]/20 to-[#419D78]/20 rounded-3xl filter blur-xl opacity-70"></div>
            <div className="relative bg-neutral-800 p-8 rounded-3xl border border-neutral-700">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">about.jsx</div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-neutral-700 rounded w-3/4"></div>
                  <div className="h-4 bg-neutral-700 rounded w-1/2"></div>
                  <div className="h-4 bg-neutral-700 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;