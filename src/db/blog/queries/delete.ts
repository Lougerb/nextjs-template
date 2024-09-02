import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { SelectBlog, blogTable } from '@/db/schema';

export async function deleteBlog(id: SelectBlog['id']) {
  await db.delete(blogTable).where(eq(blogTable.id, id));
}