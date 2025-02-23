import Navbar from "../components/Navbar";
const Home = () => {
    return (
      <div className="min-h-screen bg-neutral-900 text-white">
        <Navbar />
        <header className="h-screen flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-5xl font-extrabold">
              Transform Your Vision <br />
              <span className="text-[#E0A458]">Into Digital Reality</span>
            </h1>
            <p className="mt-4 text-gray-400">
              Crafting exceptional digital experiences that elevate your brand.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#E0A458] text-black font-semibold rounded-lg hover:bg-[#E0A458]/90"
              >
                Get Started
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 border border-[#E0A458] text-[#E0A458] rounded-lg hover:bg-[#E0A458]/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  };

export default Home;
