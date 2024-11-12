import Navbar from '@/components/Navbar'
import React from 'react'
import Signature from '@/components/Signature'

const layout = ({children}:Readonly<{children : React.ReactNode}>) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Signature/>
    </div>
  )
}

export default layout