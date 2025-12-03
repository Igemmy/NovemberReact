import React from 'react'

function Box({Boxtext, className,Boxtext3,Boxtext2}) {
  return (
    <div className={className} >
       <h1 className='text-2xl w-full'>
        {Boxtext}
        </h1> 
        <br /><br />{Boxtext2}
        <br /><br /><br />
        <h2 className='underline font-semibold w-full  flexwarp'> 
        {Boxtext3}
        </h2>
    </div>
  )
}

export default Box