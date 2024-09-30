import ButtonLink from "@/components/button/ButtonLink";
import React from "react";
import DeleteButton from "./components/DeleteButton";
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
                        <DeleteButton id={postID}/> 
                        <a href={`/cms/blog/update/${item.id}`} className="leading-none inline-block bg-blue-400 rounded-md px-[1rem] py-[0.5rem] text-white">Update</a>
                    </div>
                </React.Fragment>
            );
        });
    }
    return (
        <>
            <div className="layout">
                <div className="py-[5rem] h-[100vh]">
                <ButtonLink text={"Create Blog"} href={"/cms/blog/create"} />
                    <div className="blog p-[5rem]">
                        {renderPost()}
                    </div>
                </div>
            </div>
        </>
    );
}