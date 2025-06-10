import ButtonLink from "@/components/button/ButtonLink";
import React from "react";
import { getAllBlogPost } from "@/db/blog/queries";


export default async function Blog() {
    const posts = await getAllBlogPost();

    const renderPost = () => {
        return posts.map((item:any)=>{
            const postID = item.id.toString();
            return (
                <React.Fragment key={postID}>
                    <div className="mb-1">
                        <b>ID:</b><span>{postID}</span> | <b>Title:</b><span>{item.title}</span> | <b>Content:</b><span>{item.content}</span>
                    </div>
                </React.Fragment>
            );
        });
    }
    return (
        <>
            <div className="layout">
                <div className="py-[5rem] h-[100vh]">
                    <div className="blog p-[5rem]">
                        {renderPost()}
                    </div>
                </div>
            </div>
        </>
    );
}