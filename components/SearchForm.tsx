import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import FormResetBtn from './FormResetBtn'


const SearchForm = ({query} : {query?: string}) => {
  return (
    <div className='search-form-css'>
      <form className='flex gap-2'>
        <Input className='search-form border-none text-2xl font-semibold text-gray-400 md:w-[300]'
          placeholder='Search for startup'
          name='query'
          defaultValue={query}
        />
        <div className='flex gap-2'>
        {query && <FormResetBtn/>}
        <Button type='submit' className='bg-black rounded-full text-white hover:border hover:border-black hover:text-black'><Search/></Button>
        </div>
      </form>
      

    </div>
  )
}

export default SearchForm