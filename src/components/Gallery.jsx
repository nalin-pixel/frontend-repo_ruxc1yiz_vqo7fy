import { motion } from 'framer-motion'

const cards = [
  { title: 'Kyoto Temples', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop', tag: 'Culture' },
  { title: 'Amalfi Coast', img: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=1600&auto=format&fit=crop', tag: 'Coast' },
  { title: 'Iceland Ring Road', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop', tag: 'Adventure' },
  { title: 'Bali Rice Terraces', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop', tag: 'Nature' },
  { title: 'New York Nights', img: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1600&auto=format&fit=crop', tag: 'City' },
  { title: 'Swiss Alps', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop', tag: 'Mountains' },
  { title: 'Santorini Sunsets', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266633?q=80&w=1600&auto=format&fit=crop', tag: 'Romance' },
  { title: 'Marrakech Medina', img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1600&auto=format&fit=crop', tag: 'Markets' },
  { title: 'Banff National Park', img: 'https://images.unsplash.com/photo-1505855796860-aa3f8e95d8d5?q=80&w=1600&auto=format&fit=crop', tag: 'Lakes' },
  { title: 'Sydney Harbour', img: 'https://images.unsplash.com/photo-1510749678448-4f43b55cf37e?q=80&w=1600&auto=format&fit=crop', tag: 'City' },
  { title: 'Cappadocia Balloons', img: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1600&auto=format&fit=crop', tag: 'Balloons' },
  { title: 'Serengeti Safari', img: 'https://images.unsplash.com/photo-1558980664-10d426240b76?q=80&w=1600&auto=format&fit=crop', tag: 'Wildlife' },
]

export default function Gallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-gray-900 text-2xl md:text-3xl font-semibold">Inspiration</h2>
          <p className="text-gray-600 text-sm">A world of ideas to spark your next getaway</p>
        </div>
        {/* masonry */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.03 * i }}
              className="mb-4 break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center rounded-full bg-white/90 text-gray-800 text-xs px-2 py-1 shadow">{c.tag}</span>
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
