import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark } from "react-icons/hi2";

const PROJECTS = [
  {
    id: "tobacco",
    title: "Tobacco Control & Leadership Programme",
    category: "Child development",
    short:
      "Implemented in 25 government and municipal schools in Bangalore; forms student leadership to create tobacco-free schools.",
    image: "/ngoStock.png",
    stats: { direct_students: 2562, reach_estimate: 24000, schools: 25 },
    objectives: [
      "Make schools tobacco-free through student leadership.",
      "Form Balapanchayats in schools to lead behaviour change.",
      "Strengthen school policy and teacher/parent sensitisation.",
    ],
    activities: [
      "Establish Balapanchayats and student champions",
      "Peer-education sessions and skits",
      "School-wide tobacco-free campaigns and monitoring",
    ],
    indicators: [
      "Number of active Balapanchayats",
      "Reduction in observed tobacco incidents at schools",
      "Students reached via assemblies & campaigns",
    ],
    partners: ["Salaam Bombay- Mumbai", "Dept. of Education, GOK"],
  },
  {
    id: "skill",
    title: "Skill@School Programme",
    category: "Skill development",
    short:
      "Skills programme in 7 schools covering ~1,200 9th-grade students to deliver trade skills and life skills.",
    image: "/ngoStock.png",
    stats: { students: 1200, schools: 7, trades: 7 },
    objectives: [
      "Provide 21st-century employability skills across 7 trades.",
      "Teach trade-specific English, financial literacy and life skills.",
      "Complement and add value to formal education.",
    ],
    activities: [
      "Hands-on trade training modules",
      "Employability sessions (CV, mock interviews)",
      "Linkages with local apprenticeship opportunities",
    ],
    indicators: [
      "Number of students certified per trade",
      "Placement/apprenticeship conversion rates",
      "Pre/post improvements in functional English & financial literacy",
    ],
    partners: ["India Youth Fund- USA", "Dept. of Education, GOK"],
  },
  {
    id: "sabale",
    title: "Sabale — Women Empowerment & HIV Mitigation",
    category: "Public health",
    short:
      "Peer-led HIV prevention and mitigation work with ~1,650 female sex workers across 98 hotspots in Bangalore.",
    image: "/ngoStock.png",
    stats: { beneficiaries: 1650, hotspots: 98 },
    objectives: [
      "Reduce HIV & STI among sex workers through peer-led programming.",
      "Improve linkages to testing and treatment services.",
      "Reduce onward spread to the general population.",
    ],
    activities: [
      "Peer outreach and condom promotion",
      "Referral and linkage to testing/treatment",
      "Support groups and social protection counselling",
    ],
    indicators: [
      "FSWs regularly reached and engaged",
      "Proportion linked to testing and treatment",
      "Reported behaviour change / reduced STI incidence",
    ],
    partners: ["NACO", "KSAPS"],
  },
  {
    id: "idu",
    title: "HIV Reduction among Injecting Drug Users (IDU)",
    category: "Public health",
    short:
      "A comprehensive HIV/STI prevention and rehabilitation programme for 600 Injecting Drug Users in Bangalore.",
    image: "/ngoStock.png",
    stats: { beneficiaries: 600 },
    objectives: [
      "Reduce the risk of contracting HIV through needle sharing.",
      "Provide fresh needles and syringes through an exchange programme.",
      "Link IDUs to rehabilitation services.",
    ],
    activities: [
      "Needle-syringe exchange programme",
      "Referral and linkage to testing and treatment",
      "Rehabilitation counselling and support",
    ],
    indicators: [
      "Number of IDUs regularly reached",
      "Reduction in reported needle sharing",
      "Number of new needles/syringes distributed",
    ],
    partners: ["NACO", "KSAPS"],
  },
  {
    id: "truckers",
    title: "Targeted Intervention for Truckers",
    category: "Public health",
    short:
      "A focused healthcare project for ~3,600 truck drivers, helpers, and the allied transport community.",
    image: "/ngoStock.png",
    stats: { annual_reach: 3600 },
    objectives: [
      "Provide healthcare services to the trucking community.",
      "Reduce illness due to occupational risks and lifestyle factors.",
    ],
    activities: [
      "Mobile health clinics at transport hubs",
      "Health check-ups and basic treatment",
      "Counselling on occupational risks and lifestyle",
    ],
    indicators: [
      "Number of truckers & allied community reached annually",
      "Reported reduction in illness",
    ],
    partners: ["Apollo Tyre Foundation"],
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

const HIGHLIGHTS = [
  {
    title: "Healthy Highways Project (HHP)",
    text: "Funded by DFID, U.K, for HIV prevention among truckers. Reached 24,000 truckers in 6 years, effecting behaviour change and reducing STI incidence from 7% to 3%. This was the only project in India selected for a 'Best Practice' study by DFID.",
  },
  {
    title: "Parent to Child HIV Transmission (PPTCT)",
    text: "Funded by the European Union and implemented in 6 districts, this project covered 5,460 HIV+ pregnant women. HIV transmission from mother to child was brought down from 2.5% to less than 1% by the end of the project.",
  },
  {
    title: "Access to Public Health",
    text: "Implemented in Bangalore slums, this project increased patient uptake in 4 maternity homes and improved quality of care for 9,700 Dalit, Muslim, and OBC women. It also created 49 slum-level Solidarity Groups to advocate for community issues.",
  },
];

export default function Impact() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (filter !== "All" && p.category !== filter) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        (p.objectives && p.objectives.join(" ").toLowerCase().includes(q))
      );
    });
  }, [filter, query]);

  const openProject = (project) => setSelected(project);
  const closeProject = () => setSelected(null);

  return (
    <main className="min-h-screen bg-[#FBFFF1] text-[#000100]">
      {/* Hero Section with Background Image */}
      <section className="relative w-screen h-screen">
        <img
          src="/ngoStock.png"
          alt="Projects and Impact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-[1100px] mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Our Projects & <span className="text-[#0000F5]">Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
            Click a card to view detailed objectives, activities, and indicators.
          </p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 py-24 md:py-32 space-y-12">
        {/* Controls + Current Projects Title */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Current Projects</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <div className="flex items-center gap-3 flex-wrap">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    filter === c
                      ? "bg-[#0000F5] text-white shadow"
                      : "bg-white/60 text-[#000100] border border-[#E6E6E6] hover:bg-[#B4C5E4]/20"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="search"
                placeholder="Search projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full md:w-72 px-4 py-2 rounded-lg border border-gray-200 bg-[#fefffa] focus:outline-none focus:ring-2 focus:ring-[#B4C5E4]/70"
              />
              <div className="text-sm text-[#444]">
                {filtered.length} / {PROJECTS.length} projects
              </div>
            </div>
          </div>
        </section>

        {/* Projects grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map((p) => (
                <article
                  key={p.id}
                  className="bg-[#fefffa] rounded-2xl overflow-hidden shadow-sm transform transition duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => openProject(p)}
                    className="text-left w-full cursor-pointer flex flex-col flex-1"
                    aria-label={`Open ${p.title}`}
                  >
                    <div className="w-full h-44 overflow-hidden bg-[#fefffa]">
                      <img
                        src={p.image}
                        alt={p.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/img/ngoStock.png";
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex-1">
                        <span className="text-xs text-[#0000F5] font-medium uppercase tracking-wider">
                          {p.category}
                        </span>
                        <h3 className="text-lg font-semibold text-[#000100] mt-1">
                          {p.title}
                        </h3>
                        <p className="text-sm text-[#444] mt-3">{p.short}</p>
                      </div>
                      <div className="mt-5">
                        {p.stats && Object.keys(p.stats).length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(p.stats).map(([key, value]) => (
                              <div
                                key={key}
                                className="text-xs bg-[#FBFFF1] border border-[#E6E6E6] px-2 py-1 rounded-full"
                              >
                                <strong>{value}</strong>
                                <span className="ml-1 text-[#666] capitalize">
                                  {key.replace(/_/g, " ")}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="mt-4 pt-4 flex items-center justify-between text-xs text-[#666] border-t border-gray-100">
                          <span className="truncate" title={p.partners?.join(", ")}>
                            {p.partners?.slice(0, 2).join(", ")}
                          </span>
                          <span className="text-[#3D59F5] font-medium whitespace-nowrap">
                            View details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center text-[#444] py-12">
                No projects matched your search/filter.
              </div>
            )}
          </div>
        </section>

        {/* Social Impact Highlights Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Our Legacy of Impact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="bg-[#fefffa] rounded-2xl p-6 border border-[#E6E6E6] shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#0000F5]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#444] mt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pt-6">
          <div className="rounded-2xl bg-[#B4C5E4]/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-[#000100]">
                Want to support a project?
              </h4>
              <p className="text-[#444] mt-2">
                Partner with us, donate or volunteer to expand impact across Karnataka.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/donate"
                className="px-6 py-3 rounded-full bg-gradient-to-tr from-[#0000F5] to-[#3D59F5] text-white"
              >
                Donate
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-full border border-[#0000F5] text-[#0000F5]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/40"
          >
            <motion.div
              initial={{ scale: 0.98, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 20, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="max-w-4xl w-full bg-[#fefffa] rounded-2xl shadow-2xl overflow-auto max-h-[95vh] md:max-h-[90vh] p-5 md:p-6 relative"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition"
                aria-label="Close details"
              >
                <HiXMark className="w-6 h-6" />
              </button>
              <div>
                <h2 id="modal-title" className="text-2xl font-bold mb-1 pr-10">
                  {selected.title}
                </h2>
                <div className="text-sm text-[#666] mb-4">{selected.category}</div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selected.image}
                    alt={selected.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/img/ngoStock.png";
                    }}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                  <p className="text-[#444] mb-3">{selected.short}</p>
                  {selected.stats && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {Object.entries(selected.stats).map(([k, v]) => (
                        <div
                          key={k}
                          className="bg-[#FBFFF1] border border-gray-200 rounded-full px-3 py-1 text-sm"
                        >
                          <strong className="text-[#0000F5]">{v}</strong>{" "}
                          <span className="text-[#666] ml-2 text-xs capitalize">
                            {k.replace(/_/g, " ")}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="font-semibold mb-2">Partners</div>
                    <div className="text-sm text-[#444]">
                      {selected.partners?.length
                        ? selected.partners.join(", ")
                        : "—"}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <div className="font-semibold mb-2">Objectives</div>
                    <ul className="list-disc list-inside text-sm text-[#444]">
                      {selected.objectives && selected.objectives.length > 0 ? (
                        selected.objectives.map((o, idx) => <li key={idx}>{o}</li>)
                      ) : (
                        <li>No objectives listed.</li>
                      )}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <div className="font-semibold mb-2">Activities</div>
                    <ul className="list-disc list-inside text-sm text-[#444]">
                      {selected.activities && selected.activities.length > 0 ? (
                        selected.activities.map((a, idx) => <li key={idx}>{a}</li>)
                      ) : (
                        <li>No activities listed.</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Indicators</div>
                    <ul className="list-disc list-inside text-sm text-[#444]">
                      {selected.indicators && selected.indicators.length > 0 ? (
                        selected.indicators.map((i, idx) => <li key={idx}>{i}</li>)
                      ) : (
                        <li>No indicators listed.</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
