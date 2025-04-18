'use client'

import React from 'react'
import Link from 'next/link'

export default function Home() { 
  return (
    <section id='home' className="min-h-screen w-full bg-[url('/images/bg1.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-md backdrop-saturate-150 rounded-xl shadow-xl px-6 md:px-12 py-12 text-center mx-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-950 mb-6">
          Hi! I'm <span className="text-blue-900">Asini Jayakody</span>
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          I am interested in <span className="text-blue-900">Machine Learning</span>
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8 text-lg">
          Final-year undergraduate with a keen interest in software engineering and artificial intelligence related fields. 
          Motivated to learn and grow through hands-on experience, collaboration, and problem-solving. 
          Enthusiastic about contributing to innovative projects and achieving team success.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href={"https://drive.google.com/file/d/1cI6b2YDCwtT594PuVmsOXi5ALeC2DOPg/view?usp=sharing"} className="inline-block bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-950 transition duration-300 shadow-md">Open Resume</Link>
          <Link href="#contact" className="border border-blue-900 text-blue-900 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300 shadow-md">Contact Me</Link>
        </div>
      </div>
    </section>
  )
}
