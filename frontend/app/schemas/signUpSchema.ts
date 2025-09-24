import {z} from "zod";

export const userNameValidation = z.
    string()
    .min(2, "username can't be less than 2 characters")
    .max(20 , "username can't exceed the length of 20 characters")
    .regex( /^[a-zA-Z0-9]+$/ , "username must not contain any special characters")


export const signupSchema = z.object({
    username: userNameValidation,
    email : z.email({message: "invalid email address"}),
    password: z.string().min(6, {message: "password can't be less than 6 characters.."})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/ , " password must be in format 1 uppercase 1 lowercase 1 number and 1 special character")

})