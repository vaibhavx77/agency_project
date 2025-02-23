import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="fixed w-full z-50 bg-neutral-900/95 backdrop-blur-sm px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-[#E0A458] text-2xl font-bold">Agency</Link>
        <div className="hidden md:flex space-x-6">
          {[
            "Home",
            "Services",
            "About",
            "Portfolio",
            "Process",
            "Testimonials",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-[#E0A458] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    );
  };

export default Navbar;
