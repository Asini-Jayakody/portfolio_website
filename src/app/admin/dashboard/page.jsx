'use client'

import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';

export default function Dashbord() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/login");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe(); // clean up on unmount
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="h-[calc(100vh-64px)] w-full bg-[url('/images/bg1.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <h1 className='font-semibold text-5xl text-sky-400'>Welcome Asini!</h1>
    </div>
  )
}
