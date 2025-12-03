import {useState} from 'react';

function App() {
      const [num1, setNum1] = useState("")
      const [num2, setNum2] = useState("")
      const [answer, setAnswer] = useState("")

    const add = ()=> {
      setAnswer(Number(num1) + Number(num2));
    }
    
    const subtract = ()=> {
      setAnswer(Number(num1) - Number(num2));
    }
    const multiply = ()=> {
      setAnswer(Number(num1) * Number(num2));
    }
    const divide = ()=> {
      if ((Number(num2) === 0)) {
        setAnswer("Cannot Divide by Zero")
      } else {
        
      }
      setAnswer(Number(num1) / Number(num2));
    }

 
  return (
    <div className='h-screen w-full flex items-center justify-center'>

      <div className='w-[300px] h-[200px] bg-[#eeeeee] rounded-3xl shadow-md flex flex-col justify-evenly'>
        <div className='w-full flex flex-col p-6 gap-5'>
          <input className='outline-1' type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
          <input className='outline-1' type="number" value={num2} onChange={(e) => {setNum2(e.target.value)}} />
        </div>
        <div className="w-full flex gap-2 items-center justify-evenly">
          <div onClick={add} className=" p-3 h-7 shadow-md transition-all ease-in-out duration-100 cursor-pointer border-b  border-amber-900 active:shadow-2xs active:border-t active:border-b-0  flex items-center justify-center">+</div>
          <div onClick={subtract} className=" p-3 h-7 shadow-md transition-all ease-in-out duration-100 cursor-pointer border-b  border-amber-900 active:shadow-2xs active:border-t active:border-b-0  flex items-center justify-center">-</div>
          <div onClick={multiply} className=" p-3 h-7 shadow-md transition-all ease-in-out duration-100 cursor-pointer border-b  border-amber-900 active:shadow-2xs active:border-t active:border-b-0  flex items-center justify-center">*</div>
          <div onClick={divide} className=" p-3 h-7 shadow-md transition-all ease-in-out duration-100 cursor-pointer border-b  border-amber-900 active:shadow-2xs active:border-t active:border-b-0  flex items-center justify-center">/</div>
        </div>
        <h2 className='w-full items-center justify-center h-10 text-2xl text-center'>Answer :  {answer}</h2>
      </div>
    </div>
  )
}

export default App