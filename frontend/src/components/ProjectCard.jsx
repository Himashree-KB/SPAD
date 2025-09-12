import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ image, title, excerpt, to = '#' }) {
  return (
    <motion.article
      className="bg-white rounded-2xl shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-48 md:h-40 lg:h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 md:p-5">
        <h3 className="text-lg font-semibold text-[#000100] mb-2">{title}</h3>
        <p className="text-sm text-[#000100]/80 mb-4">{excerpt}</p>
        <a
          href={to}
          className="inline-block text-sm font-medium text-[#0000F5] hover:underline"
        >
          Read more →
        </a>
      </div>
    </motion.article>
  )
}
