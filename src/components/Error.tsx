import React, { ReactNode } from 'react'

interface Errorprops{
  children:ReactNode
}

const Error = ({children}: Errorprops) => {
  return (
    <p className='text-sm text-red-600 pl-2 pt-1'>{children}</p>
  )
}

export default Error