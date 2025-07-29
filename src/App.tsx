import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <TechStack />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
