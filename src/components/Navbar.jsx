import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex flex-row m-3 items-center justify-between'>
      <Link className='text-red-600 text-2xl font-bold'>witt.</Link>
      <div className='flex flex-row md:space-x-6 flex-grow justify-center'>
      <Link to='/home' className='text-lg hover:text-red-600'>Home</Link>
      <Link to='/pricing' className='text-lg hover:text-red-600'>Pricing</Link>
      <Link to='/blog' className='text-lg hover:text-red-600'>Blog</Link>
      <Link to='/faqs' className='text-lg hover:text-red-600'>FAQs</Link>
      <Link to='/about' className='text-lg hover:text-red-600'>About Us</Link>
      </div>
    </div>
  )
}
