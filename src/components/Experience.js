'use client';
import { motion } from 'framer-motion';

const experiences = [
  { year: '2021', detail: 'Joined Company A as Developer.' },
  { year: '2022', detail: 'Promoted to Senior Developer at Company A.' },
  { year: '2023', detail: 'Started freelancing and building love-filled projects.' },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <h2 className="text-3xl font-semibold text-center mb-10">Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="mb-8"
          >
            <h3 className="font-bold">{exp.year}</h3>
            <p className="ml-4">{exp.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
