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
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {educationData.map((item, index) => (
                <li key={index} className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6  text-blue-500  dark:text-blue-300">
                      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                      <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                      <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
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
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {workData.map((item, index) => (
                <li key={index} className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-800 dark:text-blue-300">
                        <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                        <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                        <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
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
