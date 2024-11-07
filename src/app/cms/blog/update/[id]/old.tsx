// 'use client';
// import { updateBlog, getBlogById } from "@/db/blog/queries";
// import InputText from "@/components/input/InputText";
// import ButtonLink from "@/components/button/ButtonLink";
// import SubmitButton from "@/components/button/SubmitButton";
// import { useState, useEffect } from "react";
    

// export default function UpdateBlog({params: {id}}:{params: {id:number}}) {

//     const [data, setData] = useState({title:'', content:'', image: 0, createdAt: new Date, updatedAt: new Date});
//     const [isLoading, setLoading] = useState(true);

//     const [title, settitle] = useState('');
//     const [content, setcontent] = useState('');
//     const [image, setimage] = useState(0);
    
//     useEffect(()=>{ 

//         fetch(`/api/blog/${id}`)
//           .then((res) => res.json())
//           .then((data) => {
//             setData(data)
//             setLoading(false);

//             settitle(data.title);
//             setcontent(data.content);
//             setimage(data.image);   
//           });



//     },[]);
        
//     const handleTitle = (e:any)=>{
//         settitle(e.target.value);
//     }
//     const handleContent = (e:any)=>{
//         setcontent(e.target.value);
//     }
//     const handleImage = (e:any)=>{
//         setimage(parseInt(e.target.value));
//     }


    
//     if (isLoading) return <p>Loading...</p>
//     if (data) {

//         console.log(data);

//         const handleChange = ()=>{
//             setData({...data, 
//                 title: title, 
//                 content: content, 
//                 image: image,
//                 createdAt: new Date(data.createdAt),
//                 updatedAt: new Date});
//             console.log(data);
//         }
//         const handleSubmit = async ()=>{
//             try {
//                 await updateBlog(id, data);
//                 console.log(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         }

//         return (
//             <>
//                 <div className="createblog pt-[5rem] pb-[5rem]">
//                     <div className="layout">
//                         <form action={handleSubmit} onChange={handleChange}>
//                                 <InputText placeholder={"Title"} name="title"  id="title" className="mb-[2rem]" value={title} onchange={handleTitle}/>
//                                 <InputText placeholder={"Content"} name="content"  id="content" className="mb-[2rem]" value={content} onchange={handleContent}/>
//                                 <input type="number" name="image_id" id="image_id" placeholder="image id"  className="input-text mb-[2rem]" value={image} onChange={handleImage} />
//                                 <button type="submit" ></button>
//                                 <SubmitButton text={'Submit'}  />
//                         </form>
//                     </div>
//                 </div>
//             </>
//         );
//     }

// }