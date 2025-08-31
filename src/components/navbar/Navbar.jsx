import React from 'react'
import Shop from '../../assets/shoping.png'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=''>
        <div className='max-w-[1300px] mx-auto px-10 py-10'>
            <div className='flex justify-between items-center'>
            <a href=""><img src={Shop} alt="" className='w-20 h-20'/></a>
                <div className='flex items-center border-2 border-orange-400 rounded-full'>
                    <input type="text"  name='text' id='text' placeholder='Search' autoComplete='off' className=' py-2 relative flex-1 focus:outline-none'/>
                <span className='text-ml bg-orange-400 rounded-full px-2 py-2 flex-1 text-white'><FaSearch /></span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar