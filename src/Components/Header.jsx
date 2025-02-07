import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
    import React from 'react'

export default function Header() {
  return (
    <header className='bg-yellow-200 shawdow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-blue-500'>Homiqo</span>
        </h1>
        </Link>
        <form className='bg-orange-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm-w-64 '/>
            <FaSearch className='text-yellow-600'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-yellow-700 hover:underline'>Home</li>
            </Link>
            <Link to='/About'>
            <li className='hidden sm:inline text-yellow-700 hover:underline'>About</li>
            </Link>
            <Link to='/Sign-in'>
            <li className=' text-yellow-700 hover:underline'>SignIn</li>
            </Link>
            
        </ul>
        </div>
    </header>
  )
}
