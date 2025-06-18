
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">LET'S TALK!</h2>
          <p className="text-gray-400 mb-8 animate-fade-in">Ready to start your next project? Let's discuss how we can work together.</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <a href="mailto:contact@designer.com" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
              <Mail size={20} />
              <span>contact@designer.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
              <Phone size={20} />
              <span>+1 (234) 567-890</span>
            </a>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={20} />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-8 text-sm">
              <span>FIGMA</span>
              <span>BEHANCE</span>
              <span>DRIBBBLE</span>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
