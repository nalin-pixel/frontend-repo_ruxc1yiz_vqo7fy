import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Planner from './components/Planner'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <WhyAI />
      <TripExamples />
      <Features />
      <Gallery />
      <Planner />
      <footer className="bg-white border-t border-gray-200 text-gray-600">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Smart Trippy — Always free.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900" href="/test">Status</a>
            <a className="hover:text-gray-900" href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function WhyAI() {
  const bullets = [
    {
      title: 'Saves hours',
      body: 'Skip 20+ tabs. We compare flights, stays, and activities across top sites and assemble it into one coherent plan.',
    },
    {
      title: 'Only bookable picks',
      body: 'We filter out sold-out listings and dead links so every recommendation is actually available.',
    },
    {
      title: 'Personal to you',
      body: 'Tell us your vibe and constraints — we adapt the route, pacing, and budget automatically.',
    },
    {
      title: 'Live updates',
      body: 'If prices or availability change, your plan adjusts. No more stale spreadsheets.',
    },
  ]
  return (
    <section id="why-ai" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">Why use AI instead of planning yourself?</h2>
            <p className="mt-4 text-gray-700">Travel sites are siloed and move fast. Our AI searches everywhere at once, cross-checks in real time, and builds a single itinerary you can book without the headache.</p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <div>
                    <p className="font-medium">{b.title}</p>
                    <p className="text-gray-600 text-sm">{b.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop" alt="Beach" />
            <img className="rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop" alt="Rice fields" />
            <img className="rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop" alt="City" />
            <img className="rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1200&auto=format&fit=crop" alt="Mountains" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TripExamples() {
  const examples = [
    {
      title: '5 days in Kyoto — Culture & cuisine',
      bullets: ['Stay in a machiya townhouse', 'Kaiseki dinner in Gion', 'Arashiyama bamboo grove sunrise', 'Tea ceremony workshop'],
      img: 'https://images.unsplash.com/photo-1558980664-10d426240b76?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Amalfi Coast long weekend — Sun & sea',
      bullets: ['Sorrento boutique hotel', 'Boat to Capri grotto', 'Lemon grove tour', 'Naples pizza crawl'],
      img: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Iceland road trip — Waterfalls & glaciers',
      bullets: ['Blue Lagoon evening slot', 'South Coast waterfalls', 'Glacier hike with guide', 'Aurora forecast alerts'],
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        {examples.map((ex, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="order-2 md:order-none">
              <h3 className="text-2xl font-semibold">{ex.title}</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ex.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#plan" className="inline-flex mt-6 items-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2">Use this vibe</a>
            </div>
            <div className="order-1 md:order-none">
              <img src={ex.img} alt={ex.title} className="rounded-2xl shadow-sm" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default App
