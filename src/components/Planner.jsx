import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Planner() {
  const [form, setForm] = useState({ destination: '', travelers: 2, style: 'relaxed', budget: 'mid' })
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState(null)
  const [error, setError] = useState('')

  const nights = useMemo(() => {
    if (!plan) return 0
    return plan.nights
  }, [plan])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  const requestPlan = async (e) => {
    e?.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${apiBase}/api/plan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to generate plan')
      const data = await res.json()
      setPlan(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="plan" className="bg-[#0b0f14] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <form onSubmit={requestPlan} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <h3 className="text-xl font-semibold">Plan your trip</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="destination" value={form.destination} onChange={handleChange} placeholder="Destination (e.g., Kyoto)" className="rounded-xl bg-white/10 px-4 py-3 outline-none focus:ring-2 ring-emerald-400 placeholder-white/60" required />
              <input type="number" min="1" name="travelers" value={form.travelers} onChange={handleChange} placeholder="Travelers" className="rounded-xl bg-white/10 px-4 py-3 outline-none focus:ring-2 ring-emerald-400 placeholder-white/60" />
              <select name="style" value={form.style} onChange={handleChange} className="rounded-xl bg-white/10 px-4 py-3 outline-none focus:ring-2 ring-emerald-400">
                <option value="relaxed">Relaxed</option>
                <option value="adventure">Adventure</option>
                <option value="luxury">Luxury</option>
                <option value="budget">Budget</option>
              </select>
              <select name="budget" value={form.budget} onChange={handleChange} className="rounded-xl bg-white/10 px-4 py-3 outline-none focus:ring-2 ring-emerald-400">
                <option value="low">Low</option>
                <option value="mid">Mid</option>
                <option value="high">High</option>
              </select>
            </div>
            <button type="submit" disabled={loading} className="w-full rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-black font-semibold px-6 py-3 transition disabled:opacity-60">
              {loading ? 'Thinking…' : 'Generate itinerary'}
            </button>
            {error && <p className="text-rose-400 text-sm">{error}</p>}
          </form>

          <div className="space-y-4">
            <AnimatePresence>
              {plan ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <h4 className="text-lg font-semibold">{plan.destination}</h4>
                      <p className="text-white/70 text-sm">{plan.summary}</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm">{nights} nights</span>
                  </div>
                  <div className="mt-4 space-y-3 max-h-[420px] overflow-y-auto pr-1">
                    {plan.items.map((item, idx) => (
                      <div key={idx} className="group relative rounded-xl border border-white/10 bg-[#0f141a] p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs text-white/60">Day {item.day} · {item.type}</p>
                            <h5 className="font-medium">{item.title}</h5>
                            {item.description && <p className="text-sm text-white/70 mt-1">{item.description}</p>}
                            {item.location && <p className="text-xs text-white/60 mt-1">{item.location}</p>}
                            {item.price && <p className="text-sm text-emerald-300 mt-1">{item.price} {item.currency}</p>}
                          </div>
                          {item.link && (
                            <a href={item.link} target="_blank" className="shrink-0 rounded-lg bg-emerald-500/90 hover:bg-emerald-400 text-black text-sm font-semibold px-3 py-2 transition">Book</a>
                          )}
                        </div>
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-xl" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                    Sources:
                    {plan.sources.map((s, i) => (
                      <a key={i} href={s.url} target="_blank" className="underline decoration-dotted hover:text-white">{s.name}</a>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
                  <p>Describe your ideal trip and we’ll craft a personalized itinerary with only bookable options.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
