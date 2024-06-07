'use client'
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";

type CrudDeleteBtnProps = {
    id: number
}

export default function CrudDeleteBtn({id}: CrudDeleteBtnProps) {
    const router = useRouter();

    const handleDelete = async ()=>{
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`, { method:"DELETE"} );
            router.refresh();
        } catch (error) {
            console.log(error);
        }   
    }

    return (
        <>
            <Button text={'Delete'} className={'bg-red-400'} onClick={handleDelete}/>
        </>
    );
}