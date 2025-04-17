import React from 'react'
import Image from 'next/image'
import profilePic from '../../../public/images/AsiniJayakody.jpg'

export default function Home() {
  return (
    <div>
        <h1>Hi! I'm Asini Jayakody</h1>
        <div>
            <Image 
                priority
                // src="https://drive.google.com/uc?export=view&id=1ZWxx5Jr4pI8HJqa5ZZ4ifs_dXVFXCl2K"
                src={profilePic}
                alt="Picture of the author"
                width={300}
                height={300}
                className="rounded-full aspect-square object-cover"
            />
        </div>
        <h1>I am interested in machine learning</h1>
        <p> Final-year undergraduate with a keen interest in
            software engineering and artificial intelligence related
            fields. Motivated to learn and grow through hands-on
            experience, collaboration, and problem-solving.
            Enthusiastic about contributing to innovative projects
            and achieving team success.
        </p>
        <div className='flex gap-3'>
            <button>Contact Me</button>
            <button>My Resume</button>
        </div>
    </div>
  )
}
