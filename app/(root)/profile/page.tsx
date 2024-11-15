import { auth } from '@/auth';
import React from 'react';
import Image from 'next/image';
import { db } from '@/Database/db';
import { startups } from '@/Database/schema';
import { eq } from 'drizzle-orm';
import StartupCard from '@/components/StartupCard';

interface Post {
    startupId: number;
    title: string;
    description: string;
    category: string;
    imageLink: string;
    userName: string;
    userImage: string;
}

const page = async () => {
    const session = await auth();
    const avatarImage =
        session?.user?.image ||
        'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg';
    const userid = session?.user?.id;

    
    let postbyUser: Post[] = [];

    if (userid) {
        const rawPosts = await db
            .select()
            .from(startups)
            .where(eq(startups.userId, userid));

        
        postbyUser = rawPosts.map((post) => ({
            startupId: post.id,
            title: post.title,
            description: post.description,
            category: post.category,
            imageLink: post.imageLink || '',
            userName: session?.user?.name || '',
            userImage: session?.user?.image || avatarImage,
        }));
    } else {
        console.error('User ID is undefined.');
    }

    return (
        <>
            <section className="yellow_container">
                <div>
                    <Image
                        src={avatarImage}
                        alt="user image"
                        height={100}
                        width={100}
                        className="rounded-full"
                    />
                </div>
                <div className="profile_heading">{session?.user?.name}</div>
            </section>
            <section className="p-8 ">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                    {postbyUser.map((post, index) => (
                        <div key={index} className="flex justify-center mb-5">
                            <StartupCard post={post} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default page;
