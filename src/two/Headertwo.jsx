import React from 'react'
import Button from './Button'

function Headertwo() {
  return (
    <div className=' bg-blue-400
     h-180 w-100% flex flex-col justify-center items-center '>
      <p className='text-7xl font-extrabold text-amber-50'>
        DONATE TO HELP
      <br />
      CHILDREN IN AFRICA</p>
      <div className='flex gap-3.5'>
      <Button btntext="MISSION" className='bg-amber-400 h-15 w-40 rounded-4xl font-semibold'/>
      <Button btntext="DONATE NOW" className='text-white h-15 w-40  rounded-4xl border-2 border-white font-semibold'/>
      </div>
      </div>
    
  )
}

export default Headertwo










