
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import GlpProgram from '@/components/GlpProgram';
import HealthcareServices from '@/components/HealthcareServices';
import BusinessBenefits from '@/components/BusinessBenefits';
import Pricing from '@/components/Pricing';
import Trust from '@/components/Trust';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>KonnectMD | 24/7 Affordable Virtual Healthcare</title>
        <meta name="description" content="Access 4000+ board-certified providers with $0 visit fees. Affordable virtual healthcare for individuals and businesses." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-[#F5F9FF] via-[#EFF6FF] to-white overflow-x-hidden selection:bg-[#4169E1] selection:text-white">
        <Header />
        <Hero />
        <HowItWorks />
        <HealthcareServices />
        <BusinessBenefits />
        <GlpProgram />
        <Pricing />
        <Trust />
        <FAQ />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
