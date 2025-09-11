import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function Home() { return <div className="p-6 mt-7"><Navbar />Home</div> }
function About() { return <div className="p-6 mt-7"><Navbar />About</div> }
function Donate() { return <div className="p-6 mt-7"><Navbar />Donate</div> }
function Contact() { return <div className="p-6 mt-7"><Navbar />Contact</div> }

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFFF1]">
      
      <main className="max-w-[1100px] mx-auto px-5 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
