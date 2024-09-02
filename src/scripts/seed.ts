import { createUser } from "@/db/user/queries/insert";
import { deleteUser } from "@/db/user/queries/delete";
import { getUserById, getAllUsers } from "@/db/user/queries/select";

import { SelectUser } from "@/db/schema";


async function main() {

    // sample create
    // const newUser: Omit<SelectUser, 'id'> = {
    //     name: 'haha xd',
    //     age: 69,
    //     email: 'tite@bigdick.com',
    // }   

    // await createUser(newUser);
    
    // console.log('insert success', res);


    // const getUser = await getUserById(1);
    const getAll = await getAllUsers();
    console.log(getAll);

    process.exit();
}

main();