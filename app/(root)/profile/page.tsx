import { auth } from '@/auth'
import React from 'react'
import Image from 'next/image'
import { db } from '@/Database/db'
import { startups } from '@/Database/schema'
import { eq } from 'drizzle-orm'


const page = async () => {
    const session = await auth()
    const avatarImage = session?.user?.image || "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
    let postbyUser = [];
    const userid = session?.user?.id;
    if (userid) {
        postbyUser = await db.select().from(startups).where(eq(startups.userId, userid));
    } else {
        console.error("User ID is undefined.");
    }
    return (
        <>
            <section className='yellow_container'>
                <div>
                    <Image src={avatarImage} alt='user image' height={100} width={100} className='rounded-full' />
                </div>
                <div className='profile_heading'>
                    {session?.user?.name}
                </div>
            </section>
            <section className='p-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                    {postbyUser.length > 0 ? 
                    
                    }
                </div>

            </section>
        </>
    )
}

export default page