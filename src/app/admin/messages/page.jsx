'use client'
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';


export default function Messages() {
  const [messages,setMessages] = useState([])
  const [loading,setLoading] = useState(true)

  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/login");
      } else {
        setPageLoading(false);
      }
    });

    return () => unsubscribe(); // clean up on unmount
  }, []);

  useEffect(()=>{
    setLoading(true)
    const getMessagesFromFirestore = async (e) => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const fetchedMessages = querySnapshot.docs.map(doc => ({
        ...doc.data()
      }));
      setMessages(fetchedMessages)
      setLoading(false)
    }
    getMessagesFromFirestore()
  },[])

  console.log(messages)
  if (pageLoading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-900 min-h-screen w-full">
      {loading ? <h1>Loading messages</h1>:(messages.length===0 && !loading) ? (
        <h1>No messages</h1>
      ):(

        <div className="bg-gray-900 min-h-screen min-w-screen px-6 pt-6 text-white">
          <div className="w-full flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-200">Ready to Read!</h3>
              <p className="text-gray-400">Messages are waiting for you.</p>
            </div>
            <div className="ml-3">
              <div className=" flex flex-center gap-2 w-full max-w-sm min-w-[200px]">
                <input
                  className="w-full h-10 pr-11 pl-3 py-2 rounded border border-gray-600 bg-gray-800 placeholder:text-gray-400 text-white text-sm shadow-sm focus:outline-none focus:border-gray-400 focus:shadow-md transition"
                  placeholder="Search for message..."
                />
                <button
                  className="h-8 w-8 right-1 top-1 flex items-center justify-center bg-gray-700 rounded"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-full overflow-scroll bg-gray-800/70 border border-gray-700 shadow rounded-lg backdrop-blur-sm bg-clip-border">
          {/* <div className="overflow-x-auto bg-gray-800/70 border border-gray-700 shadow rounded-lg backdrop-blur-sm"> */}
            <table className="min-w-full text-sm text-left text-gray-100">
              <thead className="text-xs uppercase bg-gray-800/90 text-gray-300 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-3 font-semibold">Name</th>
                  <th className="px-6 py-3 font-semibold">Email</th>
                  <th className="px-6 py-3 font-semibold">Designation</th>
                  <th className="px-6 py-3 font-semibold">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {messages.map((message, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">{message.name}</td>
                    <td className="px-6 py-4">{message.email}</td>
                    <td className="px-6 py-4">{message.designation}</td>
                    <td className="px-6 py-4">{message.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      )}

      
    </div>
  )
}


