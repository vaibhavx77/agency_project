import React from 'react';

const Scheduler: React.FC = () => {
  return (
    <section id="scheduler" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">Schedule a Meeting</h2>
            <p className="text-gray-300 mb-8">
              Let's discuss your project and explore how we can help bring your vision to life.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#E0A458] text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">30-Minute Consultation</h3>
                  <p className="mt-2 text-gray-300">Brief introduction and project discussion</p>
                </div>
              </div>

              {/* Add more scheduler options here */}
            </div>
          </div>

          {/* Right Column - Calendar */}
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <div className="calendly-inline-widget" data-url="https://calendly.com/your-account" style={{ minWidth: '320px', height: '700px' }}></div>
          </div>
        </div>
      </div>

      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </section>
  );
};

export default Scheduler;