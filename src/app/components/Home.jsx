import React from 'react'
import Image from 'next/image'
import profilePic from '../../../public/images/AsiniJayakody.jpg'

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Hi! I'm <span className="text-blue-600">Asini Jayakody</span>
        </h1>

        <div className="flex justify-center mb-6">
          <Image 
            src={profilePic}
            alt="Picture of Asini Jayakody"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          I am interested in <span className="text-blue-500">Machine Learning</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
          Final-year undergraduate with a keen interest in software engineering and artificial intelligence related fields. 
          Motivated to learn and grow through hands-on experience, collaboration, and problem-solving. 
          Enthusiastic about contributing to innovative projects and achieving team success.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Contact Me
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition duration-300">
            My Resume
          </button>
        </div>
      </div>
    </section>
  )
}

