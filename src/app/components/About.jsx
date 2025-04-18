import React from 'react'
import Image from 'next/image'
import profilePic from '../../../public/images/AsiniJayakody.jpg'


const educationData = [
  {
    title: "BSc Eng Hons, Electronic and Telecommunication Engineering",
    institute: "University of Moratuwa",
    duration: "2021 - Present",
    additional: "CGPA: 3.81/4.00 | Dean's List: Semesters 1, 4, 6, 7"
  },
  {
    title: "Secondary Education",
    institute: "Newstead Girls' College, Negombo",
    duration: "2011 - 2019",
    additional: "G.C.E. A/Ls: 3As | G.C.E. O/Ls: 9As"
  }
]

const workData = [
  {
    title: "Intern - Software R&D",
    company: "EXE.lk",
    duration: "April 2025 - Present"
  },
  {
    title: "Intern - ML Engineer",
    company: "IronOne Technologies (Pvt) Ltd, Colombo 02",
    duration: "Nov 2023 - May 2024"
  }
]

export default function About() {
  return (
    <section id='about' className="bg-gray-600 py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className='text-justify'>

                <p className="text-lg leading-relaxed mb-6">
                Hello! I am Asini Jayakody, a final-year undergraduate in Electronic and Telecommunication Engineering at the University of Moratuwa.
                I have cultivated a strong foundation in software development and AI/ML application building, always seeking new opportunities to grow and contribute.
                </p>

                <p className="text-lg leading-relaxed mb-10">
                I am passionate about developing innovative solutions to real-world challenges and continuously evolving as a learner and professional.
                I am deeply grateful to my parents, professors, and mentors who have shaped my journey with their support and inspiration.
                </p>
            </div>


            <div className="flex justify-center mb-6">
                <Image 
                src={profilePic}
                alt="Picture of Asini Jayakody"
                width={300}
                height={300}
                className="rounded-b-full object-center shadow-lg"
                />
            </div>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Education</h2>
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
                {educationData.map((item, index) => (
                <li key={index} class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="text-lg font-normal">{item.title}</h3>
                    <p className="text-gray-900">{item.institute}</p>

                    <time className="text-sm text-gray-900">{item.duration}</time>
                    <p className="text-sm text-gray-900 italic">{item.additional}</p>
                </li>
            ))}

            </ol>
          </div>

          {/* Work Section */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Work Experience</h2>
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
                {workData.map((item, index) => (
                <li key={index} class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="text-lg font-normal">{item.title}</h3>
                    <p className="text-gray-900">{item.company}</p>

                    <time className="text-sm text-gray-900">{item.duration}</time>
                </li>
            ))}

            </ol>
          </div>
        </div>
        <div>
            <h3>Tech Stack</h3>
            
        </div>
      </div>
    </section>
  )
}
