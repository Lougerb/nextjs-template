import { NextRequest, NextResponse } from "next/server";
import prisma from "lib/prisma";


export async function GET(req: NextRequest, res: NextResponse) {
  try {
      const posts = await prisma.blog.findMany({
        orderBy: {
          id: 'desc',
        },
      });
  
      return NextResponse.json(posts);
    } catch (error) {
      
    }
}