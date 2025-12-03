import React, { useState } from 'react'

function Sidebar() {
    let [car, setcar] = useState(0)

    function fa(params) {
        if (car == 0) {
            setcar(300)
        } else {
            setcar(0)
        }
    }
  return (
    <div className='h-dvh w-full p-1'>
        <h1 onClick={fa} className='bg-black p-0.5 text-white w-[300px] h-8 rounded-tr-3xl cursor-pointer'>Click to access more</h1>
        <div style={{width: car, }} className=' h-[500px] rounded-br-3xl bg-black duration-400 '>
            <div className='h-[50px] text-white  bg-gray-800 hover:bg-gray-900'>HOME</div>
            <div className='h-[50px] text-white  bg-gray-800 hover:bg-gray-900'>ABOUT</div>
            <div className='h-[50px] text-white  bg-gray-800 hover:bg-gray-900'>INFO SHI</div>
            <div className='h-[50px] text-white  bg-gray-800 hover:bg-gray-900'>PRODUCTS</div>
            <div className='h-[50px] text-white  bg-gray-800 hover:bg-gray-900'>FACTORS</div>
            <div className='h-[50px] text-white  bg-gray-800 hover:bg-gray-900'>DELIVERY</div>
            <div className='h-[50px] text-white  bg-gray-800 hover:bg-gray-900'>SUBSCIBE</div>
            <div className='h-[50px] text-white  bg-gray-800 hover:bg-gray-900'>PAYMENTS</div>
            <div className='h-[50px] text-white  bg-gray-800 hover:bg-gray-900'>TRANSACTIONS</div>
            <div className='h-[50px] text-white  bg-gray-800 hover:bg-gray-900 rounded-br-3xl'></div>
        </div>
    </div>
  )
}

export default Sidebar