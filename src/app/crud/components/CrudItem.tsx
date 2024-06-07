import Button from "@/components/button/Button";
import ButtonLink from "@/components/button/ButtonLink";
import CrudDeleteBtn from "./CrudDeleteBtn";

type CrudItemProps = {
    id: number,
    title: String,
    content: String,

}
export default function CrudItem({title, content, id, }: CrudItemProps){

    return (<>
                <li className="crud__list__item grid grid-cols-12 gap-[1rem] pb-[2rem] items-center">
                    <span className="crud__list__item__id col-span-1 text-center">#{id.toString()}</span>
                    <span className="crud__list__item__text col-span-3">{title}</span>
                    <span className="crud__list__item__text col-span-3">{content}</span>
                    <div className="crud__list__item__btn col-span-5 flex gap-[1rem] h-fit items-center justify-end">
                        <ButtonLink text={'Edit'} className={''} href={`/crud/edit/${id}`} target={''} />
                        <CrudDeleteBtn id={id}/>
                    </div>
                </li>
            </>);
}