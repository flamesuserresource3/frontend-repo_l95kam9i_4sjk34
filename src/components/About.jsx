export default function About() {
  const skills = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST', 'Jest', 'Cypress', 'Docker', 'CI/CD'
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a developer who loves building crisp, user-centric interfaces and scalable frontends. I focus on performance, accessibility, and great developer experience. I thrive in collaborative teams and enjoy turning complex problems into simple, elegant solutions.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              When I’m not coding, you’ll find me exploring design systems, sketching UI ideas, or contributing to open-source.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Skills</h3>
            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((s) => (
                <li key={s} className="px-3 py-2 rounded-md border border-gray-200 bg-white text-gray-800 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
