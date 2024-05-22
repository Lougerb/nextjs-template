import ButtonLink from "@/components/button/ButtonLink";

export default function CrudItem({text}){
    return (<>
                <li className="crud__list__item grid grid-cols-3 gap-[2rem] pb-[2rem]">
                    <span className="crud__list__item__text col-span-2">{text}</span>
                    <div className="crud__list__item__btn flex gap-[1rem] h-fit items-center justify-center">
                        <ButtonLink text={'Edit'}/>
                        <ButtonLink text={'Delete'} className={'bg-red-400'}/>
                    </div>
                </li>
            </>);
}