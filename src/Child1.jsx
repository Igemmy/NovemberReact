import React from 'react'

function Child1({boyName, mass}) {
  return (
    <div>
        <h1 className=' text-4xl text-blue-800'>HELLO {boyName} {mass}</h1>
    </div>
  )
}

export default Child1