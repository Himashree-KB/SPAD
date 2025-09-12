import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  // projects (updated with the three programs you provided)
  const projects = [
    {
      id: 'tobacco-control',
      title: 'Tobacco Control & Leadership Programme',
      excerpt:
        'Implemented in 25 government & municipal schools across Bangalore. Directly intervenes with 2,562 students (classes 7–9) and reaches ~24,000 students overall through school-wide activities.',
      image: "/ngoStock.png",
      to: '/projects/tobacco-control',
      objective:
        'To make schools tobacco-free through student leadership by forming Balapanchayats in schools.',
    },
    {
      id: 'skill-at-school',
      title: 'Skill@School Programme',
      excerpt:
        'Implemented in 7 schools, covering ~1,200 students from 9th grade. Offers practical skills training across seven trades.',
      image: "/ngoStock.png",
      to: '/projects/skill-at-school',
      objective:
        'Provide 21st-century employability skills: trade-specific training, trade English, financial literacy and life skills — adding value to the regular curriculum.',
    },
    {
      id: 'sabale-women',
      title: 'Sabale (Women Empowerment & HIV Mitigation)',
      excerpt:
        'HIV prevention and mitigation programme working with 1,650 female sex workers across 98 hotspots in Bangalore.',
      image: "/ngoStock.png",
      to: '/projects/sabale',
      objective:
        'Reduce HIV & STI among sex workers through peer-led interventions to limit transmission from high-risk groups to the general population.',
    },
  ]

  return (
    <main className="bg-[#FBFFF1] min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text side */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-[#000100] text-center md:text-left"
              style={{ fontFamily: 'Roboto, system-ui' }}
            >
              To Create a <span className="text-[#0000F5]">Just</span> and Humane Society
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-gray-700 text-center md:text-left"
            >
              <span className="font-semibold">SPAD</span> is a non-profit registered
              society established in 1993, dedicated to advancing HIV/AIDS prevention,
              child development, health, and social justice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/donate"
                className="px-6 py-3 rounded-full text-white font-medium shadow bg-gradient-to-tr from-[#0000F5] to-[#3D59F5] hover:opacity-90 text-center"
              >
                Donate Now
              </Link>
              <Link
                to="/impact"
                className="px-6 py-3 rounded-full border border-[#B4C5E4] text-[#000100] hover:border-[#0000F5] hover:text-[#0000F5] transition-colors text-center"
              >
                Our Impact
              </Link>
            </motion.div>
          </div>

          {/* Image side */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <img
              src="/ngoStock.png"
              alt="SPAD community work"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#B4C5E4]/60 mx-6 md:mx-20"></div>

      {/* Vision Section */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#000100] mb-6">
            Vision
          </h2>
          <p className="text-lg md:text-xl text-[#000100] leading-relaxed">
            SPAD visualizes itself as a companion of all those who are struggling
            for livelihood, justice and fairness.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#B4C5E4]/60 mx-6 md:mx-20"></div>

      {/* Projects Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000100] text-center mb-8">
            Selected Projects
          </h2>

          <p className="text-center max-w-3xl mx-auto text-[#000100]/80 mb-8">
            A snapshot of our active initiatives across health, education and livelihoods.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                image={p.image}
                title={p.title}
                excerpt={p.excerpt}
                to={p.to}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#B4C5E4]/60 mx-6 md:mx-20"></div>

      {/* Partners & Donors Section */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#000100] text-center mb-10">
            Partners & Donors
          </h2>

          {/* International Partners */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-[#0000F5] mb-4 text-center md:text-left">
              International
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-lg text-[#000100]/90">
              <li>DFID (UK)</li>
              <li>EJAF (UK)</li>
              <li>Christian Aid (UK)</li>
              <li>European Union</li>
              <li>Oxfam (UK)</li>
              <li>UNICEF</li>
              <li>TCIF</li>
              <li>Norwegian Embassy</li>
              <li>Bill & Melinda Gates Foundation (USA)</li>
              <li>Lebara Foundation (UK)</li>
              <li>India Youth Fund (USA)</li>
            </ul>
          </div>

          {/* National / State Partners */}
          <div>
            <h3 className="text-2xl font-semibold text-[#0000F5] mb-4 text-center md:text-left">
              National / State
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-lg text-[#000100]/90">
              <li>NACO</li>
              <li>KSAPS</li>
              <li>Govt. of Karnataka</li>
              <li>Salaam Bombay Foundation (India)</li>
              <li>Apollo Tyres Foundation</li>
              <li>Oracle</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
