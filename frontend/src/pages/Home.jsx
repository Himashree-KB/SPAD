import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="p-6 mt-7">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Welcome to SPAD</h1>
      <p className="text-lg text-gray-700">
        This is the home page.
      </p>
    </div>
  )
}
