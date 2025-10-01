import InputText from "@/components/input/InputText";
import InputPassword from "@/components/input/InputPassword";
import SubmitButton from "@/components/button/SubmitButton";
import { checkUser } from "@/db/user/queries/auth";

export default async function Login(){
    return(
        <>
            <div className="layout py-[5rem]">
                <h1 className="mb-[2rem]">Login Page</h1>

                <form action={checkUser}>
                    <InputText placeholder={"User Name"} name="username"  id="username" className="mb-[2rem]" />
                    <InputPassword placeholder={"Password"} name="password"  id="password" className="mb-[2rem]" />
                    <SubmitButton text={'Submit'} />
                </form>
            </div>
        </>
    )
}