
import InputText from "@/components/input/InputText";
import SubmitButton from "@/components/button/SubmitButton";
import ButtonLink from "@/components/button/ButtonLink";
import CrudItem from "./CrudItem";

const crudAPI = 'http://localhost:3000/api/cruds';

const getCrudList = async ()=> {
    try {
        const res = await fetch(crudAPI, {
            cache: 'no-store',
        });

        const r = await res.json();
        const _r = r[0];

        if (!res.ok) {
            throw new Error("Failed to fetch");
        } else {
            return r;
        }
    } catch (error) {
        console.log('Error loading crud items: ', error);
    }
}

export default async function Crud() {
    const {cruds} = await getCrudList();
    return (<>
        <div className="layout py-[5rem]">
            <h2 className="head2 text-center">Welcome to CRUD</h2>
            <h4 className="head4 text-center mt-[1rem]">This is a sample CRUD App</h4>
            
            <form className="container mt-[4rem]">
                <div className="crud__item flex items-center justify-center gap-[2rem]">
                    <InputText name="userinput" className="w-[20rem]" placeholder="Enter Text"/>
                    <SubmitButton text={'Submit'} />
                </div>
            </form>

            <ul className="crud__list mt-[6rem] pt-[2rem] space-y-[2rem]">
                <CrudItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vero? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, odit officia quidem commodi optio nihil delectus non illum nisi quaerat.'}/>

                {cruds.map((i)=> {
                    return <CrudItem text={i.text}/>
                })}
            </ul>
        </div>
    </>);
}