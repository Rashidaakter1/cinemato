import React from 'react'

export const Navbar = () => {
  return (
    <div className='text-red-600 flex items-center justify-between'>
      <h1 className='text-4xl'>Cinemato</h1>
      <div className='px-6'>
        <button className=' m-2 text-white bg-red-600 py-2 px-6 '>sign in</button>
        <button className=' m-2 text-white bg-red-600 py-2 px-6 '> sign up</button>
      </div>
    </div>
  )
}
