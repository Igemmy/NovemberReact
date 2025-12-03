import React, { useState } from 'react'

function ReactHooks() {

    let [obi, setobi] = useState(1)
    let [sis, setsis] = useState("lime")
    let [wii, setwii] = useState(0)
    

    // function bro(params) {
    //     setobi(obi +1)
    // }
    // console.log(obi)

    // function era(params) {
    //     if (sis == 'lime') {
    //         setsis("gray")
    //     } else {
    //         setsis("lime")
    //     }
    // }
    function appear(params) {
        if (wii == 0) {
            setwii("400px")
        } else {
            setwii(0)
            
        }
    }
  return (
    <div className='h-dvh w-full  flex flex-col gap-6 justify-center items-center' style={{backgroundColor: sis}}> 
        <div style={{width: wii}} className='h-96  bg-blue-900 rounded-3xl duration-300 '></div>
        {/* <p>{obi}</p> */}
        <button onClick={appear} className='h-7 w-[80px]  bg-violet-200 rounded-3xl hover:bg-violet-400'>Click Me</button>
    </div>
  )
}

export default ReactHooks