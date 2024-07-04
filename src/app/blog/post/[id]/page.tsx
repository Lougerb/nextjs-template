import type { Metadata } from 'next'
import prisma from "lib/prisma";


type PostParam = {
    params: {
        id: string
    }
}

export async function generateMetadata (
    { params }: PostParam
  ): Promise<Metadata> {

    // read route params
    const postId = parseInt(params.id);
    // fetch data
    const post = await prisma.blog.findUnique({
        where: {
            id: postId
        }
    });
    
   
    return {
      title: post!.title,
    }
}


export default async function BlogPost({params}: PostParam) {

    const postId = parseInt(params.id);
    const post = await prisma.blog.findUnique({
        where: {
            id: postId
        }
    });

    return (<>
        <div className="layout pb-[5rem]">

            <h1 className="text-[5rem] text-[#333] font-bold text-center block py-[5rem]">Blog Post</h1>

            <p><b>title: {post!.title}</b></p>
            <p>Content: {post!.content}</p>
            
        </div>
        
    </>);

}