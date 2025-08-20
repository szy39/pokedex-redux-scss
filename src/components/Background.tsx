import React from 'react'
import pokeball from '../assets/pokeball.png'
import pokeball2 from '../assets/pokeball2.png'

function Background() {
  return (
    <div className='background'>
        <img src={pokeball} alt="pokeball" className='pokeball pokeball1' />
        <img src={pokeball2} alt="pokeball2" className='pokeball pokeball2' />
        <img src={pokeball} alt="pokeball" className='pokeball pokeball3' />
        <img src={pokeball2} alt="pokeball2" className='pokeball pokeball4' />
        <img src={pokeball} alt="pokeball" className='pokeball pokeball5' />
        <img src={pokeball2} alt="pokeball2" className='pokeball pokeball6' />
    </div>
  )
}

export default Background