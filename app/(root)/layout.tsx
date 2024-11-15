import Navbar from '@/components/Navbar'
import React from 'react'
import Signature from '@/components/Signature'
import { SessionProvider } from 'next-auth/react'

const layout = ({children}:Readonly<{children : React.ReactNode}>) => {
  return (
    <SessionProvider>
    <div>
        <Navbar/>
        {children}
        <Signature/>
    </div>
    </SessionProvider>
  )
}

export default layout