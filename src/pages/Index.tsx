
import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Works from '../components/Works';
import Experience from '../components/Experience';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
