import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0b0f14] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f14]/40 to-[#0b0f14] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-white/80">Always free, real-time availability</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            Smart Trippy
          </h1>
          <p className="mt-4 text-lg text-white/80 md:text-xl max-w-2xl">
            Your AI-powered travel planner that only recommends bookable stays, activities, and flights — across every major platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#plan" className="inline-flex items-center justify-center rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-black font-semibold px-6 py-3 transition">
              Plan a trip
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 transition">
              How it works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
