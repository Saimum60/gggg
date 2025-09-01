import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Item from '../item/Item'
import Footer from '../footer/Footer'

const Home = () => {


  let [searchTerm,setSearchTerm]=useState()

  let handelScroll=()=>{
    let section = document.getElementById('product.section')

    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }



  return (
    <>
    <Navbar
    handelScroll={handelScroll}
    />
    <Hero/>
    <Item/>
    <Footer/>
    </>
  )
}

export default Home