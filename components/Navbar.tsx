import React from 'react'
import Link from 'next/link'
import { auth, signIn, signOut } from '@/auth'
import { Button } from './ui/button'
import Image from 'next/image'
import { IoIosCreate } from "react-icons/io";


const Navbar = async () => {
    const session = await auth()
    console.log(session)
    const userImage = session?.user?.image || "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
    return (
        <header className='p-3'>
            <nav className='flex justify-between items-center'>
                <Link href={"/"}>
                    <img src="./logo.png" alt="logo" height={30} width={144} />
                </Link>
                <div className='flex items-center gap-3'>

                    {session && session?.user ? (
                        <>

                            <Link href={"/startup/create"}>
                            <IoIosCreate className='text-4xl text-white border border-white rounded-full bg-green-700 p-2 border-black' />
                            </Link>
                            <Link href={"/profile"}>
                            {/* {session?.user?.name} */}
                            <Image src={userImage} alt='user Image' width={40} height={40} className='rounded-full border border-black'/>
                            </Link>
                            
                            
                            <form
                                action={async () => {
                                    "use server"
                                    await signOut({ redirectTo: "/" })
                                }}
                            >
                                <Button type="submit" className='session-btn hover:bg-blue-900 hover:text-white rounded-3xl'>Log Out</Button>
                            </form>
                        </>
                    ) : (<>
                        <form
                            action={async () => {
                                "use server"
                                await signIn("google")
                            }}
                        >
                            <Button type="submit" className='session-btn hover:bg-blue-900 hover:text-white rounded-3xl'>
                                <img width="50" height="50" src="https://img.icons8.com/bubbles/50/google-logo.png" alt="google-logo" />
                                Log In
                            </Button>
                        </form>
                    </>)}
                </div>
            </nav>
        </header>
    )
}

export default Navbar