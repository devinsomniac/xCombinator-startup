'use client'
import React from 'react'
import { Button } from './ui/button'
import { Delete } from 'lucide-react'
import Link from 'next/link'
const FormResetBtn = () => {
  const reset = () => {
    const form = document.querySelector('.search-from') as HTMLFormElement
    if(form) form.reset()
  }
  
  return (
    <div>
        <Button type='submit' onClick={reset} className='bg-black rounded-full text-white hover:border hover:border-black hover:text-black'>
          <Link href={"/"}>
          <Delete/>
          </Link>
          </Button>
    </div>
  )
}

export default FormResetBtn