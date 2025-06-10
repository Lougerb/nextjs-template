'use server';
import { db } from '@/db/index';
import { InsertPost, InsertUser, postsTable, usersTable } from '@/db/schema';
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt';

// Example function to hash password
export async function hashPassword(plainPassword: string): Promise<string> {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(plainPassword, saltRounds);
  return hashed;
}

export async function createUser(formData: FormData) {
  const hashedPassword = await hashPassword(formData.get('password') as string);

  const newPost:InsertUser = {
    username: formData.get('username') as string,
    password: hashedPassword,
    email: formData.get('email') as string,
  }
  await db.insert(usersTable).values(newPost);
  
  redirect('/login/');
}

export async function createPost(data: InsertPost) {
  await db.insert(postsTable).values(data);
}