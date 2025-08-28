'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Driftwood Brew',
    description:
      'Brand identity for a cozy, artisanal coffee shop. Tagline: Drift, Sip, Savor.',
    tools: ['Ps', 'Ai'],
    socials: ['📷', '🐦'],
  },
  {
    title: 'Terravia',
    description:
      'Eco-friendly travel brand inviting explorers to connect with nature and travel sustainably.',
    tools: ['Ps', 'Ai'],
    socials: ['📷', '🐦'],
  },
  {
    title: 'NeoHerb Skincare',
    description:
      'Nature-inspired skincare line that revitalizes skin with pure, herbal ingredients.',
    tools: ['Ps', 'Ai'],
    socials: ['📷', '🐦'],
  },
  {
    title: 'CoolHouse',
    description:
      'Social media campaign and branding assets for lifestyle platform CoolHouse.',
    tools: ['Ps', 'Ai'],
    socials: ['📷', '🐦'],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="p-6 rounded-lg shadow bg-white"
          >
            <h3 className="font-bold text-xl mb-2">{p.title}</h3>
            <p>{p.description}</p>
            {p.tools && (
              <div className="flex space-x-2 mt-4">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-gray-200 rounded text-sm font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {p.socials && (
              <div className="flex space-x-2 mt-4 text-xl">
                {p.socials.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
