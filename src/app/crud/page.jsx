
import InputText from "@/components/input/InputText";
import SubmitButton from "@/components/button/SubmitButton";
import ButtonLink from "@/components/button/ButtonLink";
import CrudItem from "./CrudItem";

export default async function Crud() {
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
                <CrudItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vero? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, odit officia quidem commodi optio nihil delectus non illum nisi quaerat.'}/>
                <CrudItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vero? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, odit officia quidem commodi optio nihil delectus non illum nisi quaerat.'}/>
                <CrudItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vero? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, odit officia quidem commodi optio nihil delectus non illum nisi quaerat.'}/>
            </ul>
        </div>
    </>);
}