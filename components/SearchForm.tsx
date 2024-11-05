import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
const SearchForm = () => {
    const query = "test"
  return (
    <div className='search-form'>
        <Input className='border-none text-2xl font-semibold text-gray-400'
        placeholder='Search for startup'
        />
        <Button type='submit' className='bg-black rounded-full text-white hover:border hover:border-black hover:text-black'>Search</Button>
    </div>
  )
}

export default SearchForm