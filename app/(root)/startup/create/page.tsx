'use client'
import 'dotenv/config'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { db } from '@/Database/db'
import { startups } from '@/Database/schema'


const page = () => {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [formData,setFormData] = useState({
    title:'',
    description:'',
    category:'',
    imageLink:'',
    pitch:''
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name,value} = e.target
    setFormData((prev) => (
      {
        ...prev,[name]:value
      }
    ))
  }

  const handleSubmit = async(e : React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setPending(true)
    try{
      const newStartup = await db.insert(startups).values({
        ...formData,
        userId:"a0180b5d-ffeb-4003-bb3e-f4f340304fb2"
      })
      router.push('/')
    }catch(err){
      console.log("Error in submitting data")
    }
  }
  return (
    <div>
      <section className='yellow_container'>
        <h2 className='heading'>Share Your Big Idea with Other Entrepreneurs</h2>
        <p className='sub-heading'>Have an innovative concept? We're here to help bring it to life. Submit your idea and join us in building the next big thing.</p>
      </section>
      <section className='create_section'>
        <form >
          <div className='grid grid-cols-1 md:grid-cols-2'>
          <label className='create_section_label'>Title</label>
          <Input
            className='mt-2 h-12 rounded-full border-black border-[3px]'
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
          <label className='create_section_label'>Description</label>
          <Textarea
            className='mt-2 h-12 rounded-xl border-black border-[3px]'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
          <label className='create_section_label'>Category</label>
          <Input
            className='mt-2 h-12 rounded-full border-black border-[3px]'
            name='category'
            value={formData.category}
            onChange={handleChange}
          />
          <label className='create_section_label'>Image Link</label>
          <Input
            className='mt-2 h-12 rounded-full border-black border-[3px]'
            name='imageLink'
            value={formData.imageLink}
            onChange={handleChange}
          />
          <label className='create_section_label'>Pitch</label>
          <Textarea
            className='mt-2 h-12 rounded-xl border-black border-[3px]'
            name='pitch'
            value={formData.pitch}
            onChange={handleChange}
          />
          </div>
          <div className='flex justify-end'>
          <Button type='submit' disabled={pending} className='bg-[#f4d301] mt-4 h-10 rounded-full border-[3px] border-black' onClick={handleSubmit}>{pending ? "Submitting..." : "Submit"}</Button>
          </div>
        </form>

      </section>
    </div>
  )
}

export default page