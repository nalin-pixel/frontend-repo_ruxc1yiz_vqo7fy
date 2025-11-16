import { motion } from 'framer-motion'

const cards = [
  { title: 'Kyoto Temples', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop', tag: 'Culture' },
  { title: 'Amalfi Coast', img: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=1600&auto=format&fit=crop', tag: 'Coast' },
  { title: 'Iceland Ring Road', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop', tag: 'Adventure' },
  { title: 'Bali Rice Terraces', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop', tag: 'Nature' },
  { title: 'New York Nights', img: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1600&auto=format&fit=crop', tag: 'City' },
  { title: 'Swiss Alps', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop', tag: 'Mountains' },
]

export default function Gallery() {
  return (
    <section className="bg-[#0b0f14] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">Inspiration</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]"><!-- masonry -->
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="mb-4 break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center rounded-full bg-white/15 text-white text-xs px-2 py-1">{c.tag}</span>
                  <h3 className="mt-2 text-white text-lg font-medium drop-shadow">{c.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
