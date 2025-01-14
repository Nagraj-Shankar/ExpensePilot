"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function Header() {

  const {user, isSignedIn}=useUser();
  return (
    <div className='p-5 flex justify-between items-center shadow-sm bg-transparent'>
      <div className='flex justify-between items-center'>
      <Image src={'./logo.svg'}
      alt='logo'
      width={150}
      height={110}
      />
      <h1 className='text-3xl font-extrabold text-primary'>Expense<span className='text-blue-800'>Pilot</span></h1>
        </div>
      {isSignedIn?
      <UserButton/> :
      <Link href={'/sign-in'}>
      <Button> Get Started</Button>
      </Link>
     }
      
    </div>
  )
}

export default Header
