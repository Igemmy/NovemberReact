import React from 'react'
import Child1 from './Child1'

function Mother() {

    let jojo = 'SMART';
    let jojo2 = 'MARVEL';

  return (

    <div>

        <Child1 boyName = {jojo} mass ={jojo2} />
        
    </div>
  )
}

export default Mother