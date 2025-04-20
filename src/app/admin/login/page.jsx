'use client'

import React from 'react'
import {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../../config/firebaseConfig'
import { useRouter } from 'next/navigation'

export default function Login() {
    const [formData,setFormData] = useState({})
    const router = useRouter()

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id] : e.target.value
        })
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await signInWithEmailAndPassword(auth, formData.email, formData.password)
            console.log(res.user)
            console.log(auth.currentUser)
            if (res.user){
                setFormData({})
                router.push('/admin/dashboard')
            }
            
        } catch (error) {
            console.log(error)
            alert('Invalid Credentials')
        }
        }

  return (
    <div className="min-h-screen w-full bg-[url('/images/bg1.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className='w-full max-w-3xl bg-white/30 backdrop-blur-md backdrop-saturate-150 rounded-xl shadow-xl px-6 md:px-12 py-12 text-center mx-4'>
            <h1 className='text-3xl text-black font-semibold pb-6'>Log In</h1>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <input type="text" placeholder='Email' id='email' className='p-3 rounded-lg border' onChange={handleChange} value={formData.email || ""}/>
                <input type="text" placeholder='Password' id='password' className='p-3 rounded-lg border' onChange={handleChange} value={formData.password || ""} />
                <button className='bg-slate-700 hover:bg-slate-900 text-white p-3 rounded-lg' >Submit</button>
            </form>
        </div>
    </div>
  )
}
