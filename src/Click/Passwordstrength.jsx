import React, { useRef, useState } from 'react'

function Passwordstrength() {
    let [none1, setNone1] = useState("none")
    let [word, setWord]=useState("THIS FIELD IS EMPTY")
    let [w1, setW1] = useState("0%")
    let [w2, setW2] = useState("0%")
    let [w3, setW3] = useState("0%")
    let [w4, setW4] = useState("0%")
    let [w5, setW5] = useState("0%")
    let [w6, setW6] = useState("0%")
    let [w7, setW7] = useState("0%")
    let [w8, setW8] = useState("0%")
    let [w9, setW9] = useState("0%")
    let [w10, setW10] = useState("0%")
    
    let [none2, setNone2] = useState("block")
    let [show, setShow] = useState("")
    let input = useRef()
    function change() {
        if (none1 == "none") {
            setNone1("block")
            setNone2("none")
            setShow(input.current.value)
        } else {
            setNone1("none")
            setNone2("block")
        }
    }
    function password() {
        if (input.current.value.length == 0) {
            setWord("THIS FIELD IS EMPTY")
        }
        if (input.current.value.length == 1) {
            setW1("10%")
            setWord("VERY WEAK🤦‍♂️")
        } else {
            setW1("0%") 
        }
        if (input.current.value.length == 2) {
            setW2("20%")
             setWord("WEAK🤦‍♂️")
        } else {
            setW2("0%")            
        }
        if (input.current.value.length == 3) {
            setW3("30%")
             setWord("STILL WEAK🤦‍♂️")
        } else {
            setW3("0%")            
        }
        if (input.current.value.length == 4) {
            setW4("40%")
             setWord("INCREASE LENGTH PLEASE")
        } else {
            setW4("0%")            
        }
        if (input.current.value.length == 5) {
            setW5("50%")
             setWord("ALLITLE STRONG😗")
        } else {
            setW5("0%")            
        }
        if (input.current.value.length == 6) {
            setW6("60%")
             setWord("GO HIGHER")
        } else {
            setW6("0%")            
        }
        if (input.current.value.length == 7) {
            setW7("70%")
             setWord("STRONG😒")
        } else {
            setW7("0%")            
        }
        if (input.current.value.length == 8) {
            setW8("80%")
             setWord("NICE PASSWORD")
        } else {
            setW8("0%")            
        }
        if (input.current.value.length == 9) {
            setW9("90%")
             setWord("GREAT STRONG😮‍💨")
        } else {
            setW9("0%")            
        }
        if (input.current.value.length >= 10) {
            setW10("100%")
             setWord("VERY STRONG👌")
        } else {
            setW10("0%")            
        }
    }
  return (
    <div className='bg-lime-400 h-dvh w-full flex justify-center items-center'>
        <div className='h-100 w-4/10 bg-blue-300 rounded-3xl'>
            <p className='text-2xl font-bold justify-center flex p-2'>PASSWORD STRENGTH GENERATOR 😶‍🌫️</p>
            <div className='h-9  w-full flex bg-amber-700'>
            <div className='flex w-full bg-amber-100' style={{display:none2}}>
            <input type="password" onInput={password} ref={input} className='w-10/10 border-4 -mr-16.5 border-b-blue-700 h-9 rounded-2xl' />
            <button className='bg-transparent w-1/10 h-9 rounded-4xl active:scale-150' onClick={change}>🙈</button>
            </div>
            <div className='w-full flex bg-lime-200' style={{display:none1}}>
            <input type="text" value={show} className='w-full border-4 border-b-blue-700 -mr-16.5 h-9 rounded-2xl'/>
            <button className='bg-transparent w-1/10 h-9 rounded-4xl active:scale-150' onClick={change}>🙉</button>
            </div>
            </div>
            <div className='h-40 w-full'></div>
            <div className='justify-center flex flex-col'>
            <div className='h-7 w-9/10 rounded-3xl flex bg-blue-200'>
                <div className='w-1/10 h-full rounded-3xl bg-red-700 duration-400' style={{width:w1}}></div>
                <div className='w-2/10 h-full rounded-3xl bg-red-500 duration-400' style={{width:w2}}></div>
                <div className='w-3/10 h-full rounded-3xl bg-red-400 duration-400 ' style={{width:w3}}></div>
                <div className='w-4/10 h-full rounded-3xl  bg-yellow-200 duration-400' style={{width:w4}}></div>
                <div className='w-5/10 h-full rounded-3xl bg-yellow-400 duration-400' style={{width:w5}}></div>
                <div className='w-6/10 h-full rounded-3xl  bg-yellow-500 duration-400' style={{width:w6}}></div>
                <div className='w-7/10 h-full rounded-3xl  bg-yellow-600 duration-400' style={{width:w7}}></div>
                <div className='w-8/10 h-full rounded-3xl bg-lime-400 duration-400' style={{width:w8}}></div>
                <div className='w-9/10 h-full rounded-3xl bg-lime-600 duration-400' style={{width:w9}}></div>
                <div className='w-10/10 h-full rounded-3xl bg-lime-800 rounded-r-3xl duration-400'  style={{width:w10}}></div>
            </div>
            <div className='flex flex-col justify-center w-full'>
            <div className='font-bold justify-center flex text-3xl'>{word}</div>
            {/* <div className='font-bold justify-center flex text-3xl'>VERY WEAK🤦‍♂️</div>

            <div className='font-bold justify-center flex text-3xl'>STILL ALLITLE STRONG😜 </div>
            <div className='font-bold justify-center flex text-3xl'>GO HIGHER</div>
            <div className='font-bold justify-center flex text-3xl'>STRONG😒</div>
            <div className='font-bold justify-center flex text-3xl'>GREAT STRONG😮‍💨</div>
            <div className='font-bold justify-center flex text-3xl'>VERY STRONG👌</div> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Passwordstrength