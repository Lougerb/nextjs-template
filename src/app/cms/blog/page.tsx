import prisma from "lib/prisma";
import { getDateTime, getDateOnly } from "lib/globalFunc";
import ButtonLink from "@/components/button/ButtonLink";

export const metadata = {
    title: 'Blog Page',
    description: 'This is a blog page',
}


  
export default async function CmsBlog() {
    const posts = await prisma.blog.findMany({
        orderBy: {
            id: 'desc'
        }
    });
    console.log(posts);
    

    return (<>
        <div className="layout">

            <h1 className="text-[5rem] text-[#333] font-bold text-center block py-[5rem]">Blog Page</h1>
            <div className="flex justify-center mb-[5rem]" >
                <ButtonLink className={''} text={'Create New Blog Post'} href={'/cms/blog/create'} target={''}/>
            </div>
            <ul className="mb-[5rem] border-t border-solid border-[#333]">

                {posts.map((post)=>{
                        return (<li className="py-[2rem] border-b border-[#333] border-solid grid grid-cols-12 items-center" key={post.id}>
                            <span className="block col-span-1 text-center">{post.id}</span>
                            <span className="block col-span-3 truncate">{post.title}</span>     
                            <span className="block col-span-4 truncate">{getDateOnly(post.updatedAt,'mm-dd-yy')}</span>                            
                            <ButtonLink className={'bg-blue-400 col-span-2 justify-self-end'} text={'Edit'} href={`/cms/blog/edit/${post.id}`} target={''} />
                            <ButtonLink className={'bg-red-400 col-span-2 justify-self-end'} text={'Delete'} href={`/cms/blog/delete/${post.id}`} target={''} />
                        </li>);
                    })}
            </ul>
            
        </div>
        
    </>);

}