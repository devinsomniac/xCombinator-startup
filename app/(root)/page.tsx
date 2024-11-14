import React from 'react';
import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';
import { db } from '@/Database/db';
import { startups, users } from '@/Database/schema';
import { eq } from 'drizzle-orm';

const page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
  interface Post  {
    startupId:number,
    title: string;
    description: string;
    category: string;
    imageLink: string ; 
    userName: string ; 
    userImage: string;
}
  const PostFromDb = await db
  .select({
    startupId: startups.id,
    title: startups.title,
    description: startups.description,
    category: startups.category,
    imageLink: startups.imageLink,
    userName: users.name,
    userImage: users.image,
  })
  .from(startups)
  .innerJoin(users, eq(startups.userId, users.id)) as Post[];


  const query = (await searchParams).query;

  return (
    <>
      <section className='yellow_container'>
        <h3 className='heading'>Showcase Your Startup,<br />Engage with Innovators</h3>
        <p className='sub-heading'>Share Your Ideas, Cast Votes on Pitches, and Stand Out in Online Competitions</p>
        <div className='searchForm'>
          <SearchForm query={query} />
        </div>
      </section>
      <div className='p-5 font-bold text-3xl'>
        {query ? <p>Search Results for "{query}"</p> : <p>All Recommendations</p>}
      </div>

      <section className='p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
        {PostFromDb?.map((post, index) => (
          <div key={index} className='flex justify-center mb-5 '>
            <StartupCard post={post} />
          </div>
        ))}
      </section>
    </>
  );
};

export default page;
