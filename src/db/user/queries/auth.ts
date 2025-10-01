'use server';
import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from '@/db/index';
import { SelectUser, postsTable, usersTable } from '@/db/schema';
import bcrypt from 'bcrypt';

// Example function to hash password
export async function hashPassword(plainPassword: string): Promise<string> {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(plainPassword, saltRounds);
  return hashed;
}

export async function getAllUsers(){
  return db.select().from(usersTable);
}

// Get 1 user by id
export async function getUserById(username: SelectUser['username']): Promise<
  Array<{
    id: number;
    username: string;
    password: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.username, username));
}



export async function checkUser(formData: FormData) {
  const inputpassword = formData.get('password') as string; //get input password
  const inputusername = formData.get('username') as string; //get input username

  const [data] = await getUserById(inputusername); //get data if username is correct

  const isValid = await bcrypt.compare(inputpassword, data.password); //check if input password is valid using bcrypt.compare()

  console.log(data);
  console.log(isValid);
  
}
