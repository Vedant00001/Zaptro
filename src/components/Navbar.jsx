import { MapPin } from 'lucide'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white py-3 shadow-2x1 '>
    <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/*logo section */}
        <div className=''>
            <Link to='/'><h1 className='font-bold text-3xl'><span className='text-red-500'>Z</span>aptro</h1></Link>
            <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar
