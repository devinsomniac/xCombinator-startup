import React from 'react'
import avatar from './../assets/avatar.png'
import Image from 'next/image'
import { Button } from './ui/button'
import { Eye } from 'lucide-react'
import Link from 'next/link'
interface Post  {
    id:number,
    user_name: string;
    user_image: string;
    start_title: string;
    start_desc: string;
    createData: string;
    category: string;
}

const StartupCard = ({post} : {post : Post}) => {
  return (
    <div className='startup-card cursor-pointer'>
        <div className='flex justify-between mb-3'>
            <p>{post.createData}</p>
            <div className='flex items-center gap-2'>
                <Eye/>
                <p>45</p>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <h2 className='font-semibold text-xl'>{post.user_name}</h2>
            <Image src={post.user_image} height={45} width={45} alt='avatar' className='rounded-full'/>
        </div>
        <h3 className='font-semibold text-3xl'>{post.start_title}</h3>
        <div>
            <p className='line-clamp-2'>{post.start_desc}</p>
        </div>
        <div className='flex justify-center mt-2'>
            <Image src={"https://t3.ftcdn.net/jpg/05/75/29/44/360_F_575294471_Lp0QLdUiOT9fzChgha6RfhMa9FmfNHDg.jpg"} alt='image' width={450} height={150} className='rounded-3xl w-full'/>
        </div>
        <div className='flex justify-between items-center mt-3'>
            <p className='p-2 text-xl  bg-black text-white rounded-3xl'>{post.category}</p>
            <Button className='p-2 text-xl  bg-black text-white rounded-3xl'>
                <Link href={`/startup/${post.id}`}>
                Details
                </Link>
                </Button>
        </div>
    </div>
  )
}

export default StartupCard