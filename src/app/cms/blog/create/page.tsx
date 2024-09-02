"use server"
import { createBlog } from "@/db/blog/queries/insert";
import InputText from "@/components/input/InputText";
import ButtonLink from "@/components/button/ButtonLink";
import SubmitButton from "@/components/button/SubmitButton";

export default async function CreateBlog() {
    return (
        <>
            <div className="createblog pt-[5rem] pb-[5rem]">
                <div className="layout">
                    <form action={createBlog}>
                            <InputText placeholder={"Title"} name="title"  id="title" className="mb-[2rem]" />
                            <InputText placeholder={"Content"} name="content"  id="content" className="mb-[2rem]"/>
                            <input type="number" name="image_id" id="image_id" placeholder="image id"  className="input-text mb-[2rem]"/>
                            <SubmitButton text={'Submit'} />
                    </form>
                </div>
            </div>
        </>
    );
}