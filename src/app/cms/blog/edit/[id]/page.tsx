
import { editBlog } from "@/actions/blog";
import ButtonLink from "@/components/button/ButtonLink";
import SubmitButton from "@/components/button/SubmitButton";
import InputText from "@/components/input/InputText";
import prisma from "lib/prisma";

export const metadata = {
    title: 'Create New Post',
    description: 'This is a blog page',
}
type EditBlogParam = {
    params: {
        id: string
    }
}
export default async function EditBlog({params}: EditBlogParam) {
    const postId = parseInt(params.id);
    const editBlogWithID = editBlog.bind(null, postId);
    const getBlogPost = await prisma.blog.findUnique({
            where: {
                id: postId
            }
        });

    console.log(getBlogPost);

    return (
        <>
            <div className="layout py-[5rem]">
                <h1 className="text-[5rem] text-[#333] font-bold text-center block pb-[5rem]">Create New Blog Post</h1>

                <form action={editBlogWithID}>
                    <InputText className={'mb-[2rem]'} id={'title'} name={'title'} placeholder={'title'} defaultValue={getBlogPost?.title!} />
                    <InputText className={''} id={'content'} name={'content'} placeholder={'content'} defaultValue={getBlogPost?.content!} />
                    <div className="flex justify-center items-center gap-[2rem] mt-[4rem]">
                        <ButtonLink className={''} text={'Go Back'} href={'../'} target={''}  />
                        <SubmitButton className={'block w-fit'} text={'Submit'} />
                    </div>
                </form>
            </div>
        </>
    );
}