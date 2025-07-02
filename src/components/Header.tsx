
import { Menu, X, Package } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 transform transition-all duration-300 hover:scale-105">
            <Package className="h-8 w-8 text-blue-600 animate-pulse" />
            <span className="text-xl md:text-2xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Samarth Packwell
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transform transition-all duration-300 hover:scale-110 hover:bg-gray-100 p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2">Contact</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
