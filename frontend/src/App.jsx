import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer' 

import Home from './pages/Home'
import About from './pages/About'
import Impact from './pages/Impact'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import ThankYouMess from './pages/ThankYouMess'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFFF1]">
      {/* Navbar should stay at the top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow px-5 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<ThankYouMess />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  )
}
