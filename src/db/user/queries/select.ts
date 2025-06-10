'use server'
import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from '@/db/index';
import { SelectUser, postsTable, usersTable } from '@/db/schema';



export async function getAllUsers(){
  return db.select().from(usersTable);
}

// Get 1 user by id
export async function getUserById(id: SelectUser['id']): Promise<
  Array<{
    id: number;
    username: string;
    email: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}


