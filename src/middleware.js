import { NextResponse } from 'next/server'
import { auth } from './config/firebaseConfig'
// import { authenticate } from 'auth-provider'
 
export function middleware(request) {
  // // const isAuthenticated = authenticate(request)
 
  // // // If the user is authenticated, continue as normal
  // const user = auth.currentUser
  // console.log(user)
  // if (user) {
  //   return NextResponse.next()
  // }
 
  // // Redirect to login page if not authenticated
  // return NextResponse.redirect(new URL('/admin/login', request.url))
  NextResponse.next()
}
 
// export const config = {
//   matcher: ['/admin/dashboard','/admin/messages'],
// }