import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Emmy } from './Wrapcontent'

function Header() {
  let [pa,se]
  let {toggler} = useContext(Emmy)
  let {theme} = useContext(Emmy)
  return (
    <div className='h-32 w-full bg-gray-600 flex justify-between p-4  text-amber-50'>
        <div className='font-bold text-2xl'>IG'S PAGE</div>
        <ol className='flex  items-center gap-3.5'>
          <button onClick={toggler} className={` duration-200 px-5 py-2 rounded-md ${theme ? "bg-black text-white" : "bg-white text-black"}`}>Theme Toggle</button>
            <li><Link to="/">Home</Link> </li>-
            <li><Link to="/a">About</Link> </li>
        </ol>
    </div>
  )
}

export default Header