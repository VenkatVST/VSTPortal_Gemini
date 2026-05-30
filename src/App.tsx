/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreCompetencies from './components/CoreCompetencies';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      {/* Sticky Header Navigation bar */}
      <Navbar />

      {/* Main Sections flow */}
      <main id="main-content-flow">
        {/* Dynamic rich intro slider */}
        <Hero />

        {/* Corporate Profile Narrative */}
        <About />

        {/* Interactive Capability Explorer Tab matrices */}
        <CoreCompetencies />

        {/* Dossiers of Key Board Directors */}
        <Leadership />

        {/* Showcased high-end project cases */}
        <Projects />
 
        {/* Unique Value Propositions Grid */}
        <WhyChooseUs />

        {/* Consult and Cost Estimator inquiry terminal */}
        <Contact />
      </main>

      {/* Modern footer layout */}
      <Footer />
    </div>
  );
}

