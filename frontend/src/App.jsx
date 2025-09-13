import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Impact from './pages/Impact'
import Involved from './pages/Involved'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFFF1]">
      <Navbar />  {/* <-- Add navbar here so it appears on all pages */}
      
      <main className="max-w-[1100px] mx-auto px-5 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/involved" element={<Involved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
