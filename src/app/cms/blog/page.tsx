import ButtonLink from "@/components/button/ButtonLink";
import { getAllBlogPost } from "@/db/blog/queries/select";
import React from "react";

export default async function Blog() {
    const getBlogPost = await getAllBlogPost();
    
    const renderPost = () => {
        return getBlogPost.map((item:any)=>{
            return (
                <React.Fragment key={item.id}>
                    <b>ID:</b><span>{item.id}</span> | <b>Title:</b><span>{item.title}</span> | <b>Content:</b><span>{item.content}</span><br />
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