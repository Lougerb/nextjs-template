'use server'
import { redirect } from "next/navigation";

import prisma from "lib/prisma";
import { extname, join } from "path";
import { existsSync, mkdirSync, readdir, unlink, writeFile } from "fs";

const postName : string = "blog";

// Create Post
export async function createBlog (formData: FormData){

    // Getting The file's data
    const file: File | null  = formData.get('file') as unknown as File;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileExt = extname(file.name) ? extname(file.name) : '';
    let newFileName = '';

    if (file.size != 0) {
        newFileName = `main-${new Date().getTime()}${fileExt}`;
    }

    // Handling Post
    const newPost = await prisma.blog.create({
        data: {
            title: formData.get('title') as string,
            content: formData.get('content') as string,
            files: newFileName,
        }
    });

    

    // Handling Files
    if (file.size != 0) {
        const dir =`${process.cwd()}/public/uploads/${postName}/${newPost.id}`;
        const path = join(dir,'/',`${newFileName}`);
        
        if(!existsSync(dir)) {
            mkdirSync(dir,{ recursive: true });
            writeFile(path, buffer, (e)=>{console.log(e)});
    
        } else {
            writeFile(path, buffer, (e)=>{console.log(e)});
        }
    }
    
    redirect(`/cms/${postName}/`);
}

// Edit Post
export async function editBlog ( id: number, formData: FormData ){


    // Get file's data
    const file: File | null  = formData.get('file') as unknown as File;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileExt = extname(file.name) ? extname(file.name) : '';
    let newFileName = '';

    if (file.size != 0) {
        newFileName = `main-${new Date().getTime()}${fileExt}`;
    } else {
        newFileName = formData.get('currentFile') as string;
    }

    
    await prisma.blog.update({
        where: { id },
        data: {
            title: formData.get('title') as string,
            content: formData.get('content') as string,
            files: newFileName,
        }
    });

    

    // Upload Files
    if (file.size != 0) {
        const dir =`${process.cwd()}/public/uploads/${postName}/${id}`;
        const path = join(dir,'/',`${newFileName}`);

        if(!existsSync(dir)) {
            mkdirSync(dir,{ recursive: true });
            writeFile(path, buffer, (e)=>{console.log(e)});
    
        } else {
            // Delete previous file
            readdir(dir, (err, files)=> {
                if (err) throw err;

                for (const file of files) {
                    const filePath = `${dir}/${file}`;
                    unlink(filePath, err=>{
                        if (err) throw err;
                    })
                }
            })
            
            // Upload new file
            writeFile(path, buffer, (e)=>{console.log(e)});
        }

        
    }

    redirect(`/cms/${postName}/`);
}