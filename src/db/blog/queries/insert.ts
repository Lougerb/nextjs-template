'use server';
import { db } from '@/db/index';
import { InsertBlog, blogTable } from '@/db/schema';

import { redirect } from "next/navigation";

export async function createBlog(formData: FormData) {
  const newPost:InsertBlog = {
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    image: formData.get('image_id') as number | null,
  }
  await db.insert(blogTable).values(newPost);
  
  redirect('/cms/blog/')
}