import React from 'react'
import posts from '@/posts'
import Image from 'next/image'
const page = async({params} : {params : {id : string}}) => {
  console.log(params.id)
  return (
    <div>
        <section className='yellow_container'>
            <p className='tag'>{posts[1].createData}</p>
            <h2 className='heading'>{posts[1].start_title}</h2>
            <p className='sub-heading'>{posts[1].start_desc}</p>
        </section>
        <section className='p-8'>
            <div className='p-5 flex items-center gap-2'>
                <Image src={posts[1].user_image} alt='user_photo' width={45} height={45}/>
                <p>{posts[1].user_name}</p>
            </div>
        </section>
    </div>
  )
}

export default page