import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  const stockImage = "/ngoStock.png"; // same stock image for all sections

  // ✅ Reusable animation variant
  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const Section = ({
    title,
    children,
    imageLeft = true,
    bg = null,
    hideImage = false,
  }) => (
    <section
      className={`py-20 text-left max-w-6xl mx-auto px-6 mt-12 flex flex-col md:flex-row items-center gap-10 ${
        bg ? "bg-[#B4C5E4]/30 rounded-4xl" : ""
      } ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Only render image if hideImage is false */}
      {!hideImage && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src={stockImage}
            alt={title}
            className="w-full max-w-sm rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      )}
      <div className="flex-1 text-left">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#000100] mb-4"
        >
          {title}
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );

  return (
    <main className="bg-[#FBFFF1] min-h-screen">
      <Navbar />

      {/* 🔹 Hero Section */}
      <section className="relative w-screen h-screen flex items-center">
        <img
          src="/ngoStock.png"
          alt="About SPAD"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold text-white"
          >
            About <span className="text-[#0000F5]">SPAD</span>
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 text-2xl text-gray-200"
          >
            Empowering communities since 1993
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-gray-100 max-w-xl"
          >
            Building a just and humane society by empowering vulnerable groups
            through grassroots interventions in Karnataka.
          </motion.p>
        </div>
      </section>

      {/* 🔹 About SPAD Section */}
      <Section imageLeft={true} bg={false} hideImage={true}>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#000100] mb-8 tracking-tight relative"
        >
          About SPAD
        </motion.h2>

        {/* Block 1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start gap-6 mb-6"
        >
          <img
            src={stockImage}
            alt="SPAD Image 1"
            className="w-full md:w-4/12 rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="text-lg text-[#000100]/90 leading-relaxed md:w-8/12 md:pl-4 space-y-4">
            <p>
              Society for People’s Action for Development (SPAD), an NGO, was
              founded in 1993 by alumni of School of Social Work, Roshni Nilaya,
              Mangalore. It works as a grassroots organisation to support
              vulnerable communities through participatory and empowering
              processes of intervention.
            </p>
          </div>
        </motion.div>

        {/* Block 2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-start gap-6 mb-6"
        >
          <img
            src={stockImage}
            alt="SPAD Image 2"
            className="w-full md:w-4/12 rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="text-lg text-[#000100]/90 leading-relaxed items-center md:w-8/12 md:pr-4 space-y-4">
            <p>
              SPAD has implemented over 20 projects across nine districts of
              Karnataka, focusing on HIV/AIDS prevention and other public health
              issues. These initiatives were funded by a variety of bi-lateral
              and multi-lateral donors.
            </p>
          </div>
        </motion.div>

        {/* Block 3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start gap-6"
        >
          <img
            src={stockImage}
            alt="SPAD Image 3"
            className="w-full md:w-4/12 rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="text-lg text-[#000100]/90 leading-relaxed md:w-8/12 md:pl-4 space-y-4">
            <p>
              SPAD played a key role in several state-level health movements. We
              were instrumental in initiating the Network for AIDS Prevention –
              Karnataka and held a seat on the Executive Committee of the
              Karnataka AIDS Prevention Society (KSAPS), the state's highest
              decision-making body for HIV prevention. SPAD also hosted the
              Secretariat for the Jana Arogya Andolana – Karnataka (JAA-K) and
              is a proud member of the Campaign Against Child Labour – Karnataka
              (CACL-K) and the Karnataka Gramodaya Mission.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* 🔹 Core Values */}
      <Section title="Core Values" imageLeft={false} bg={true}>
        <ul className="list-disc list-inside space-y-3 text-lg text-[#000100]/90">
          <li>People have the inherent capacity to change.</li>
          <li>Development is a human and collaborative process.</li>
          <li>Communities should advocate for their rights.</li>
        </ul>
      </Section>

      {/* 🔹 Thematic Areas with Background */}
      <section className="relative h-screen w-screen py-20 mt-20">
        <img
          src="/ngoStock.png"
          alt="Thematic Areas Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            <span className="text-white">Thematic</span> Areas
          </motion.h2>
          <motion.ul
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="list-disc list-inside space-y-4 text-lg text-gray-100 leading-relaxed"
          >
            <li>Public Health</li>
            <li>Child Development</li>
            <li>Skill Development</li>
            <li>Community Development</li>
            <li>Maternal & Child Health</li>
          </motion.ul>
        </div>
      </section>

      {/* 🔹 Governance */}
      <Section title="Governance" imageLeft={false} bg={false}>
        <p className="text-lg text-[#000100]/90 leading-relaxed">
          Strategic decisions are made by the Organisation Management Team (OMT).
          The Chief Functionary holds final accountability. Managers oversee
          projects and ensure effective implementation.
        </p>
      </Section>

      {/* 🔹 Project Team */}
      <Section title="Project Team" imageLeft={true} bg={true}>
        <p className="text-lg text-[#000100]/90 leading-relaxed">
          The senior project team includes 3 members with postgraduate degrees
          in Social Work and over 90 years of combined experience. SPAD’s team
          of 24 includes Project Directors, Managers, Counsellors, Outreach
          Workers, Nurses, Doctors, Accounts and Office staff.
        </p>
      </Section>

      {/* 🔹 Legal Compliance */}
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
