import React from 'react'

const Cards = () => {
  return (
    
    <div className='mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4'>
        
            <div className='bg-white flex flex-col justify-center lg:col-span-2  p-3'>
                <h2 className='text-amber-400 opacity-40 text-2xl'>Pago</h2>
                <p className='text-6xl'>200$</p>
            </div>
            <div className='bg-white flex flex-col p-4 lg:col-span-1'>
            <h2 className='text-amber-400 opacity-40 text-2xl'>Pendiente</h2>
            <p className='text-5xl'>15/7/25</p>
            </div>
            <div className='bg-white flex flex-col p-4 lg:col-span-1'>
            <h2 className='text-amber-400 opacity-40 text-2xl'>Deuda</h2>
            <p className='text-6xl'>0</p>
            </div>
          </div>
  )
}

export default Cards
