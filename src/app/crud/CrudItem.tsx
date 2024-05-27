import ButtonLink from "@/components/button/ButtonLink";
import React from "react";

export default function CrudItem({text}){
    return (<>
                <li className="crud__list__item grid grid-cols-3 gap-[2rem] pb-[2rem] items-center">
                    <span className="crud__list__item__text col-span-2">{text}</span>
                    <div className="crud__list__item__btn flex gap-[1rem] h-fit items-center justify-center">
                        <ButtonLink text={'Edit'} href={undefined} target={undefined} download={undefined}/>
                        <ButtonLink text={'Delete'} className={'bg-red-400'} href={undefined} target={undefined} download={undefined}/>
                    </div>
                </li>
            </>);
}