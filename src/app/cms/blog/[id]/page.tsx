import { getBlogById } from "@/db/blog/queries/select"
import NotFound from "@/app/not-found";

export default async function BlogPost({params}:any){
    const [blogPost] = await getBlogById(params.id);

    if(blogPost) {
        return (
            <>
                <div className="layout">This is blog Number{}</div>
            </>
        );
    } else {
        return NotFound();
    }

    
}