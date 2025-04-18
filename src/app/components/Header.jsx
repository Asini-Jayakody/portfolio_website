import React from 'react'
import Link from 'next/link'


export default function Header() {
  return (
    <header className="bg-sky-300/50 shadow-md py-4 px-8 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-950 hover:cursor-pointer">
            <Link href="#home">Asini Jayakody</Link>
        </h1>
        <nav>
          <ul className="flex gap-6 text-gray-900 font-medium">
            <li className="hover:text-blue-100 transition-colors cursor-pointer"><Link href="#home">Home</Link></li>
            <li className="hover:text-blue-100 transition-colors cursor-pointer"><Link href="#about">About Me</Link></li>
            <li className="hover:text-blue-100 transition-colors cursor-pointer"><Link href="#projects">My Work</Link></li>
            <li className="hover:text-blue-100 transition-colors cursor-pointer"><Link href="#contact">Contact Me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
