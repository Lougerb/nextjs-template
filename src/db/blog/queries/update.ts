
import { eq } from 'drizzle-orm';
import { db } from '@/db/index';
import { SelectBlog, blogTable } from '@/db/schema';

export async function updateBlog(id: SelectBlog['id'], data: Partial<Omit<SelectBlog, 'id'>>) {
  await db.update(blogTable).set(data).where(eq(blogTable.id, id));
}