
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "How UX works in web",
      date: "Oct 15, 2024",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop"
    },
    {
      title: "Case Study - Analytics Application",
      date: "Oct 12, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "5 ways to develop your skill",
      date: "Oct 8, 2024",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold animate-fade-in">✨ Blog</h2>
          <a href="#" className="text-sm hover:text-gray-300 transition-colors">View All</a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.title}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold mb-4">{post.title}</h3>
                <div className="flex items-center text-sm hover:text-blue-400 transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
