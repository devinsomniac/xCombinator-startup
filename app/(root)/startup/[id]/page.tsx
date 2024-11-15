import React from "react";
import Image from "next/image";
import { db } from "@/Database/db";
import { startups, users } from "@/Database/schema";
import { eq } from "drizzle-orm";



const Page = async ({ searchParams }: { searchParams: Promise<{ id?: string }> }) => {
  const id = (await searchParams).id as string
  console.log(id);

  const numericId = parseInt(id, 10);
  const postDetails = await db
    .select()
    .from(startups)
    .where(eq(startups.id, numericId))
    .innerJoin(users, eq(startups.userId, users.id));

  const avatarImage =
    postDetails[0]?.user?.image ||
    "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg";
  const postImage =
    postDetails[0]?.startup?.imageLink ||
    "https://img.freepik.com/free-vector/startup-abstract-concept_335657-3029.jpg?ga=GA1.1.1793491022.1731591556&semt=ais_hybrid";

  console.log(postDetails);

  return (
    <div>
      <section className="yellow_container">
        <p className="tag">15/10/2022</p>
        <h2 className="heading">{postDetails[0]?.startup?.title}</h2>
        <p className="sub-heading">{postDetails[0]?.startup?.description}</p>
      </section>
      <section className="p-8">
        <div className="flex justify-center items-center w-full p-4">
          <Image
            src={postImage}
            alt="pitch image"
            height={450}
            width={450}
            className="rounded-xl"
          />
        </div>
        <div className="p-3 flex items-center gap-2 bg-slate-300 rounded-xl border border-black md:p-5 md:w-[400px]">
          <Image
            src={avatarImage}
            alt="user_photo"
            width={45}
            height={45}
            className="rounded-full flex flex-col md:flex-row"
          />
          <div>
            <p>{postDetails[0]?.user?.name}</p>
            <p>@{postDetails[0]?.user?.email}</p>
          </div>
        </div>
        <div className="p-5 flex items-center gap-2">
          <p>{postDetails[0]?.startup?.pitch}</p>
        </div>
      </section>
    </div>
  );
};

export default Page;
