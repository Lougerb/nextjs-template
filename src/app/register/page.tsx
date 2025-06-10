import { createUser } from "@/db/user/queries/insert"
import InputText from "@/components/input/InputText";
import InputPassword from "@/components/input/InputPassword";
import SubmitButton from "@/components/button/SubmitButton";

export default async ()=>{
    return(
        <>
            <div className="layout py-[5rem]">
                <h1 className="mb-[2rem]">Login Page</h1>

                <form action={createUser}>
                    <InputText placeholder={"User Name"} name="username"  id="username" className="mb-[2rem]" />
                    <InputPassword placeholder={"Password"} name="password"  id="password" className="mb-[2rem]" />
                    <input type="email" name="email" id="email"  placeholder="email" className="input-text mb-[2rem]"/>
                    <SubmitButton text={'Submit'} />
                </form>
            </div>
        </>
    )
}