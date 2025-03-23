import React from 'react'

const TextInput = ({placeholder}) => {
  return (
    <div className='w-5/6'>
      <input className='p-4 border-1 border-gray-300 rounded-lg w-full ' type="text" placeholder={placeholder} />
    </div>
  )
}

export default TextInput
