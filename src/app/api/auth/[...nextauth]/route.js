import { connectDB } from "@/libs/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const { default: NextAuth } = require("next-auth");

const handler = NextAuth({
    session:{
        strategy:'jwt',
        maxAge: 14*60*60
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials){
                const {email, password} = credentials;
                if(!email || !password){
                    console.log('not working');
                    return null
                }else{
                    const db = await connectDB();
                    const user = await db.collection('users').findOne({email: email});
                    console.log(user)
                    if(!user){
                        return null
                    }else{
                        if(password == user?.password){
                            console.log(user?.password)
                            return user
                        }
                    }
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({user, account}){
            if(account.provider == 'google'){
                const db = await connectDB();
                const userCollection = db.collection('users')
                const registeredUser = await userCollection.findOne({email:user?.email});
                if(!registeredUser){
                    const res = await userCollection.insertOne(user);
                    if(res.acknowledged){
                        return user
                    }
                }else{
                    return user
                }
            }else{
                return user
            }
        }
    },
    pages:{
        signIn: "/login",
    },
})

export {handler as GET, handler as POST}