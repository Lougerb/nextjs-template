import { notFound } from "next/navigation";
import ButtonLink from "@/components/button/ButtonLink";

type CrudDetailsParam = {
    params: {
        id: String
    }
}

export default async function CrudDetails({params}: CrudDetailsParam){
    

    const getPost = async () => {
        try {
            const res = await fetch(`${process.env.BASE_URL}/api/posts/${params.id}`, { method:"GET", headers: { 'Content-Type': 'application/json',  }, cache: 'no-store'} );
            const data = await res.json();
            return data;
           
        } catch (error) {
            console.log(error);
        }
    }

    const [data] = await getPost();
    
    if(data != null) {
        return <>
            <div className="layout py-[2rem]">
                <h2 className="head2 text-center text-[6rem]">This is Post: {data!.id}</h2>
                <p className=""><span className="text-[4rem]">Title: </span>{data!.title}</p>
                <p className=""><span className="text-[4rem]">Content:</span> {data!.content}</p>
                <ButtonLink className={'mx-auto my-[2rem]'} text={'Go Back'} href={'/crud'} target={''} />
            </div>
        </>
    } else {
        notFound();
    }
}