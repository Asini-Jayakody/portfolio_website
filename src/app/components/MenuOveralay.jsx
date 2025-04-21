import Link from 'next/link'
import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '@/config/firebaseConfig';
import { useRouter } from 'next/navigation'


export default function MenuOveralay({items}) {
    const router = useRouter()
    const handleSignout = (e) => {
        e.preventDefault()
        signOut(auth).then(() => {
            router.push('/admin/login')
        }).catch((error) => {
            console.log(error)
        });
    }

  return (

        <div className='fixed left-0 z-[9999]  backdrop-blur-lg flex flex-col justify-between h-[calc(100vh-64px)] px-2 pt-4 pb-4 text-xl'>
            <ul className='flex flex-col gap-2 flex-grow px-20'>
                {items.map((item,index)=>(
                    <li key={index}>
                    <Link href={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={handleSignout} className='p-2 bg-blue-500 rounded-lg hover:bg-blue-900'>Log Out</button>
        </div>

  )
}


// import Link from 'next/link'

// export default function MenuOverlay({ items }) {
//   return (
//     <div className="fixed top-16 left-0 z-50 w-64 h-[calc(100vh-64px)] bg-amber-100 bg-opacity-90 backdrop-blur-md shadow-lg flex flex-col justify-between px-4 pt-4 pb-4 text-xl">
//       <ul className="flex flex-col gap-4 flex-grow">
//         {items.map((item, index) => (
//           <li key={index}>
//             <Link href={item.path}>{item.name}</Link>
//           </li>
//         ))}
//       </ul>
//       <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-900">Log Out</button>
//     </div>
//   );
// }
