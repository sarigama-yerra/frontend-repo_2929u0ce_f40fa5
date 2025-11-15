import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-36">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Available for freelance projects
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            I craft modern, interactive experiences
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Frontend engineer and creative developer focused on delightful, performant interfaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-gray-900 px-5 py-3 text-white shadow hover:shadow-lg transition">View Projects</a>
            <a href="#contact" className="rounded-lg bg-white px-5 py-3 text-gray-900 border border-gray-200 hover:border-gray-300 transition">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent" />
    </section>
  )
}
