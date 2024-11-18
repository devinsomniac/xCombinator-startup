import { db } from "@/Database/db";
import { startups } from "@/Database/schema";
import { eq, sql } from "drizzle-orm";

const UpdateViews = async(id : number) : Promise<void> => {
    try{
        // await db.update(startups).set({views:raw("views + 1")}).where(eq(startups.id,id))
            await db.execute(sql`UPDATE ${startups} SET views = views + 1 WHERE id = ${id}`)
        console.log("The views has been updated successfully")
    }catch(err){
        console.log("There has been error",err)
    }
}

export {UpdateViews}