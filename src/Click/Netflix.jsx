import React, { useState } from 'react'

function Netflix() {
   let [h1, setH1] = useState("0px")
   let [h11, setH11] = useState("0px")
   let [h111, setH111] = useState("0px")
   let [h1111, setH1111] = useState("0px")
   let [f1, setF1] = useState("0px")
   let [f11, setF11] = useState("0px")
   let [f111, setF111] = useState("0px")
   let [f1111, setF1111] = useState("0px")
   let [r1, setR1] = useState("0deg")
   let [r11, setR11] = useState("0deg")
   let [r111, setR111] = useState("0deg")
   let [r1111, setR1111] = useState("0deg")
   let [call, setcall] = useState("0px")
//    function call(params) {
//         if (condition) {
            
//         } else {
            
//         }
//    }
    function appear(params) {
        if (h1=="0px") {
            setH1("76px")
            setF1("16px")
            setR1("45deg")
            setH11("0px")
            setH111("0px")
            setH1111("0px")
            setF11("0px")
            setF111("0px")
            setF1111("0px")
            setR11("0deg")
            setR111("0deg")
            setR1111("0deg")
        } else {
            setH1("0px")
            setF1("0px")
            setR1("0deg")
        }
    }
    function aar(params) {
        if (h1111=="0px") {
            setH1111("76px")
            setH1("0px")
            setH11("0px")
            setH111("0px")
            setF1111("16px")
            setF1("0px")
            setF11("0px")
            setF111("0px")
            setR1111("45deg")
            setR1("0deg")
            setR11("0deg")
            setR111("0deg")
        } else {
            setH1111("0px")
            setF1111("0px")
            setR1111("0deg")
        }
    }
    function apear(params) {
        if (h11=="0px") {
            setH11("76px")
            setH1("0px")
            setH111("0px")
            setH1111("0px")
            setF11("16px")
            setF1("0px")
            setF111("0px")
            setF1111("0px")
            setR11("45deg")
            setR1("0deg")
            setR1111("0deg")
            setR111("0deg")
        } else {
            setH11("0px")
            setF11("0px")
            setR11("0deg")
        }
    }
    function aear(params) {
        if (h111=="0px") {
            setH111("76px")
            setH1111("0px")
            setH1("0px")
            setH11("0px")
            setF111("16px")
            setF1111("0px")
            setF11("0px")
            setF1("0px")
            setR111("45deg")
            setR1111("0deg")
            setR11("0deg")
            setR1("0deg")
        } else {
            setH111("0px")
            setF111("0px")
            setR111("0deg")
        }
    }
  return (
    <div className='h-dvh w-full bg-gray-600 flex flex-col gap-3.5 justify-center items-center'>
        <div className='w-2xl h-10  text-white text-2xl font-bold'>
            <p><span>Frequently Asked Questions</span> </p>
        </div>
        <div onClick={appear} className='w-2xl h-12 bg-black cursor-pointer text-white font-bold p-1 text-2xl flex justify-between  '>
            <span>HOW TO WATCH NETFLIX😎</span> <span className='duration-500 ' style={{rotate:r1}}>+</span> 
        </div>
        <div className='w-2xl h-19 bg-black text-white text-center duration-500' style={{height:h1, fontSize:f1}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem natus iste esse neque quos quia harum. Esse, dolor nesciunt quae nobis deserunt suscipit fugit, facere, ratione et cum vitae?
        </div>
        <div onClick={apear} className='w-2xl h-12 bg-black p-1 cursor-pointer text-white text-2xl font-bold flex justify-between '>
            <span>WHERE TO WATCH NETFLEX</span> <span style={{rotate:r11}}>+</span>
        </div>
         <div className='w-2xl h-19 bg-black duration-500 text-center text-white' style={{height:h11, fontSize:f11}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem natus iste esse neque quos quia harum. Esse, dolor nesciunt quae nobis deserunt suscipit fugit, facere, ratione et cum vitae?
        </div>
        <div onClick={aear} className='w-2xl h-12 p-1 bg-black text-white text-2xl cursor-pointer font-bold flex justify-between '>
            <span>HOW TO SUBSCRIBE ON NETFLIX</span> <span className='duration-500' style={{rotate:r11}}>+</span>
        </div>
         <div className='w-2xl h-19 bg-black text-white duration-500' style={{height:h111, fontSize:f111}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem natus iste esse neque quos quia harum. Esse, dolor nesciunt quae nobis deserunt suscipit fugit, facere, ratione et cum vitae?
        </div>
        <div onClick={aar} className='w-2xl p-1 h-12 bg-black cursor-pointer font-bold text-white text-2xl flex justify-between '>
            <span>HOW CAN I SAVE VIDEOS</span> <span className='duration-500' style={{rotate:r1111}}>+</span>
        </div>
         <div className='w-2xl h-19 bg-black text-center duration-500 text-white' style={{height:h1111, fontSize:f1111}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem natus iste esse neque quos quia harum. Esse, dolor nesciunt quae nobis deserunt suscipit fugit, facere, ratione et cum vitae?
        </div>
    </div>
  )
}

export default Netflix