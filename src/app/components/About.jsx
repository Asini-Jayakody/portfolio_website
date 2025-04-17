// import React from 'react'

// const eduacationData = [
//     {
//         title: "BSc Eng Hons, Electronic and Telecommunication Engineering",
//         institute: "University of Moartuwa",
//         duration: "2021-Present",
//         additional: "CGPA: 3.81/4.00 Dean's List: Semester 1,4,6,7"
//     },
//     {
//         title: "Secondary Education",
//         institute: "Newstead Girls' college, Negombo",
//         duration: "2011-2019",
//         additional: "G.C.E. A/Ls: 3As G.C.E. O/Ls: 9As"
//     }
// ]

// const workData = [
//     {
//         title: "Intern Software R&D",
//         company: "EXE.lk",
//         duration: "April 2025- present"
//     },
//     {
//         title: "Intern ML Engineer",
//         company: "IronOne Technologies (Pvt) Limited, Colombo 02",
//         duration: "Nov 2023 - May 2024"
//     }
// ]

// export default function About() {
//   return (
//     <div>
//         <h1>About Me</h1>
//         <p>Hello! I am Asini jayakody, and I am in my final year pursuing a bachelor's degree in Electronic and Telecommunication Engineering at the university of Moratuwa.
//             Through my academic journey I have developed solid foundation in software development and AI/ML application building, continuously seeking opportunities to expand my knowledge and skills.
//         </p>
//         <p>
//         I am deeply passionate about leveraging my expertise to contribute meaningfully to the industry and society. 
//         My goal is to develop innovative solutions that address real-world challenges while continuously learning and evolving.
//         I am sincerely grateful to my parents, professors, schools, university, and training organizations for their guidance and support.
//         Their encouragement has shaped me into the person I am today, instilling in me a strong foundation, a positive mindset, and the drive to make a lasting impact in my field. 
//         </p>
//         <div className='grid grid-cols-2 gap-4'>
//             <div>
//                 <h1>Education</h1>
//                 {eduacationData.map((item)=>(
//                     <div>
//                         <h2>{item.title}</h2>
//                         <p>{item.institute}</p>
//                         <p>{item.duration}</p>
//                         <p>{item.additional}</p>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <h1>Work Experience</h1>
//                 {workData.map((item)=>(
//                     <div>
//                         <h2>{item.title}</h2>
//                         <p>{item.company}</p>
//                         <p>{item.duration}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>

//     </div>
//   )
// }



import React from 'react'

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
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

        <p className="text-lg leading-relaxed mb-6">
          Hello! I am <span className="font-semibold text-blue-600">Asini Jayakody</span>, a final-year undergraduate in Electronic and Telecommunication Engineering at the University of Moratuwa.
          I have cultivated a strong foundation in software development and AI/ML application building, always seeking new opportunities to grow and contribute.
        </p>

        <p className="text-lg leading-relaxed mb-10">
          I am passionate about developing innovative solutions to real-world challenges and continuously evolving as a learner and professional.
          I am deeply grateful to my parents, professors, and mentors who have shaped my journey with their support and inspiration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Education</h2>
            {educationData.map((item, index) => (
              <div key={index} className="mb-6 bg-blue-50 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700">{item.institute}</p>
                <p className="text-sm text-gray-600">{item.duration}</p>
                <p className="text-sm text-gray-600 italic">{item.additional}</p>
              </div>
            ))}
          </div>

          {/* Work Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Work Experience</h2>
            {workData.map((item, index) => (
              <div key={index} className="mb-6 bg-blue-50 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700">{item.company}</p>
                <p className="text-sm text-gray-600">{item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
