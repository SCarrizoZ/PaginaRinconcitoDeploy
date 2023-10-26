import React from 'react'
// Images
import rinconcito_hero from "../img/rinconcito_hero.png"
// Link
import {Link} from 'react-router-dom'

export  function Hero() {
  return (
    <section className='bg-gray-200 h-[800px] bg-hero  bg-no-repeat bg-cover bg-center '>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex'>
          <div></div>
        </div>
        {/* image */}
        
          {/*<img src={rinconcito_hero} alt="" />*/}
        
      </div>
    </section>
  )
}
