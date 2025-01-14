
const { MongoClient, ServerApiVersion } = require('mongodb');
let db;
export const connectDB = async () =>{
    if(db){
        return db;
    }else{
        try{
            const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.d1c0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
            // console.log(uri, 'this is uri')
            // Create a MongoClient with a MongoClientOptions object to set the Stable API version
            const client = new MongoClient(uri, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                  }
            })
            await client.connect();
            db = client.db('resumake-database');
            return db;
        }
        catch(error){
        console.dir(error)
        }
    }
}

