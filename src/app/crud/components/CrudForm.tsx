'use client';
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import InputText from "@/components/input/InputText";
import SubmitButton from "@/components/button/SubmitButton";



export default function CrudForm(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleTitleChange = async (e:any) => {
        setTitle(e.target.value);
    }
    const handleContentChange = async (e:any) => {
        setContent(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            title,
            content,
        }
        
        await fetch(`/api/posts`, {
            method: "POST", 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)
        });

        setTitle('');
        setContent('');
        router.refresh();

    }
    return <>
            <form className="container mt-[4rem]" onSubmit={handleSubmit}>
                <div className="crud__item flex items-center justify-center gap-[2rem]">
                    <InputText id={'title'} name="title" className="w-[20rem]" placeholder="Enter Title" value={title} onchange={handleTitleChange} />
                    <InputText id={'content'} name="content" className="w-[20rem]" placeholder="Enter Content" value={content} onchange={handleContentChange} />
                    <SubmitButton text={'Submit'} className={''} />
                </div>
            </form>
    </>
}