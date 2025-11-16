import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-teal-50 text-gray-900">
      <div className="absolute inset-0 opacity-[0.85]">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 ring-1 ring-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-emerald-700">Always free, real-time availability</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            Plan unforgettable trips with AI
          </h1>
          <p className="mt-4 text-lg text-gray-700 md:text-xl max-w-2xl">
            Smart Trippy instantly designs bookable itineraries with places to stay, eat, and explore — no sold-out options, no guesswork.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#plan" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 transition">
              Plan a trip
            </a>
            <a href="#why-ai" className="inline-flex items-center justify-center rounded-xl bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3 ring-1 ring-gray-200 transition">
              Why AI?
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
