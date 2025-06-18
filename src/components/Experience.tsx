
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Lead Product Designer",
      company: "airbnb",
      period: "2022 - Present",
      location: "Remote"
    },
    {
      role: "Senior Designer",
      company: "microsoft",
      period: "2020 - 2022",
      location: "Remote"
    },
    {
      role: "UI Designer",
      company: "behance",
      period: "2018 - 2020",
      location: "San Francisco"
    },
    {
      role: "Frontend Developer",
      company: "Squarespace",
      period: "2016 - 2018",
      location: "New York"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 animate-fade-in">✨ Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={`${exp.company}-${exp.role}`}
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-gray-800 hover:bg-gray-900 hover:px-6 hover:rounded-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-2 md:mb-0">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">{exp.period}</p>
                <p className="text-gray-400 text-sm">{exp.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
