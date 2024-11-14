import React from 'react'
import avatar from './../assets/avatar.png'
import Image from 'next/image'
import { Button } from './ui/button'
import { Eye } from 'lucide-react'
import Link from 'next/link'
interface Post  {
    startupId:number,
    title: string;
    description: string;
    category: string;
    imageLink: string ; 
    userName: string ; 
    userImage: string;
}

const StartupCard = ({post} : {post : Post}) => {
  return (
    <div className='startup-card cursor-pointer'>
        <div className='flex justify-between mb-3'>
            <p>11/11/2022</p>
            <div className='flex items-center gap-2'>
                <Eye/>
                <p>45</p>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <h2 className='font-semibold text-xl'>{post.userName}</h2>
            <Image src={post.userImage} height={45} width={45} alt='avatar' className='rounded-full'/>
        </div>
        <h3 className='font-semibold text-3xl'>{post.title}</h3>
        <div>
            <p className='line-clamp-2'>{post.description}</p>
        </div>
        <div className='flex justify-center mt-2'>
            <Image src={post.imageLink} alt='image' width={450} height={150} className='rounded-3xl w-full'/>
        </div>
        <div className='flex justify-between items-center mt-3'>
            <p className='p-2 text-xl  bg-black text-white rounded-3xl'>{post.category}</p>
            <Button className='p-2 text-xl  bg-black text-white rounded-3xl'>
                <Link href={`/startup/${post.startupId}`}>
                Details
                </Link>
                </Button>
        </div>
    </div>
  )
}

export default StartupCard