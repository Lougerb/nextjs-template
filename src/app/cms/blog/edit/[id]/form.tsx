'use client';
import { updateBlog, getBlogById } from "@/db/blog/queries";
import InputText from "@/components/input/InputText";
import InputNumber from "@/components/input/InputNumber";
import ButtonLink from "@/components/button/ButtonLink";
import SubmitButton from "@/components/button/SubmitButton";
import { useState, useEffect, useRef } from "react";
import { redirect } from "next/navigation";
    
type FormProps = {
    id:number,
    postData: {
        title:string,
        content:string,
        image: any,
        createdAt: Date,
        updatedAt: Date
    }
    handleAction?: any
}

export default function Form({id, postData, handleAction}:FormProps) {  
    const refForm:any = useRef();

    const [data, setData] = useState(postData);
    const [isLoading, setLoading] = useState(true);

    const [title, settitle] = useState('');
    const [content, setcontent] = useState('');
    const [image, setimage] = useState(0);
    
    useEffect(()=>{ 
        refForm.current.addEventListener('change', function(e:any){
            setData({...data, 
                [e.target.name]: e.target.value});
        });
    },[]);

    // Sends data
    const handleSubmit = async ()=>{
        await handleAction({
            title: data.title, 
            content: data.content, 
            image: data.image == "" ? 0 : data.image
        });
        redirect('/cms/blog/');
    };  

    return (
            <>
                <form action={handleSubmit} >
                    <div ref={refForm}>
                        <InputText placeholder={"Title"} name="title"  id="title" className="mb-[2rem]" value={data.title} />
                        <InputText placeholder={"Content"} name="content"  id="content" className="mb-[2rem]" value={data.content}/>
                        <InputNumber placeholder="Number" name="image" id="image_id" className="mb-[2rem]" value={data.image}/>
                        <SubmitButton text={'Submit'}  />
                    </div>
                </form>
            </>
    );
        

    
    // if (isLoading) return <p>Loading...</p>
    // if (data) {
    
    //     const handleChange = async (e:any)=>{
    //         // setData({...data, 
    //         //     title: title, 
    //         //     content: content, 
    //         //     image: image,
    //         //     createdAt: new Date(data.createdAt),
    //         //     updatedAt: new Date});
    //         setData({...data, 
    //             [e.target.name]: e.target.value});
    //         console.log(data);
    //     }
    //     const handleSubmit = async ()=>{
    //         handleAction({
    //             title: data.title, 
    //             content: data.content, 
    //             image: parseInt(data.image),
    //         });
    //     };  

    //     return (
    //             <>
    //                 <form onSubmit={handleSubmit}>
    //                     <div onKeyDown={handleChange}>
    //                         <InputText placeholder={"Title"} name="title"  id="title" className="mb-[2rem]" value={title} />
    //                         <InputText placeholder={"Content"} name="content"  id="content" className="mb-[2rem]" value={content}/>
    //                         <InputNumber placeholder="Number" name="image_id" id="image_id" className="mb-[2rem]" value={image}/>
    //                         <SubmitButton text={'Submit'}  />
    //                     </div>
    //                 </form>
    //             </>
    //     );
    // }

}