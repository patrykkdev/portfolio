import { useState } from 'react';
import Cursor from './components/Cursor';
import ProgressBar from './components/ProgressBar';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useCustomCursor } from './hooks/useCustomCursor';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useScrollProgress();

  useCustomCursor();
  useReveal();

  return (
    <>
      <ProgressBar ref={progressRef} />
      <Cursor />
      <Nav onOpenMenu={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
