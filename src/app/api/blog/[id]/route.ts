import { blogTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db/index";
import { NextResponse, NextRequest } from "next/server";

export async function GET (request: NextRequest, 
    {params:{id}}:{params:{id:string}}  ){
    const [data] = await db.select().from(blogTable).where(eq(blogTable.id, id));
    return Response.json(data);
}