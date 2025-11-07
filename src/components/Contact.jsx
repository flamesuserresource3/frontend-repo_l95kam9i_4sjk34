import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s build something great</h2>
          <p className="mt-3 text-gray-600">I’m open to freelance projects, collaborations, and full-time opportunities.</p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-800">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-800">
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            <Mail className="w-5 h-5" /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
