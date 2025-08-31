 import React from 'react'
 import Ban from '../../assets/ban.jpg'
 
 const Hero = () => {
   return (
     <section className='' >
      <div className='max-w-[1300px] mx-auto px-10'>
      <img src={Ban} alt="" className='h-full w-full relative'/>
        <div className='absolute top-60 left-100'>
          <h6 className='text-2xl text-zinc-800 pl-15'>Unlimited Discount</h6>
          <h1 className='text-red-500 text-9xl font-bold'>SALE</h1>
        <p className='text-2xl text-zinc-800 pl-20'>Up To 50% Off</p>
        </div>
      </div>
     </section>
   )
 }
 
 export default Hero