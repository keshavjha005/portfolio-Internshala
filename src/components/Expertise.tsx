
import React from 'react';

const Expertise = () => {
  const expertiseItems = [
    {
      title: "Branding",
      description: "Create visual brand identity from concept to completion. Including logos, color palettes, typography, and brand guidelines that represent your business values."
    },
    {
      title: "UI Design",
      description: "Design intuitive and engaging user interfaces for web and mobile applications. Focus on usability, accessibility, and modern design principles."
    },
    {
      title: "UX Design",
      description: "Research, prototype, and test user experiences to create meaningful interactions. Using data-driven design decisions and user-centered methodology."
    },
    {
      title: "Development",
      description: "Transform designs into functional websites and applications using modern technologies. Clean, maintainable code with responsive design principles."
    }
  ];

  return (
    <section id="expertise" className="py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 animate-fade-in">✨ Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {expertiseItems.map((item, index) => (
            <div 
              key={item.title}
              className="animate-fade-in hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">• {item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
