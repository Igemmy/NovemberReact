import React, { useContext } from 'react'
import { Emmy } from './Wrapcontent'


function Home() {

  let {theme} = useContext(Emmy)

  return (
    <div className={`h-dvh w-full duration-200 ${theme ? "bg-lime-300 text-black" : "bg-lime-800 text-white"}`}>Home</div>
  )
}

export default Home