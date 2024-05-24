import Cruds from "../../../../models/Cruds";
import connectMongoDB from "../../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {text} = await request.json();

    await connectMongoDB();
    await Cruds.create({text});
    return NextResponse.json({message: "Crud created"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const cruds = await Cruds.find();
    return NextResponse.json({cruds})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    
    await Cruds.findByIdAndDelete(id);
    await connectMongoDB();
    return NextResponse.json({message: 'Item Deleted lmao'}, {status: 200});
}