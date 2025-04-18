import React from 'react'


const projects = [
    {
        name: "Semi Supervised Doamin Genaralization",
        dis: "Developed a novel methodology associated with feature modulation for domain generalization in the semi supervised setting related to computer vision under the supervision of Dr. Ranga Rodrigo. Paper submission under review at the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2025. ",
        img: "",
        git: ""
    },
    {
        name: "Real Estate Web Application",
        dis: " Designing and developing a real estate web application with RESTful APIs, JWT authentication, property listing management, and advanced search and filter features, focusing on gaining experience in full-stack development.",
        img: "",
        git: "https://github.com/Asini-Jayakody/MERN-Real-Estate"
    },
    {
        name: "EffiNuSeg: Extended TransNuSeg",
        dis: "  Enhanced a Swin transformer-based nuclei image segmentation model by including architectural changes, boundary refinement, and spatial attention mechanism, achieving 1.14% and 0.30% accuracy gains on two datasets while reducing training time by approximately one hour on an RTX 3090 GPU.",
        img: "",
        git: "https://github.com/Asini-Jayakody/EffiNuSeg-Extended_TransNuSeg"
    },
    {
        name: "Web Game & Web Application Development",
        dis: " Collaborated with a team of 4 to design and develop a Unity-based web game and a questionnaire web application utilizing OOP concepts and software design patterns to promote energy conservation and support electricity demand-supply management. ",
        img: "",
        git: "https://github.com/Pabadhi/SPAC-Studios"
    },
    {
        name: "IEEE SPS VIP Cup 2023: Opthalmic Biomarker Detection",
        dis: " Collaborated with a team of 10 to implement a CNN model for predicting the presence or absence of six ophthalmic biomarkers in OCT scans. Achieved sixth place with an F1-Score of 0.792.",
        img: "",
        git: "https://github.com/DidulaThavisha/TESSERACT"
    }
]

export default function Projects() {
  return (
    <section id='projects' className="bg-gray-900 0 py-16 px-6 md:px-12 lg:px-20 text-white">
        <div>
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-400" >My projects</h1>
            
        </div>
    </section>
  )
}
