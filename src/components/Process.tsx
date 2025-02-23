import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Our Development Process</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A structured approach to delivering exceptional results for your digital projects.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full bg-[#E0A458]/20 transform -translate-x-1/2"></div>

          {/* Process Steps */}
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="relative lg:flex lg:items-center">
              <div className="hidden lg:block absolute left-1/2 w-6 h-6 rounded-full bg-[#E0A458] transform -translate-x-1/2 z-10"></div>
              <div className="lg:w-1/2 lg:pr-16 text-right">
                <div className="bg-neutral-800 p-6 rounded-2xl hover:bg-neutral-800/80 transition-all duration-300">
                  <span className="text-[#E0A458] text-sm font-semibold">STEP 01</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">Discovery & Planning</h3>
                  <p className="text-gray-300">
                    We begin by understanding your goals, target audience, and project requirements to
                    create a comprehensive strategy.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2"></div>
            </div>

            {/* Add more steps here */}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#E0A458] hover:bg-[#E0A458]/90 transition duration-200"
            >
              Start Your Project
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;