import ButtonLink from "@/components/button/ButtonLink";
import { getAllBlogPost } from "@/db/blog/queries/select";
import { deleteBlog } from "@/db/blog/queries/delete";
import React from "react";

export default async function Blog() {
    const getBlogPost = await getAllBlogPost();

    const deleteItem = (id:number) => {
        deleteBlog(id);
    }
    
    const renderPost = () => {
        return getBlogPost.map((item:any)=>{
            return (
                <React.Fragment key={item.id}>
                    <div className="mb-1">
                        <b>ID:</b><span>{item.id}</span> | <b>Title:</b><span>{item.title}</span> | <b>Content:</b><span>{item.content}</span>
                        <button className="inline-block bg-red-400 text-white rounded-md p-1" >Delete</button><br />
                    </div>
                </React.Fragment>
            );
        })
    }
    return (
        <>
            <div className="layout">
                <div className="py-[5rem]">
                <ButtonLink text={"Create Blog"} href={"/cms/blog/create"} />
                    <div className="blog p-[5rem]">
                        {renderPost()}
                    </div>
                </div>
            </div>
        </>
    );
}