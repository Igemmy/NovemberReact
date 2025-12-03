import React from 'react'

function  One() {
  return (
    <div className='h-20 flex justify-between ' >
        <div>
          <img src="Untitled-3.png" alt="" className='h-20 w-40' />
        </div>
        <div className='flex gap-7'>
          <div className='h-10 bg-amber-400 w-30 justify-center flex items-center '>HOME</div>
          <div className='h-10  w-30 justify-center flex items-center hover:bg-amber-400 '>PAGES</div>
          <div className='h-10  w-30 justify-center flex items-center  hover:bg-amber-400'>CONTACTS</div>
        </div>
      <div className='flex gap-5'>
        <div className='h-15 w-15 bg-amber-400 rounded-[50px] flex justify-center items-center'>
          <img src="download.png" alt="" className='h-10 ' />
        </div>
        <div className=''>
          <p><b>NEED HELP!</b></p>
          <p className='text-amber-400'>+1 (345)463 231 324</p>
        </div>
      </div>
    </div>
  ) 
}

export default One