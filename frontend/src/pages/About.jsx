import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  const thematicAreas = [
    "Public health",
    "Child development",
    "Skill development",
    "Community Development",
    "Maternal and Child health",
  ];

  const demographicCoverage = [
    "Women in Slums",
    "Female Sex Workers",
    "Injectible Drug Users among men",
    "Government School Children",
    "Truckers and their families",
  ];

  return (
    <main className="bg-[#FBFFF1] min-h-screen">
      <Navbar />

      {/* Hero / Banner Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-[#E5ECFF]/40 to-[#FBFFF1]/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#000100]"
            style={{ fontFamily: "Roboto, system-ui" }}
          >
            About SPAD
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#000100]/90 max-w-3xl mx-auto leading-relaxed"
          >
            Society for People’s Action for Development (SPAD), founded in 1993
            by alumni of the School of Social Work, Roshni Nilaya Mangalore, is a
            grassroots organisation supporting vulnerable communities through
            participatory and empowering interventions. SPAD has implemented
            projects across Karnataka on HIV/AIDS prevention, public health, and
            community development.
          </motion.p>
        </div>
      </section>

      <div className="border-t border-[#B4C5E4]/60 mx-6 md:mx-20"></div>

      {/* Vision & Mission */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#000100] mb-6">
            Vision & Mission
          </h2>
          <p className="text-lg md:text-xl text-[#000100]/90 mb-4 leading-relaxed">
            To create a just and humane society by engaging vulnerable and
            disadvantaged communities to become harbingers of change.
          </p>
          <p className="text-lg md:text-xl text-[#000100]/90 leading-relaxed">
            Develop community leadership through mobilisation, collectivisation,
            and organisation of communities for empowerment.
          </p>
        </motion.div>
      </section>

      <div className="border-t border-[#B4C5E4]/60 mx-6 md:mx-20"></div>

      {/* Core Values */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#000100] mb-6 text-center">
            Core Values
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#000100]/90 max-w-3xl mx-auto leading-relaxed">
            <li>
              People have the inherent capacity to change their lives as
              individuals and as communities.
            </li>
            <li>
              Development is a human process; concerted action is required to
              make it humane.
            </li>
            <li>
              SPAD equips poor and vulnerable communities with capacities to
              organize effective groups so they can advocate for their rights.
            </li>
          </ul>
        </motion.div>
      </section>

      <div className="border-t border-[#B4C5E4]/60 mx-6 md:mx-20"></div>

      {/* Thematic Areas */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#000100] mb-6 text-center">
            Thematic Areas
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg text-[#000100]/90 max-w-3xl mx-auto list-disc list-inside leading-relaxed">
            {thematicAreas.map((area, i) => (
              <li key={i}>{area}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-[#0000F5] mt-8 mb-4 text-center">
            Demographic Coverage
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg text-[#000100]/90 max-w-3xl mx-auto list-disc list-inside leading-relaxed">
            {demographicCoverage.map((group, i) => (
              <li key={i}>{group}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      <div className="border-t border-[#B4C5E4]/60 mx-6 md:mx-20"></div>

      {/* Governance */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 text-[#000100]/90 leading-relaxed"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Governance
          </h2>
          <p className="mb-4">
            All strategic decisions are made by the Organisation Management Team
            (OMT) following democratic practices of open debate. Work is
            distributed according to professional experience. The Chief
            Functionary heads the OMT and takes final responsibility.
          </p>
          <p className="mb-4">
            Each project has managers who monitor operations, provide inputs,
            and perform managerial functions. The OMT is responsible for the
            tactical intervention design and overall strategy of SPAD and its
            projects.
          </p>
        </motion.div>
      </section>

      <div className="border-t border-[#B4C5E4]/60 mx-6 md:mx-20"></div>

      {/* Project Team */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 text-[#000100]/90 leading-relaxed"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Project Team
          </h2>
          <p className="mb-4">
            The senior project team has 3 members with postgraduate degrees in
            Social Work and over 90 years of combined experience in the NGO
            sector.
          </p>
          <p className="mb-4">
            The current team has 24 members including Project Directors,
            Managers, Counsellors, Outreach Workers, Nurses, Doctors, Accounts,
            and Office Staff. They have successfully managed all bi-lateral and
            multi-lateral projects, achieving impact in the communities.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
