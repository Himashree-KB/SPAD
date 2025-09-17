import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  const stockImage = "/ngoStock.png"; // same stock image for all sections
  const Section = ({ title, children, imageLeft = true, bg = null }) => (
    <section
      className={`py-20 text-left max-w-6xl mx-auto px-6 mt-12 flex flex-col md:flex-row items-center gap-10 ${
        bg ? "bg-[#B4C5E4]/30 rounded-4xl" : ""
      } ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={stockImage}
          alt={title}
          className="w-full max-w-sm rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
      <div className="flex-1 text-left">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-[#000100] mb-4"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );

  return (
    <main className="bg-[#FBFFF1] min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-screen h-screen">
        {/* Full-screen background image */}
        <img
          src="/ngoStock.png"
          alt="About SPAD"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
          >
            About <span className="text-[#FFD700]">Us</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white max-w-2xl"
          >
            <strong>SPAD</strong> (Society for People’s Action for Development),
            founded in 1993, empowers vulnerable communities through grassroots
            interventions in Karnataka.
          </motion.p>
        </div>
      </section>
      <Section title="Vision & Mission" imageLeft={true} bg={true}>
        <p className="text-lg text-[#000100]/90 leading-relaxed">
          Creating a just and humane society by empowering vulnerable
          communities to be agents of change.
        </p>
      </Section>
      <Section title="Core Values" imageLeft={false} bg={false}>
        <ul className="list-disc list-inside space-y-3 text-lg text-[#000100]/90">
          <li>People have the inherent capacity to change.</li>
          <li>Development is a human and collaborative process.</li>
          <li>Communities should advocate for their rights.</li>
        </ul>
      </Section>
      <Section title="Thematic Areas" imageLeft={true} bg={true}>
        <ul className="list-disc list-inside space-y-3 text-lg text-[#000100]/90">
          <li>Public Health</li>
          <li>Child Development</li>
          <li>Skill Development</li>
          <li>Community Development</li>
          <li>Maternal & Child Health</li>
        </ul>
      </Section>
      <Section title="Governance" imageLeft={false} bg={false}>
        <p className="text-lg text-[#000100]/90 leading-relaxed">
          Strategic decisions are made by the Organisation Management Team (OMT).
          The Chief Functionary holds final accountability. Managers oversee
          projects and ensure effective implementation.
        </p>
      </Section>
      <Section title="Project Team" imageLeft={true} bg={true}>
        <p className="text-lg text-[#000100]/90 leading-relaxed">
          The senior project team includes 3 members with postgraduate degrees in
          Social Work and over 90 years of combined experience. SPAD’s team of 24
          includes Project Directors, Managers, Counsellors, Outreach Workers,
          Nurses, Doctors, Accounts and Office staff.
        </p>
      </Section>
      <Section title="Legal Compliance" imageLeft={false} bg={false}>
        <ul className="list-disc list-inside space-y-3 text-lg text-[#000100]/90">
          <li>A Non-Profit Organization</li>
          <li>Registered under Sec. 12(A) of IT Act</li>
          <li>Registered under 80(G) of IT Act</li>
          <li>Registered under FCRA</li>
          <li>Registered under PAN & TAN</li>
          <li>Registered under DARPAN of NITI Ayog</li>
          <li>CSR Registration</li>
          <li>Accredited by Credibility Alliance</li>
          <li>Audit Reports</li>
          <li>IT Returns Filed</li>
        </ul>
      </Section>
    </main>
  );
}