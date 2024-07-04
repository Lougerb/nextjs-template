import prisma from "lib/prisma";


export const metadata = {
    title: 'Blog Page',
    description: 'This is a blog page',
}


  
export default async function Blog() {

    const posts = await prisma.blog.findMany();

    return (<>
        <div className="layout">

            <h1 className="text-[5rem] text-[#333] font-bold text-center block py-[5rem]">Blog Page</h1>
            
            <ul className="mb-[5rem] border-t border-solid border-[#333]">

                {posts.map((post)=>{
                        return (<li className="block py-[2rem] border-b border-[#333] border-solid" key={post.id}>
                            <a href={`/blog/post/${post.id}`} className="block">{post.title}</a>
                        </li>);
                    })}
            </ul>
            
        </div>
        
    </>);

}