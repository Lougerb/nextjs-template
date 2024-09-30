'use client';

import { getBlogById } from "@/db/blog/queries/select"
import NotFound from "@/app/not-found";
import { redirect } from "next/navigation";

export default async function BlogPost({params}:any){
    const [blogPost] = await getBlogById(params.id);
    const goBack =()=> redirect('/cms/blog/');

    if(blogPost) {
        return (
            <>
                <div className="layout">This is blog Number{blogPost.id} <br />
            
                <button onClick={goBack}>Go back</button>
                </div>
               
            </>
        );
    } else {
        redirect('/cms/blog/');
        // return NotFound();
    }

    
}