import Navbar from './components/Navbar';

import AnimatedBackground from './components/AnimatedBackground';
// لو اسم الملف عندك AnimatedBackground استخدمي السطر اللي تحته بدل ParticleBackground:
// import AnimatedBackground from './components/AnimatedBackground';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Statistics from './components/Statistics';
import WorkProcess from './components/WorkProcess';
import LearningJourney from './components/LearningJourney';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CTA from './components/CTA';
import PersonalQuote from './components/PersonalQuote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden page-bg text-white">
      
      {/* 🌟 الخلفية المتحركة للموقع كله متثبتة */}
     {/* 🌟 الخلفية المتحركة للموقع كله */}
<div className="fixed inset-0 pointer-events-none z-0">
  <AnimatedBackground />
</div>

      {/* باقي أجزاء الموقع فوق الخلفية */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Statistics />
          <LearningJourney />
          <Projects />
          <PersonalQuote />
          <Contact />
          <CTA />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;
