import { MathCanvasBackground } from './components/MathCanvasBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { ExperienceSkills } from './components/ExperienceSkills';
import { DiplomasCVHub } from './components/DiplomasCVHub';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ContactsFooter } from './components/ContactsFooter';

export function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Math Particle Grid */}
      <MathCanvasBackground />

      {/* Main Container */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Education />
          <ExperienceSkills />
          <DiplomasCVHub />
          <ProjectsShowcase />
          <ContactsFooter />
        </main>
      </div>
    </div>
  );
}

export default App;
