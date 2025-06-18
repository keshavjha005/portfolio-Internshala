
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8">
        <div className="text-xl font-bold">RL</div>
        
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#expertise" className="hover:text-gray-300 transition-colors">EXPERTISE</a>
          <a href="#works" className="hover:text-gray-300 transition-colors">WORKS</a>
          <a href="#experience" className="hover:text-gray-300 transition-colors">EXPERIENCE</a>
          <a href="#blog" className="hover:text-gray-300 transition-colors">BLOG</a>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black z-50 p-6 animate-fade-in">
          <div className="flex flex-col space-y-4 text-sm">
            <a href="#expertise" className="hover:text-gray-300 transition-colors">EXPERTISE</a>
            <a href="#works" className="hover:text-gray-300 transition-colors">WORKS</a>
            <a href="#experience" className="hover:text-gray-300 transition-colors">EXPERIENCE</a>
            <a href="#blog" className="hover:text-gray-300 transition-colors">BLOG</a>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-8">
        <div className="text-center max-w-6xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in">
            I AM A <span className="text-blue-500">UX</span> FREELANCE<br />
            DESIGNER <span className="text-blue-500">🔥</span> FROM<br />
            SAN FRANCISCO
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs md:text-sm text-gray-400 animate-fade-in">
            <div>
              <div className="font-semibold text-white mb-1">8 YEARS</div>
              <div>EXPERIENCE</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">+5 MINS</div>
              <div>RESPONSE TIME</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">DRIBBBLE</div>
              <div>TOP DESIGNER</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">REMOTE WORK</div>
              <div>AVAILABLE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
