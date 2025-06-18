
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your design process?",
      answer: "My design process includes research, wireframing, prototyping, user testing, and final implementation. I work closely with clients throughout each phase to ensure the final product meets their goals and user needs."
    },
    {
      question: "What tools and software do you use for UX design?",
      answer: "I primarily use Figma for design and prototyping, along with tools like Miro for collaboration, Principle for advanced animations, and various user research tools depending on the project requirements."
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer: "Success is measured through various metrics including user engagement, conversion rates, task completion rates, user satisfaction scores, and business KPIs. I also conduct usability testing and gather user feedback regularly."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 animate-fade-in">✨ Frequently asked questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-750 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
