import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    desc: 'WebSocket-powered chat with rooms, typing indicators, and message persistence.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1640&auto=format&fit=crop',
    github: 'https://github.com/',
    live: '#',
    tags: ['React', 'Socket.io', 'Node']
  },
  {
    title: 'E-commerce Storefront',
    desc: 'Modern storefront with product search, cart, and checkout integrations.',
    image: 'https://images.unsplash.com/photo-1688561809321-e51e8a4d6651?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwU3RvcmVmcm9udHxlbnwwfDB8fHwxNzYyNDc2NTUxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    github: 'https://github.com/',
    live: '#',
    tags: ['Next.js', 'Stripe', 'Tailwind']
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Interactive charts, role-based access, and dark mode support.',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFseXRpY3MlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MjQ3NjU1MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    github: 'https://github.com/',
    live: '#',
    tags: ['React', 'Recharts', 'Firebase']
  },
  {
    title: 'Portfolio Generator',
    desc: 'CLI tool to scaffold beautiful portfolios from a single config file.',
    image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?q=80&w=1640&auto=format&fit=crop',
    github: 'https://github.com/',
    live: '#',
    tags: ['Node', 'CLI', 'Templates']
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
          <a href="#contact" className="hidden sm:inline text-sm text-blue-600 hover:text-blue-700">Need something similar?</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-44 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-xs bg-black/70 text-white">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
