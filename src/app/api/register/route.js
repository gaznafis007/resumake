import { connectDB } from "@/libs/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const user = await req.json();
    try{
        db = await connectDB()
        const userCollection = db.collection('users');
        const registeredUser = await userCollection.finOne({email: user?.email});
        if(registeredUser){
            return NextResponse.json({message: 'user already exists'})
        }else{
            const result = await userCollection.insertOne(user);
            return NextResponse.json(result)
        }
    }catch(error){
        return NextResponse({message: 'Error occurred', status: 404})
    }
}