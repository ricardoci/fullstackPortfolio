import React from 'react';
import AboutSection from '../components/AboutSection';

import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}
