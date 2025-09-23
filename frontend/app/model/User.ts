import mongoose , {Schema , Document} from "mongoose";

// schema as for mongoose.schema
// document in order to provide type safety in nextjs

export interface Message extends Document{
    content : string;
    createdAt: Date;
}

// it is a schema but a specifc type of schema so schema<its type> = new Schema
const messageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})


// task create a custom interface that has to be used in algoviz project by refering the above code ..
// if u get stuck... https://mongoosejs.com/docs/guide.html#definition

// model creation..
// 2 things are being checked here... 1st if model is already created ... 1st one else another with or create a model with name Message that 
// follows messageSchema
// mongoose.model<Message>  is used to provide type safety
// mongoose.models.Message as mongoose.Model<Message>  is used to check if model already exists
const messageModel = mongoose.models.Message as mongoose.Model<Message>  || mongoose.model<Message>('Message' , messageSchema);

export default messageModel;