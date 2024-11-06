import React from 'react'
import SearchForm from '@/components/SearchForm'
import StartupCard from '@/components/StartupCard'

const page = async({searchParams} : {searchParams : Promise<{query?:string}>}) => {
  const query = (await searchParams).query
  return (
    <>
    <section className='yellow_container'>
      <h3 className='heading'>Showcase Your Startup,<br/>Engage with Innovators</h3>
      <p className='sub-heading'>Share Your Ideas, Cast Votes on Pitches, and Stand Out in Online Competitions</p>
      <div className='searchForm'>
      <SearchForm query={query}/>
      </div>
      </section>
      <section className='p-8'>
        {query ?  <p>Search Results for "{query}"</p> : <p>All Recommendations</p>}
        <StartupCard/>
      </section>
    </>
  )
}

export default page