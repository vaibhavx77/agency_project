

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the height of the viewport
      const viewportHeight = window.innerHeight;
      // Get the top position of the section relative to the document
      const elementTop = element.offsetTop;
      // Get the height of the section
      const elementHeight = element.offsetHeight;
      // Calculate the middle of the section
      const scrollToPosition = elementTop + elementHeight / 2 - viewportHeight / 2;

      // Scroll to the calculated position
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });

      // Update the active section
      setActiveSection(id);

      // Close the menu on small screens after clicking a link
      setIsMenuOpen(false);
    }
  };


  return (
    <header className="bg-neutral-800/80 backdrop-blur  py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Freelance Agency</h1>

        {/* Toggle Button for Small Screens */}
        <button
          className="md:hidden text-gray-300 hover:text-[#E0A458] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-neutral-800 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
            <li>
              <button
                onClick={() => handleScroll('home')}
                className={`text-gray-300 hover:text-[#E0A458] ${
                  activeSection === 'home' ? 'text-[#E0A458]' : ''
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('services')}
                className={`text-gray-300 hover:text-[#E0A458] ${
                  activeSection === 'services' ? 'text-[#E0A458]' : ''
                }`}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('about')}
                className={`text-gray-300 hover:text-[#E0A458] ${
                  activeSection === 'about' ? 'text-[#E0A458]' : ''
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('portfolio')}
                className={`text-gray-300 hover:text-[#E0A458] ${
                  activeSection === 'portfolio' ? 'text-[#E0A458]' : ''
                }`}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('process')}
                className={`text-gray-300 hover:text-[#E0A458] ${
                  activeSection === 'process' ? 'text-[#E0A458]' : ''
                }`}
              >
                Process
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('testimonials')}
                className={`text-gray-300 hover:text-[#E0A458] ${
                  activeSection === 'testimonials' ? 'text-[#E0A458]' : ''
                }`}
              >
                Testimonials
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('scheduler')}
                className={`text-gray-300 hover:text-[#E0A458] ${
                  activeSection === 'scheduler' ? 'text-[#E0A458]' : ''
                }`}
              >
                Schedule
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('contact')}
                className={`text-gray-300 hover:text-[#E0A458] ${
                  activeSection === 'contact' ? 'text-[#E0A458]' : ''
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;