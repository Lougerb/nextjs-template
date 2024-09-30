'use client'
import { useRouter } from "next/navigation";

export default function DeleteButton({id}:any) {
    const router = useRouter();

    return (
        <>
            <a href={`/cms/blog/delete/${id}`} className="inline-block bg-red-400 text-white rounded-md px-[1rem] py-[0.5rem] leading-none">Delete</a>
        </>
    );
}