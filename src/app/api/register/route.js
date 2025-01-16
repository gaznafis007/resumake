import { connectDB } from "@/libs/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const user = await req.json();
    try{
        const db = await connectDB()
        const userCollection = db.collection('users');
        const registeredUser = await userCollection.findOne({email: user?.email});
        if(registeredUser){
            console.log(registeredUser, 'this is result')
            return NextResponse.json({message: 'user already exists', user:{...registeredUser}})
        }else{
            const result = await userCollection.insertOne(user);
            // console.log(result, 'this is result')
            return NextResponse.json(result)
        }
    }catch(error){
        console.log(error, "this is error")
        return NextResponse.json({message: 'Error occurred', status: 404, error})
    }
}

export const GET = async (req) =>{
    const {searchParams} = new URL(req.url);
    const email = searchParams.get('email');
    if(!email){
        return NextResponse.json({error: 'email is not provided'})
    }
    const db = await connectDB();
    const userCollection = await db.collection('users');
    const query = {email: email};
    const result = await userCollection.findOne(query);
    return NextResponse.json(result)
}