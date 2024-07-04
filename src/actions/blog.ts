'use server'
import { redirect } from "next/navigation";

import prisma from "lib/prisma";
import { join } from "path";
import { existsSync, mkdirSync, writeFile } from "fs";

const postName : string = "blog";

export async function createBlog (formData: FormData){

    const file: File | null  = formData.get('file') as unknown as File;
    const fileName: string = file.name;

    // Handling Post
    const newPost = await prisma.blog.create({
        data: {
            title: formData.get('title') as string,
            content: formData.get('content') as string,
            files: fileName,
        }
    });

    
    // Handling Files

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const dir =`${process.cwd()}/public/uploads/${postName}/${newPost.id}`;
    const path = join(dir,'/',file.name);

    if(!existsSync(dir)) {
        mkdirSync(dir,{ recursive: true });
        writeFile(path, buffer, (e)=>{console.log(e)});

    } else {
        const path = join(dir,'/',file.name);
        writeFile(path, buffer, (e)=>{console.log(e)});

        console.log(path);
    }

    // const fileSrc: string = `${dir}/${file.name}`;



    redirect(`/cms/${postName}/`);
}

export async function editBlog ( id: number, formData: FormData ){

    
    await prisma.blog.update({
        where: { id },
        data: {
            title: formData.get('title') as string,
            content: formData.get('content') as string,
        }
    });
    redirect(`/cms/${postName}/`);
}