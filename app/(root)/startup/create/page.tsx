import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'

const page = () => {
  const [formData,setFormData] = useState({
    
  })
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
          />
          <label className='create_section_label'>Description</label>
          <Textarea
            className='mt-2 h-12 rounded-xl border-black border-[3px]'
            name='description'
          />
          <label className='create_section_label'>Category</label>
          <Input
            className='mt-2 h-12 rounded-full border-black border-[3px]'
            name='category'
          />
          <label className='create_section_label'>Image Link</label>
          <Input
            className='mt-2 h-12 rounded-full border-black border-[3px]'
            name='imageLink'
          />
          <label className='create_section_label'>Pitch</label>
          <Textarea
            className='mt-2 h-12 rounded-xl border-black border-[3px]'
            name='pitch'
          />
          </div>
          <div className='flex justify-end'>
          <Button className='bg-[#f4d301] mt-4 h-10 rounded-full border-[3px] border-black'>Submit</Button>
          </div>
        </form>

      </section>
    </div>
  )
}

export default page