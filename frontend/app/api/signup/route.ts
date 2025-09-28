// import db connection , user models , salting fns
import dbConnect from '@/app/lib/dbConnect';
import bcrypt from 'bcryptjs';
import messageModel from '@/app/model/User';
import { sendVerificaionEmail } from '@/app/helpers/sendVerificationEmail';
import { ApiError } from 'next/dist/server/api-utils';
import { success } from 'zod';

export async function POST(request: Request){
    await dbConnect();

    try{
        const {username ,email, password} = await request.json();
        const verifyCode = Math.floor(100000 + (Math.random() * 90000))
        // simple this this ain't permanent u are looking for the user that are already verified 
        // u would need usermodel here but it ain't present so messageModel is used be Aware.
        const existingUserVerifiedbyUsername = await messageModel.findOne({
            username,
            isVerified: true
        })

        if(existingUserVerifiedbyUsername){
            return Response.json({
                success : false,
                message: "username already taken kindly try another one"
            },{
                status : 400
            })
        }

        // const existingUserByEmail = await userModel.findOne({
        //     email
        // })

        if(existingUserByEmail){
            true // we have to return here..
        }
        else{
            const hashedPass = await bcrypt.hash(password , 10)
            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 1)
            // for a user that exist but hasn't been verified is getting verifed so a new user is 
            // created in user model and this syntax of new memeber creation through model 
            // will take place.. 
            // const newUser = new UserModel({

            // })
            // const newUser.save();
            const emailResponse = sendVerificaionEmail(
                email,
                username,
                verifyCode
            )
            if(!emailResponse.success){
                return Response.json({
                        success: false,
                        message: "failed to deliver email"
                },{
                    status: 500
                })
            }
        }
        return Response.json({
            success: true,
            message: " message delivered successfullly"
        }, {
            status: 201
        })

    }
    catch(error){
        console.error("Error sending the email" , error);
        return Response.json({
            success: false,
            message: "internal server error"
        },{
            status: 500
        })

    }
}