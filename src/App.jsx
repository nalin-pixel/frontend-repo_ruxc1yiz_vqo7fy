import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Planner from './components/Planner'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14]">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Planner />
      <footer className="bg-[#0b0f14] border-t border-white/10 text-white/60">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Smart Trippy — Always free.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="/test">Status</a>
            <a className="hover:text-white" href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
