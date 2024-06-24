'use server'
import { redirect } from "next/navigation";

import prisma from "lib/prisma";

export async function createBlog (formData: FormData){
    await prisma.blog.create({
        data: {
            title: formData.get('title') as string,
            content: formData.get('content') as string,
        }
    });
    redirect('/cms/blog/');
}

export async function editBlog ( id: number, formData: FormData ){
    
    await prisma.blog.update({
        where: { id },
        data: {
            title: formData.get('title') as string,
            content: formData.get('content') as string,
        }
    });
    redirect('/cms/blog/');
}