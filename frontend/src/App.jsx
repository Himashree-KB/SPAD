import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// placeholder pages
function Home() { return <h1 className="text-2xl font-bold">Home Page</h1> }
function About() { return <h1 className="text-2xl font-bold">About Page</h1> }
function Donate() { return <h1 className="text-2xl font-bold">Donate Page</h1> }
function Contact() { return <h1 className="text-2xl font-bold">Contact Page</h1> }

export default function App() {
  return (
    <div>
      <nav className="p-4 flex gap-4 bg-gray-100">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}
