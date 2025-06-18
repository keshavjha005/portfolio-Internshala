
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 animate-fade-in">✨ What they say</h2>
        
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold">John Miller</h3>
              <p className="text-gray-400 text-sm">CEO, TechStartup</p>
            </div>
          </div>
          
          <blockquote className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
            "Working with this designer was fantastic. The project was completed on time, within budget, and exceeded our expectations. The attention to detail and professional communication made the entire process smooth and enjoyable."
          </blockquote>
          
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
