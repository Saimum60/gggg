import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-orange-300 border px-5 py-3 rounded-lg hover:bg-gradient-to-b hover:from-orange-300 hover:to-orange-500 '>
        {text}

    </button>
  )
}

export default Button