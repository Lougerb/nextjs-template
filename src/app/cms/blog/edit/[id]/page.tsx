import { updateBlog, getBlogById } from "@/db/blog/queries";
import Form from "./form";
    
export default async function Edit( {params: {id}}:{params: {id:number}} ) {

    const [postData] = await getBlogById(id);
    const handleSubmit = async ({title,content,image}:{title: string, content: string, image: number }) => {
        'use server';
        const newData = {
            title: title,
            content: content,
            image: image 
        }
        await updateBlog(id, {...postData, ...newData});
    }

        return (
            <>
                <div className="createblog pt-[5rem] pb-[5rem]">
                    <div className="layout">
                        {/* <form onSubmit={handleSubmit}> */}
                            <Form id={id} postData={postData} handleAction={handleSubmit} />
                        {/* </form> */}
                    </div>
                </div>
            </>
        );
}       

// { id: number; title: string; content: string; image: number | null; createdAt: Date; updatedAt: Date; }
// { title: string; content: string; image: number; createdAt: Date; updatedAt: Date; }