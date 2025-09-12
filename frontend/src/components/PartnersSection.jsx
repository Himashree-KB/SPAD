// src/components/PartnersSection.jsx
import React, { useState } from 'react'

/**
 * ImageWithFallback
 * - tries to show an image, on error shows a text fallback badge
 */
function ImageWithFallback({ src, alt, name }) {
  const [errored, setErrored] = useState(false)

  if (!src || errored) {
    return (
      <div
        tabIndex={0}
        className="w-full flex items-center justify-center px-3 py-2 bg-[#FBFFF1] text-sm text-[#000100] font-medium rounded-md"
        aria-label={name}
      >
        {name}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt || name}
      className="max-h-12 max-w-full object-contain"
      loading="lazy"
      onError={() => setErrored(true)}
    />
  )
}

/**
 * PartnersSection
 * Self-contained component that renders International + National partners using external logos.
 *
 * Usage:
 *  import PartnersSection from '../components/PartnersSection'
 *  ...
 *  <PartnersSection />
 */
export default function PartnersSection() {
  const internationalPartners = [
    {
      id: 'dfid',
      name: 'DFID (UK)',
      logo: 'https://uis.unesco.org/sites/default/files/wysiwyg_media/logo-dfid.png',
      url: 'https://www.gov.uk/government/organisations/department-for-international-development',
    },
    {
      id: 'ejaf',
      name: 'EJAF (UK)',
      logo: 'https://afew.org/wp-content/uploads/2023/07/ejaf_2_orange-logo-with-text-with-border.jpg',
      url: 'https://www.eltonjohnaidsfoundation.org/',
    },
    {
      id: 'christian-aid',
      name: 'Christian Aid (UK)',
      logo: 'https://www.christianaid.org.uk/themes/custom/grain/logo.svg',
      url: 'https://www.christianaid.org.uk/',
    },
    {
      id: 'eu',
      name: 'European Union',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
      url: 'https://europa.eu/',
    },
    {
      id: 'oxfam',
      name: 'Oxfam (UK)',
      logo: '',
      url: 'https://www.oxfam.org/',
    },
    {
      id: 'unicef',
      name: 'UNICEF',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Unicef.svg/1600px-Flag_of_Unicef.svg.png?20250422232509',
      url: 'https://www.unicef.org/',
    },
    {
      id: 'tcif',
      name: 'TCIF',
      logo: '',
      url: 'https://www.tcif.org/',
    },
    {
      id: 'norway',
      name: 'Norwegian Embassy',
      logo:
        'https://europeanwesternbalkans.com/wp-content/uploads/2019/11/Norwegian-Embassy.png',
      url: 'https://www.norway.no/',
    },
    {
      id: 'gates',
      name: 'Bill & Melinda Gates Foundation (USA)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Bill_%26_Melinda_Gates_Foundation_logo.svg/640px-Bill_%26_Melinda_Gates_Foundation_logo.svg.png',
      url: 'https://www.gatesfoundation.org/',
    },
    {
      id: 'lebara',
      name: 'Lebara Foundation (UK)',
      logo: 'https://www.csrbox.org/organization/org_logo/1501933996Lebara_Foundation_Logo_RGB.jpg',
      url: 'https://www.lebarafoundation.in/',
    },
    {
      id: 'iyf',
      name: 'India Youth Fund (USA)',
      logo: 'https://youthindiafoundation.com/img/advisors/YIF_LOGO.png',
      url: 'https://iyfglobal.org/',
    },
  ]

  const nationalPartners = [
    {
      id: 'naco',
      name: 'NACO',
      logo: 'https://naco.gov.in/sites/all/themes/naco/images/naco_update.png',
      url: 'https://www.naco.gov.in/',
    },
    {
      id: 'ksaps',
      name: 'KSAPS',
      logo: '',
      url: 'https://ksaps.karnataka.gov.in/',
    },
    {
      id: 'karnataka',
      name: 'Govt. of Karnataka',
      logo: 'https://karnataka.gov.in/frontend/assets/img/Seal_of_Karnataka.png',
      url: 'https://karnataka.gov.in/english',
    },
    {
      id: 'salaam',
      name: 'Salaam Bombay Foundation (India)',
      logo: 'https://www.salaambombay.org/images/SBF-logo.png',
      url: 'https://salaambombay.org/',
    },
    {
      id: 'apollo',
      name: 'Apollo Tyres Foundation',
      logo: 'http://corporate.apollotyres.com/content/dam/orbit/apollo-corporate/brand-identity/atl-logo_transparent_208x80_textonly.png',
      url: 'https://corporate.apollotyres.com/sustainability-and-ethics/initiatives/',
    },
    {
      id: 'oracle',
      name: 'Oracle',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
      url: 'https://www.oracle.com/',
    },
  ]

  const renderGrid = (items) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
      {items.map((p) => (
        <div
          key={p.id}
          className="flex items-center justify-center p-3 rounded-lg transition hover:shadow-md"
        >
          <a
            href={p.url || '#'}
            target={p.url ? '_blank' : undefined}
            rel={p.url ? 'noreferrer' : undefined}
            aria-label={p.name}
            className=" w-full h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#B4C5E4] rounded"
          >
            <ImageWithFallback src={p.logo} alt={`${p.name} logo`} name={p.name} />
          </a>
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000100] text-center mb-6">
          Partners & Donors
        </h2>

        {/* International */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-[#0000F5] mb-4 text-center md:text-left">
            International
          </h3>
          {renderGrid(internationalPartners)}
        </div>

        {/* National / State */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0000F5] mb-4 text-center md:text-left">
            National / State
          </h3>
          {renderGrid(nationalPartners)}
        </div>
      </div>
    </section>
  )
}
