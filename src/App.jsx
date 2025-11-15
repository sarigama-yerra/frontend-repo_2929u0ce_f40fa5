import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="/test" className="underline hover:text-gray-900">System Test</a>
        </div>
      </footer>
    </div>
  )
}

export default App
