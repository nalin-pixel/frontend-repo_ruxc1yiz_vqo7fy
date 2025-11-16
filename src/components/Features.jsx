import { motion } from 'framer-motion'

const features = [
  {
    title: 'Only bookable options',
    description: 'We filter out sold-out stays and fully booked activities so you never chase dead ends.',
    accent: 'from-teal-400 to-emerald-400',
  },
  {
    title: 'Unrestricted search',
    description: 'We scan Booking.com, Airbnb, Expedia, Viator, GetYourGuide, Skyscanner, and more.',
    accent: 'from-purple-400 to-fuchsia-400',
  },
  {
    title: 'Real-time travel intelligence',
    description: 'Powered by travel-tuned AI with up-to-date info and citations.',
    accent: 'from-amber-400 to-rose-400',
  },
]

export default function Features() {
  return (
    <section id="how" className="relative bg-[#0b0f14] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 * i }}
              className="relative group rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br ${f.accent} mix-blend-overlay`} />
              <div className="relative">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-white/80">{f.description}</p>
              </div>
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition shadow-[0_0_80px_20px_rgba(255,255,255,0.15)] rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
