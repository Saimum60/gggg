import React, { useContext, useState } from 'react'
import { ApiData } from '../context/ContextApi'
import { FaHeart, FaPlus, FaStar } from 'react-icons/fa'
import Button from '../button/Button'


const Hero = () => {

  let categories=['All','beauty','fragrances','furniture', 'groceries']
  
    let[activeTab,setActiveTab]=useState("All")
  
    let filterdItems = activeTab === "All"
    ? useContext(ApiData) :useContext(ApiData).filter(item=>item.category === activeTab)
   

  

  
  
  let reuse=filterdItems.map((item)=>(
            <div key={item} className='bg-zinc-100 py-10 px-10'>
              <div className='flex justify-between'>
                <span className='text-2xl text-zinc-500'>
                  <FaHeart/>
                </span>
                <button className='text-ml bg-amber-500 p-2'>
                  <FaPlus/>
                </button>
              </div>
              <img src={item.thumbnail} alt="" />
               <div className=' rounded-2xl'>
                <h1 className='text-lg font-bold'>{item.title}</h1>
              
              <span className='text-2xl font-semibold '>${item.price}</span>
              <div className='flex text-yellow-500 pt-3'>
                {Array.from({length:item.rating}, (_, index)=>(
                        <FaStar />
                      ))}
              </div>
              <div className='pt-3'>
                <Button text='Buy Now'/>
              </div>
               </div>
             
              
              

            </div>
          ))
  
  




  return (

    <section id='product.section' className=''>
      <div className='max-w-[1300px] mx-auto px-10 py-20'>
        <div>
          <h1 className='text-6xl font-bold text-center pb-10'><span className='text-orange-500'>Our</span> Product</h1>

        </div>

        <div>
          <div className='flex gap-3 justify-center pt-7 pb-10 '>
        {categories.map((category)=>(
            <button Key={category} className={` px-2.5 md:px-5 py-2 text-lg rounded-lg cursor-pointer  ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white ': 'bg-zinc-100'} `} onClick={()=>setActiveTab(category)}>
                {category}
            </button>
        ))}
    </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-20 '>
          {reuse}
          
        </div>
      </div>

    </section>
  )
}

export default Hero


