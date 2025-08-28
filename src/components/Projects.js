'use client';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Project One', description: 'Description of project one.' },
  { title: 'Project Two', description: 'Description of project two.' },
  { title: 'Project Three', description: 'Description of project three.' },
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
