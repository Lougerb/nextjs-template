import { NextResponse } from 'next/server';
import { getAllUsers } from "@/db/user/queries/select";
 
export async function GET(request: Request) {
  try {
    const result  = await getAllUsers();
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 }); 
  }
}