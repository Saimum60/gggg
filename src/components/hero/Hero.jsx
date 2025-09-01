 import React, { useEffect, useState } from 'react'
 import Ban from '../../assets/ban.jpg'
 import Sh from '../../assets/banner.jpg'
 
 const Hero = () => {

 let initialTime= 12 * 60 * 60;

 let[timeLeft,setTimeLeft]=useState(()=>{
  let storedTime = localStorage.getItem('remainingTime');
  return storedTime && parseInt(storedTime, 10) >0 ?
  parseInt(storedTime, 10) : initialTime
 });

 let formatTime =(time) =>{

  useEffect(()=>{

    if(timeLeft <=0) return
  

    let timer= setInterval(()=>{
      setTimeLeft(prev=>{
      if(prev <= 1){
        clearInterval(timer);
        localStorage.setItem('remainingTime',0)
        return 0;
      }
      
       let remainingTime = prev - 1

       localStorage.setItem('remainingTime',remainingTime)
       return remainingTime;
      })

    },1000);

    return() => clearInterval(timer)

  },[timeLeft])

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds= time % 60;

  return{
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  }
 }

 let{hours,minutes,seconds}= formatTime(timeLeft)

   return (
     <section className='h-[60vh] mt[14vh] bg-cover bg-top' style={{backgroundImage:`url(${Sh})`}}>
      <div className=' max-w-[1300px] mt-[14vh] h-100 mx-auto flex flex-col gap-3 px-12 justify-center'>
      
        <div className=' pt-10'>
          <h6 className='text-2xl text-zinc-800 '>Unlimited Discount</h6>
          <h1 className='text-red-600 text-9xl font-bold uppercase tracking-tight'> Big SALE !</h1>
        <p className='text-3xl text-zinc-800 '>Up To 50% Off</p>
        <div className='text-6xl font-bold text-zinc-800 flex gap-3 mt-5'>
          <span className='text-white bg-zinc-800 p-3'>{hours}</span>
          <span className='text-white bg-zinc-800 p-3'>{minutes}</span>
          <span className='text-white bg-zinc-800 p-3'>{seconds}</span>
        </div>
        </div>
      </div>
     </section>
   )
 }
 
 export default Hero