import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 hover:cursor-pointer">
          Asini Jayakody
        </h1>
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">About Me</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">My Work</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact Me</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
