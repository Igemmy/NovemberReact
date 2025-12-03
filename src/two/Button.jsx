import React from 'react'

function Button({btntext , className}) {
  return (
    <div>
        <button  className={className}>{btntext}</button>
    </div>
  )
}

export default Button