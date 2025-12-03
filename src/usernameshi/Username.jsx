import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Username() {
    let [formData , SetFormData] = useState({
        username: "",
        password: ""
})
    let navigate = useNavigate();

    function forsubmit(e) {
        e.preventDefault()
        navigate('/welcome' , {state: formData })
        console.log(formData)
    }
    let handlechange =(Emma)=>{
        // let obi =  `${Emma.target.name}: ${Emma.target.value}`
        SetFormData({...formData,[Emma.target.name]: Emma.target.value});
    }
  return (
    <div className='h-dvh bg-lime-800 w-full    grid place-items-center'>
        <form onSubmit={forsubmit}>

        <div className='h-120 w-110 bg-lime-700 rounded-2xl shadow-2xl shadow-white'>
            <h1 className='w-full grid place-items-center text-3xl py-3'>LOGIN PAGE</h1>
            <div className='h-[80%] flex justify-center flex-col'>
            <div className='grid place-items-center'>
                <p className='font-bold'>USERNAME</p><input type="text"  name='username' onChange={handlechange} className='border-2 border-black ' />
            </div>
            <div className='grid place-items-center'>
                <p className='font-bold'>PASSWORD</p><input type="password" name='password' onChange={handlechange} className='border-2 border-black ' />
            </div>
            <div className='flex justify-center py-3'>
            <button className='bg-lime-300 w-30 h-10 rounded-3xl '>SIGN UP</button>
            </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Username