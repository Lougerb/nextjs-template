import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from '@/db/index';
import { SelectBlog, blogTable, InsertBlog } from '@/db/schema';
import { redirect } from "next/navigation";


// Get all posts
export async function getAllBlogPost(){
  return db.select().from(blogTable);
}

// Get 1 post by id
export async function getBlogById(id: SelectBlog['id']): Promise<
  Array<{
    id: number;
    title: string;
    content: string;
    image: number | null;
    createdAt: Date; 
    updatedAt: Date; 
  }>
> {
  return db.select().from(blogTable).where(eq(blogTable.id, id));
}

// Create a new Post
export async function createBlog(formData: FormData) {
  const newPost:InsertBlog = {
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    image: formData.get('image_id') as number | null,
  }
  await db.insert(blogTable).values(newPost);
  
  redirect('/cms/blog/');
}

// Update a selected Post
export async function updateBlog(id: SelectBlog['id'], data: Partial<Omit<SelectBlog, 'id'>>) {
    await db.update(blogTable).set(data).where(eq(blogTable.id, id));
    redirect('/cms/blog/');
}

// export async function updateBlog(id: SelectBlog['id'], formData: FormData) {
//   const data = {
//     title: formData.get('title') as string,
//     content: formData.get('content') as string,
//     image: formData.get('image_id') as number | null,
//   }
  
//   await db.update(blogTable).set(data).where(eq(blogTable.id, id));
//   redirect('/cms/blog/');
// }


// Delete a selected Post
export async function deleteBlog(id: SelectBlog['id']) {
    await db.delete(blogTable).where(eq(blogTable.id, id));
    redirect('/cms/blog/');
}