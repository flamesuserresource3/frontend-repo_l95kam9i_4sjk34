import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight text-gray-900">
          <span className="text-blue-600">&lt;/&gt;</span> Dev Portfolio
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Get in touch
        </a>
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 text-gray-700"
          onClick={() => {
            const el = document.getElementById('mobile-menu');
            if (el) el.classList.toggle('hidden');
          }}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </nav>
      <div id="mobile-menu" className="md:hidden hidden border-t border-gray-200 bg-white/90 backdrop-blur">
        <ul className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  const el = document.getElementById('mobile-menu');
                  if (el) el.classList.add('hidden');
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="block px-2 py-2 rounded-md bg-blue-600 text-white text-center">Get in touch</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
