import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative cursor-none"> {/* cursor-none بتخفي ماوس الويندوز العادي */}
      <CustomCursor />
      
      {/* باقي عناصر ومكونات البورتفوليو بتاعك */}
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';

import ParticleBackground from './components/ParticleBackground';

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

    <div className="relative min-h-screen overflow-x-hidden page-bg">

      <ParticleBackground />

      <div className="relative" style={{ zIndex: 1 }}>

        <Navbar />

        <main>

          <Hero />

          <About />

          <Skills />

          <Statistics />

          <WorkProcess />

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
