import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 justify-between">
    <a className="font-bold text-xl underline">GalleryPro📷</a>
    <button onClick={()=>signOut(auth)}>Logout</button>
  </div>
  )
}

export default Navbar
