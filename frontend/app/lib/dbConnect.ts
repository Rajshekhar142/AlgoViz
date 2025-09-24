// the whole motive here is to make a connection to the database..
// it could be any whatever u decide for algoviz.. 
// think on it.. 


import mongoose from "mongoose";

type ConnectionObject = {
    isConnected ?: number
}

const Connection: ConnectionObject = {}
// jab dbconnect return karega toh vo value ek promise aur promise m kya hoga? uss se matlab nhi to void use
// kar lenge.. 
async function dbConnect() : Promise<void>{
    if(Connection.isConnected){
        console.log("Connected Successfully");
        return;
    }
    try{
        // so there are option when connection of mongodb i know like there were 3 type in psql.. gotta study em
        const db = await mongoose.connect(process.env.MONGODB_URI || '' , {})
        // console.log(db);
        // console.log(db.connections);

        Connection.isConnected = db.connections[0].readyState;
        console.log("connected successfully");
    }
    catch(error){
        console.log("databse Connection failed.. ")
        process.exit(1)
    }
}

export default dbConnect;