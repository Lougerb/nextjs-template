import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Cruds from "../../../../../models/Cruds";

export async function PUT(request, {params}) {
    const {id} = params;
    const { newText: text } = await request.json();
    await connectMongoDB();
    await Cruds.findByIdAndUpdate(id, { text });
    return NextResponse.json({message: "Text Updated"}, {status: 200});
}