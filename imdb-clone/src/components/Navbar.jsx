import React from 'react'
import Logo from '../movieLogo.jpg'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='flex border items-center space-x-8 pl-5 py-4'>
      <img src={Logo} alt="" className='w-15'/>

      <Link to="/" className='text-blue-400 font-bold text-xl'>Movies</Link>

      <Link to="Watchlist" className='text-blue-400 font-bold text-xl'>Watchlist</Link>
    </div>
  )
}

export default Navbar
