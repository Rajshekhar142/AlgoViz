import {z} from "zod";

export const singInSchema = z.object({
    // identifier can be anything ... username , email . etc.
    identifier: z.string(),
    password: z.string()
})