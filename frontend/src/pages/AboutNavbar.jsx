// AboutNavbar.jsx
import React from "react";

export default function AboutNavbar() {
  const sections = [
    { id: "about-spad", label: "About SPAD" },
    { id: "core-values", label: "Core Values" },
    { id: "thematic-areas", label: "Thematic Areas" },
    { id: "governance", label: "Governance" },
    { id: "project-team", label: "Project Team" },
    { id: "legal-compliance", label: "Legal Compliance" },
  ];

  return (
    <nav className="sticky top-0 mt-1 z-30 w-full bg-[#B4C5E4]/30 backdrop-blur-md border-b border-gray-200">
      <ul className="flex justify-center flex-wrap gap-6 py-3 text-base md:text-lg font-medium text-black">
        {sections.map((sec) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className="relative px-1 transition-colors hover:text-[#0000F5]
                         after:absolute after:-bottom-1 after:left-0 after:w-0 
                         after:h-[2px] after:bg-[#0000F5] after:transition-all 
                         hover:after:w-full"
            >
              {sec.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
