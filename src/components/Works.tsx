
import React from 'react';

const Works = () => {
  const projects = [
    {
      title: "Analytics Application",
      description: "Modern dashboard design for data visualization and analytics platform with intuitive user experience.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["UI/UX", "Dashboard", "Analytics"]
    },
    {
      title: "Fintech Application",
      description: "Financial technology app design focusing on security, usability and modern banking experience.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Mobile", "Fintech", "Security"]
    },
    {
      title: "Zenocide Application",
      description: "E-commerce platform design with focus on user journey optimization and conversion rates.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["E-commerce", "Conversion", "UX"]
    }
  ];

  return (
    <section id="works" className="py-20 px-6 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 animate-fade-in">✨ Works</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors w-fit">
                    View Case
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
