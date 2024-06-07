import { NextRequest, NextResponse } from "next/server";
import prisma from "lib/prisma";



export async function GET(request: Request, {params}:{params: {id: number}}) {
  try {
      const id = Number(params.id);

      const post = await prisma.post.findMany({
        where: {
          id: id
        }
      });
  
      return NextResponse.json(post);
    } catch (error) {
      console.log(error);
    }
}


  export async function DELETE(request: Request, {params}:{params: {id: number}}) {
    try {
      const id = Number(params.id);
      const post = await prisma.post.delete({
        where: {id}
      });

      // console.log(post);
      return NextResponse.json(post);

    } catch (error) { 
      console.log(error);
    }
  }
  