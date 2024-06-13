import { SignUp } from '@clerk/nextjs'
import React from 'react'

const signUp = () => {
  return (
    <div className='flex-center glassmorphism-auth h-screen'>
        <SignUp/>
    </div>
  )
}

export default signUp