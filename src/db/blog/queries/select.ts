import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from '@/db/index';
import { SelectBlog, blogTable, } from '@/db/schema';



export async function getAllBlogPost(){
  return db.select().from(blogTable);
}

// Get 1 user by id
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