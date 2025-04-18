import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const projects = [
    {
        name: "Semi Supervised Doamin Genaralization",
        dis: "Developed a novel methodology associated with feature modulation for domain generalization in the semi supervised setting related to computer vision under the supervision of Dr. Ranga Rodrigo. Paper submission under review at the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2025. ",
        img: "/images/dg.png",
        git: ""
    },
    {
        name: "Real Estate Web Application",
        dis: " Designing and developing a real estate web application with RESTful APIs, JWT authentication, property listing management, and advanced search and filter features, focusing on gaining experience in full-stack development.",
        img: "/images/real estate.webp",
        git: "https://github.com/Asini-Jayakody/MERN-Real-Estate"
    },
    {
        name: "EffiNuSeg: Extended TransNuSeg",
        dis: "  Enhanced a Swin transformer-based nuclei image segmentation model by including architectural changes, boundary refinement, and spatial attention mechanism, achieving 1.14% and 0.30% accuracy gains on two datasets while reducing training time by approximately one hour on an RTX 3090 GPU.",
        img: "/images/transnuseg.png",
        git: "https://github.com/Asini-Jayakody/EffiNuSeg-Extended_TransNuSeg"
    },
    {
        name: "Web Game & Web Application Development",
        dis: " Collaborated with a team of 4 to design and develop a Unity-based web game and a questionnaire web application utilizing OOP concepts and software design patterns to promote energy conservation and support electricity demand-supply management. ",
        img: "/images/game.png",
        git: "https://github.com/Pabadhi/SPAC-Studios"
    },
    {
        name: "IEEE SPS VIP Cup 2023: Opthalmic Biomarker Detection",
        dis: " Collaborated with a team of 10 to implement a CNN model for predicting the presence or absence of six ophthalmic biomarkers in OCT scans. Achieved sixth place with an F1-Score of 0.792.",
        img: "/images/opthalmic.jpg",
        git: "https://github.com/DidulaThavisha/TESSERACT"
    }
]



export default function Projects() {
  return (
    <section id='projects' className="bg-gray-900 0 py-16 px-6 md:px-12 lg:px-20 text-blue-950 font-semibold">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-400" >My Projects</h1>
        <div  className='grid grid-cols-2 md:grid-cols-3 gap-6'>
            {projects.map((item,index)=>(
                <div key={index} className='w-full flex flex-col gap-2  bg-white/30 hover:bg-white/50 rounded-xl shadow-xl p-4'>
                    <Image 
                    src={item.img}
                    alt={`image ${index}`}
                    width={300}
                    height={300}
                    className='h-50 w-full rounded-l object-contain md:object-cover'
                     />
                    <div className='flex flex-row gap-2'>
                        <h3>{item.name}</h3>
                        <Link href={item.git}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                    <p className='text-gray-300 font-normal'>{item.dis}</p>
                </div>
            ))}
        </div>
    </section>
    

  )
}
