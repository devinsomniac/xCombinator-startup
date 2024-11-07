import React from 'react'
import avatar from './../assets/avatar.png'
import Image from 'next/image'
import { Button } from './ui/button'
import { Eye } from 'lucide-react'

const StartupCard = () => {
    const post = {
        user_name : "Inzamam",
        user_image : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
        start_title:"Hello World",
        start_desc : "We awant to create a startup ",
        createData:"20/10/2000",
        category:"Robot"
    }
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
            <Button className='p-2 text-xl  bg-black text-white rounded-3xl'>Details</Button>
        </div>
    </div>
  )
}

export default StartupCard