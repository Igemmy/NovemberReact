import React from 'react'
import { useLocation } from 'react-router-dom'
function Welcome() {
  let location = useLocation();
  console.log()
  return (
    <div className='h-dvh w-full grid place-items-center'>
        <div className='h-[98%] w-[99%] bg-lime-700 flex p-3'>
            <div className='h-\[100\%\] w-[20%] rounded-r-4xl bg-amber-300 grid place-items-center '>
                <div>
                <h1 className='font-extrabold '>HOME</h1>
                <h1 className='font-extrabold '>ABOUT</h1>
                <h1 className='font-extrabold '>INFO</h1>
                </div>
            </div>
            <div className='w-[70%] px-10'>
                <h1 className='text-3xl font-bold'>WELCOME <span className='text-3xl text-amber-50 uppercase'>{location.state.username}</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate nihil dolorem corporis quia et illo quos! Dolore, labore iure, facere omnis, esse amet repudiandae animi fugiat facilis sunt maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto nisi ratione animi et, alias asperiores illum nesciunt. Aperiam voluptatibus reiciendis rem cumque est consectetur, natus provident non quaerat fugiat!</p>
            </div>
        </div>
    </div>
  )
}

export default Welcome