
import CrudItem from "./CrudItem";
import { Fragment } from "react";

  
const getPost = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/posts/`, { method:"GET", headers: { 'Content-Type': 'application/json',  }, cache: 'no-store'} );
        const data = await res.json();
        return data;
       
    } catch (error) {
        console.log(error);
    }
    
}

export default async function CrudList(){

    const data = await getPost();
    
    return <>
            <ul className="crud__list mt-[6rem] pt-[2rem] space-y-[2rem]">

                <li className="crud__list__item grid grid-cols-12 gap-[1rem] pb-[2rem] items-center">
                    <span className="crud__list__item__id col-span-1 text-center font-bold">ID</span>
                    <span className="crud__list__item__text col-span-3 font-bold">TITLE</span>
                    <span className="crud__list__item__text col-span-3 font-bold">CONTENT</span>
                    <div className="crud__list__item__btn col-span-5 flex gap-[1rem] h-fit items-center justify-end"></div>
                </li>
                {data.map((e:any)=>{
                    return <Fragment key={e.id}>
                            <CrudItem title={e.title} content={e.content} id={e.id}/>
                        </Fragment>
                })}
            </ul>
        </>
}