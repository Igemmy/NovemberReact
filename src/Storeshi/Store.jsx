import React, { useState } from 'react'

function Store() {

    const [items, setItems] = useState([]) 
    
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setItems(data));
      



  return (
    <div className='grid grid-cols-5 gap-5 '>
        {
            items.map((product) => (
                <div key={product.id} className='shadow rounded-2xl p-5'>
                    <div className='flex justify-center'>
                    <img src={product.image} alt="store items" className='h-50' />
                    </div>
                    <h1 className='font-bold text-2xl'>{product.title}</h1>
                    <p className='whitespace-nowrap overflow-hidden text-ellipsis'>{product.description}</p>
                    <p>{product.rating.rate}</p>
                    <h2 className='font-extrabold'>${product.price}</h2>
                </div>
            )
        )}

    </div>
  )
}

export default Store