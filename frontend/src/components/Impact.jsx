import React from 'react'
import CountUp from 'react-countup'
import { FaUserGraduate, FaFemale, FaMapMarkerAlt } from 'react-icons/fa'

export default function Impact() {
  const stats = [
    {
      id: 'students',
      icon: <FaUserGraduate className="w-8 h-8" />,
      value: 24000,
      suffix: '+',
      label: 'Students Reached',
    },
    {
      id: 'women',
      icon: <FaFemale className="w-8 h-8" />,
      value: 1650,
      suffix: '+',
      label: 'Women Empowered',
    },
    {
      id: 'hotspots',
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      value: 98,
      suffix: '',
      label: 'Hotspots Covered',
    },
  ]

  return (
    <section className="py-16 bg-[#FBFFF1]"> 
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000100] mb-4">
          Our Impact at a Glance
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          For over 30 years, we've been committed to creating lasting change. Here's a look at what we've achieved.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.id} className="p-6 rounded-2xl shadow-sm bg-white/60">
              <div className="flex items-center justify-center mb-4 text-[#0000F5]">
                {s.icon}
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-[#0000F5]">
                <CountUp
                  end={s.value}
                  duration={3}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />{s.suffix}
              </h3>

              <p className="mt-3 text-lg text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
