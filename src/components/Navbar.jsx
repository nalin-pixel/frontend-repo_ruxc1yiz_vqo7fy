import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/80 backdrop-blur px-4 py-2 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500" />
            <span className="text-gray-900 font-semibold">Smart Trippy</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-gray-600">
            <a href="#plan" className="hover:text-gray-900">Plan</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="/test" className="hover:text-gray-900">Status</a>
          </nav>
          <a href="#plan" className="rounded-xl bg-gray-900 text-white font-semibold px-3 py-2 text-sm">Get started</a>
        </div>
      </div>
    </header>
  )
}
