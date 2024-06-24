import { createBlog } from "@/actions/blog";
import SubmitButton from "@/components/button/SubmitButton";
import InputText from "@/components/input/InputText";

export const metadata = {
    title: 'Create New Post',
    description: 'This is a blog page',
}

export default function CreateBlog() {
    return (
        <>
            <div className="layout py-[5rem]">
                <h1 className="text-[5rem] text-[#333] font-bold text-center block pb-[5rem]">Create New Blog Post</h1>

                <form action={createBlog}>
                    <InputText className={'mb-[2rem]'} id={'title'} name={'title'} placeholder={'title'} />
                    <InputText className={''} id={'content'} name={'content'} placeholder={'content'} />
                    <SubmitButton className={'block w-fit mt-[2rem] mx-auto '} text={'Submit'} />
                </form>
            </div>
        </>
    );
}