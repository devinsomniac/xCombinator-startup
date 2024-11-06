import React from 'react'
import avatar from './../assets/avatar.png'
import Image from 'next/image'

const StartupCard = () => {
    const post = {
        user_name : "Inzamam",
        user_image : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
        start_title:"Hello World",
        start_desc : "We awant to create a startup",
        createData:"20/10/2000"
    }
  return (
    <div className='w-[500px] p-5 border border-r-8 border-t-4 rounded-3xl border-black'>
        <div className='flex justify-between'>
            {post.user_name}
            <Image src={post.user_image} height={45} width={45} alt='avatar' className='rounded-full'/>
        </div>
        <h3>{post.start_title}</h3>
        <div>
            Ima
        </div>
    </div>
  )
}

export default StartupCard