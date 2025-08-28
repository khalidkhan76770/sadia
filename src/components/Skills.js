'use client';
import { motion } from 'framer-motion';

const skills = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  '3D Visualization',
  'Motion Graphics',
  'UI/UX',
  'Branding Strategy',
];

export default function Skills() {
  return (
    <section className="py-20" id="skills">
      <h2 className="text-3xl font-semibold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s, idx) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="px-4 py-2 bg-gray-200 rounded-full"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
