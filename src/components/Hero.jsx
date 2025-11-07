import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium bg-black/80 text-white rounded-full px-3 py-1 shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance & remote roles
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Hi, I’m <span className="text-blue-600">Your Name</span> — Frontend Engineer
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            I craft fast, accessible, and delightful web experiences with React, TypeScript, and modern tooling.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
