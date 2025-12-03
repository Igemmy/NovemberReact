import React from 'react'

function Calc() {

    

  return (
    <div className='h-dvh w-full bg-lime-600 flex justify-center items-center'>
        <div className='h-5/10 w-3/10 py-10 px-18 bg-amber-200 rounded-3xl flex flex-col gap-2'>
            <input type="number" className='h-8 w-[300px] bg-amber-100'/>
            <input type="number" className='h-8 w-[300px] bg-amber-100'/>
            <div className='flex w-[300px] h-6 justify-around py-3'>
            <button className='h-6 w-10 flex justify-center items-center bg-amber-300'>+</button>
            <button className='h-6 w-10 flex justify-center items-center bg-amber-300'>-</button>
            <button className='h-6 w-10 flex justify-center items-center bg-amber-300'>x</button>
            <button className='h-6 w-10 flex justify-center items-center bg-amber-300'>/</button>
            </div>
            <br /><br /><br />
            <h1 className='h-8 w-[300px] bg-lime-400 rounded-2xl font-black'></h1>
        </div>
        
    </div>
  )
}

export default Calc