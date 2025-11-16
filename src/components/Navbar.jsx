import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b0f14]/70 backdrop-blur px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-400" />
            <span className="text-white font-semibold">Smart Trippy</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#plan" className="hover:text-white">Plan</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="/test" className="hover:text-white">Status</a>
          </nav>
          <a href="#plan" className="rounded-xl bg-white text-black font-semibold px-3 py-2 text-sm">Get started</a>
        </div>
      </div>
    </header>
  )
}
