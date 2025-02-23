import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2D3047] sm:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your online presence and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-[#E0A458]/10 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#E0A458]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2D3047] mb-3">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Custom websites and web applications built with modern technologies and best practices.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-[#E0A458] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Responsive Design
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-[#E0A458] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Performance Optimization
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-[#E0A458] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                SEO-Friendly Code
              </li>
            </ul>
          </div>

          {/* Add more services here */}
        </div>
      </div>
    </section>
  );
};

export default Services;