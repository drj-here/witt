import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='justify-between'>
    <div className='flex flex-row mb-5 justify-center items-center'>
      <Link className='text-red-600 text-3xl font-bold'>witt.</Link>
      <div className={`justify-center md:flex space-x-1 md:space-x-6 flex-grow ${showMenu ? 'block' : 'hidden'}`}>
        <Link to='/' className='text-lg hover:text-red-600'>Home</Link>
        <Link to='/pricing' className='text-lg hover:text-red-600'>Pricing</Link>
        <Link to='/blog' className='text-lg hover:text-red-600'>Blog</Link>
        <Link to='/faqs' className='text-lg hover:text-red-600'>FAQs</Link>
        <Link to='/about' className='text-lg hover:text-red-600'>About Us</Link>
      </div>
      
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
}
