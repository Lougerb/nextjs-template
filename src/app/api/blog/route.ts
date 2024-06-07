import { NextRequest, NextResponse } from "next/server";
import prisma from "lib/prisma";


  export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const posts = await prisma.post.findMany({
          orderBy: {
            id: 'desc',
          },
        });
    
        return NextResponse.json(posts);
      } catch (error) {
        
      }
  }

  export async function POST(request: Request) {
    try {
        const res = await request.json();
        const {title, content} = res;
        
        const result = await prisma.post.create({
            data: {
                title,
                content,
            }
        })

        return NextResponse.json(result);
    } catch (error) {
        // Handle the error here
        console.error("Error:", error);
        return NextResponse.error();
    }
  }

  // export async function DELETE(request: Request, {params}:{params: {id: number}}) {
  //   try {
  //     const id = params.id;
  //     const post = await prisma.post.delete({
  //       where: {id}
  //     });
  //     console.log(id);
  //     return NextResponse.json(request);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  