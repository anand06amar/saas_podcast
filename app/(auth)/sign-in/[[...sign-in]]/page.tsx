import { SignIn } from '@clerk/nextjs'
import React from 'react'

const signIn = () => {
  return (
    <div className='flex-center glassmorphism-auth h-screen'>
        <SignIn/>
    </div>
  )
}

export default signIn