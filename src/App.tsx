import { useState, useEffect } from 'react';
import { MathCanvasBackground } from './components/MathCanvasBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { ExperienceSkills } from './components/ExperienceSkills';
import { DiplomasCVHub } from './components/DiplomasCVHub';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ContactsFooter } from './components/ContactsFooter';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`${theme} min-h-screen ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'} relative font-sans selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300`}>
      {/* Background Math Particle Grid */}
      <MathCanvasBackground theme={theme} />

      {/* Main Container */}
      <div className="relative z-10">
        <Header theme={theme} onToggleTheme={toggleTheme} />
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

