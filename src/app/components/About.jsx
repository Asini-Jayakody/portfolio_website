import React from 'react'

const eduacationData = [
    {
        title: "BSc Eng Hons, Electronic and Telecommunication Engineering",
        institute: "University of Moartuwa",
        duration: "2021-Present",
        additional: "CGPA: 3.81/4.00 Dean's List: Semester 1,4,6,7"
    },
    {
        title: "Secondary Education",
        institute: "Newstead Girls' college, Negombo",
        duration: "2011-2019",
        additional: "G.C.E. A/Ls: 3As G.C.E. O/Ls: 9As"
    }
]

const workData = [
    {
        title: "Intern Software R&D",
        company: "EXE.lk",
        duration: "April 2025- present"
    },
    {
        title: "Intern ML Engineer",
        company: "IronOne Technologies (Pvt) Limited, Colombo 02",
        duration: "Nov 2023 - May 2024"
    }
]

export default function About() {
  return (
    <div>
        <h1>About Me</h1>
        <p>Hello! I am Asini jayakody, and I am in my final year pursuing a bachelor's degree in Electronic and Telecommunication Engineering at the university of Moratuwa.
            Through my academic journey I have developed solid foundation in software development and AI/ML application building, continuously seeking opportunities to expand my knowledge and skills.
        </p>
        <p>
        I am deeply passionate about leveraging my expertise to contribute meaningfully to the industry and society. 
        My goal is to develop innovative solutions that address real-world challenges while continuously learning and evolving.
        I am sincerely grateful to my parents, professors, schools, university, and training organizations for their guidance and support.
        Their encouragement has shaped me into the person I am today, instilling in me a strong foundation, a positive mindset, and the drive to make a lasting impact in my field. 
        </p>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <h1>Education</h1>
                {eduacationData.map((item)=>(
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.institute}</p>
                        <p>{item.duration}</p>
                        <p>{item.additional}</p>
                    </div>
                ))}
            </div>
            <div>
                <h1>Work Experience</h1>
                {workData.map((item)=>(
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.company}</p>
                        <p>{item.duration}</p>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}
