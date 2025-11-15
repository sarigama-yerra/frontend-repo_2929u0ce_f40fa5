import { Code2, Sparkles, FolderGit2, Mail } from 'lucide-react'

export default function Sections() {
  const projects = [
    {
      title: 'Interactive Data Dashboard',
      desc: 'A responsive analytics dashboard with realtime charts and filters.',
      tags: ['React', 'Tailwind', 'Chart.js'],
      link: '#',
    },
    {
      title: '3D Landing Experience',
      desc: 'Playful 3D hero with WebGL interactions and smooth scroll scenes.',
      tags: ['Spline', 'Three.js', 'Framer Motion'],
      link: '#',
    },
    {
      title: 'AI-Powered Notes',
      desc: 'Smart notes with semantic search and offline-first sync.',
      tags: ['FastAPI', 'MongoDB', 'PWA'],
      link: '#',
    },
  ]

  const skills = [
    'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Three.js', 'Spline', 'FastAPI', 'MongoDB', 'Node.js', 'GraphQL'
  ]

  return (
    <>
      <section id="about" className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs">
                <Sparkles size={14} /> About
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A blend of design & engineering</h2>
              <p className="mt-4 text-gray-600 leading-7">
                I love building immersive interfaces that feel fast and playful. My approach blends strong design
                sense with robust engineering practices to deliver polished products.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
                <Code2 size={16} className="text-gray-900" /> 5+ years crafting web experiences
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-gray-50 to-white shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {skills.map((s) => (
                  <div key={s} className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 text-indigo-700">
            <FolderGit2 size={18} />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a key={p.title} href={p.link} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 text-indigo-700">
            <Mail size={18} />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch</h2>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-gray-700">Have a project in mind? Let’s chat about how I can help bring it to life.</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Email: <a href="mailto:you@example.com" className="underline">you@example.com</a></li>
                <li>LinkedIn: <a href="https://linkedin.com" className="underline" target="_blank" rel="noreferrer">linkedin.com/in/you</a></li>
                <li>GitHub: <a href="https://github.com" className="underline" target="_blank" rel="noreferrer">github.com/you</a></li>
              </ul>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <input placeholder="Your name" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input placeholder="Email" type="email" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <textarea placeholder="Tell me about your project" rows={4} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <button className="rounded-lg bg-gray-900 px-5 py-3 text-white hover:shadow-lg transition">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
