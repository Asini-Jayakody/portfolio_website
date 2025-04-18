'use client'

import React from 'react'
import { useState } from 'react';
import {db} from '../../config/firebaseConfig'
import {collection, addDoc} from 'firebase/firestore'

export default function Contact() {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }


  const addDataToFireStore = async (formData) =>{
    try {
      const docRef = await addDoc(collection(db, "messages"),{
        name: formData.name,
        designation: formData.designation,
        email: formData.email,
        message: formData.message
      })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const added = await addDataToFireStore(formData)
    if (added) {
      setFormData({})
      alert('Message Sent Successfully!')
    }
  }

  return (
    <section id='contact' className='bg-gray-600 py-16 px-6 md:px-12 lg:px-20'>
        <h1 className='text-3xl text-center font-semibold pb-6'>Contact Me</h1>
        <div className='grid grid-cols-1 max-auto md:grid-cols-2 gap-4'>
          <form  className='flex flex-col gap-4 size-full md:size-auto' onSubmit={handleSubmit}>
            <input type="text" className='border p-3 rounded-lg' id="name" placeholder='Name' onChange={handleChange} value={formData.name || ""}/>
            <input type="text" className='border p-3 rounded-lg' id="designation" placeholder='Designation' onChange={handleChange} value={formData.designation || ""}/>
            <input type="text" className='border p-3 rounded-lg' id="email" placeholder='Email' onChange={handleChange} value={formData.email || ""}/>
            <input type="text" className='border p-3 pb-10 rounded-lg' id="message" placeholder='Message' onChange={handleChange} value={formData.message || ""}/>
            <button className='p-2 px-3  rounded-lg mx-auto bg-gray-700 hover:bg-gray-900'>Submit</button>
          </form>

        </div>
    </section>
    
  )
}
