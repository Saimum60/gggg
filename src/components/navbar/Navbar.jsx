import React from 'react'
import Shop from '../../assets/shoping.png'
import { FaSearch } from 'react-icons/fa'

const Navbar = ({handelScroll}) => {
  return (
    <nav className='bg-white fixed top-0 left-0 right-0'>
        <div className='max-w-[1300px] mx-auto h-[14vh] px-10 pt-5'>
            <div className='flex justify-between items-center'>
            <a href=""><img src={Shop} alt="" className='w-20 h-20'/></a>
                <div className='flex items-center border-2 border-orange-400 rounded-full'>
                    <input type="text"  name='text' id='text' placeholder='Search' autoComplete='off' className=' py-2 px-3 relative flex-1 focus:outline-none' onFocus={handelScroll}/>
                <span className='text-ml bg-orange-400 rounded-full px-2 py-2 flex-1 text-white'><FaSearch /></span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar