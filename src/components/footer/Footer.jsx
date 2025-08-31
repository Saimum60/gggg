import React from 'react'
import Shop from '../../assets/shoping.png'

const Footer = () => {
  return (
    <section className='bg-amber-100'>
        <div className='max-w-[1300px] mx-auto px-10 py-20'>
            <img src={Shop} alt="" className='w-20 h-20' />
            <p className=' py-5 w-100'>Bred for a high content of beneficial substances, our product are all fresh and healthy</p>
            <span>2025 © all right reserved</span>

        </div>
    </section>
  )
}

export default Footer