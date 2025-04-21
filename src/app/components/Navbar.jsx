'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import MenuOveralay from './MenuOveralay'

const navbarItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard"
  },
  {
    name: "Messages",
    path: "/admin/messages"
  }
]

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <nav className="bg-sky-300/50 shadow-md sticky top-0">
      <div className=' flex flex-row py-4 text-black px-2 gap-4'>
        
        <div>
          {
            !navOpen ? (
              <button onClick={() => setNavOpen(true)} className='rounded-lg border p-1 hover:opacity-75 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            ):(
              <button onClick={() => setNavOpen(false)} className='rounded-lg border p-1 hover:opacity-75 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

            )
          }
        </div>
        <h1 className="text-2xl font-bold text-blue-950 hover:cursor-pointer">
            <Link href="/">Asini Jayakody</Link>
        </h1>
      </div>
      {
          navOpen ? (
            <MenuOveralay items={navbarItems}/>
          ): null
        }
    </nav>
  )
}



// export default function Navbar() {
//   const [navOpen, setNavOpen] = useState(false)
//   console.log(navOpen)
//   return (
//     <nav>
//       <div className=' flex flex-row bg-sky-300 py-4 text-black justify-between px-2'>
//         <h1 className="text-2xl font-bold text-blue-950 hover:cursor-pointer">
//             <Link href="/">Asini Jayakody</Link>
//         </h1>
//         <div className='block md:hidden'>
//           {
//             !navOpen ? (
//               <button onClick={() => setNavOpen(true)} className='rounded-lg border p-1 hover:opacity-75 cursor-pointer'>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                 </svg>
//               </button>
//             ):(
//               <button onClick={() => setNavOpen(false)}>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
//                 </svg>
//               </button>

//             )
//           }
//         </div>
//         <div className='hidden md:block'>
//           <div className='flex flex-row gap-2 '>
//             <ul className='flex flex-row gap-2'>
//               {navbarItems.map((item,index)=>(
//                 <li key={index}>
//                   <Link href={item.path}>{item.name}</Link>
//                 </li>
//               ))}
//             </ul>
//             <button className='p-2 bg-blue-500 rounded-lg hover:bg-blue-900'>Log Out</button>
//           </div>
//         </div>
        
//       </div>
//       {
//           navOpen ? (
//             <MenuOveralay items={navbarItems}/>
//           ): null
//         }
//     </nav>
//   )
// }
