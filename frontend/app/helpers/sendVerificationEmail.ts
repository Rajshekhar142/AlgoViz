import {resend}from '@/app/lib/resend';
import VerificationEmail from '@/email/verificationemail';
import {ApiResponse} from '@/app/types/apiResponse';


export async function sendVerificaionEmail(email: string , username: string , verifycode: string): Promise<ApiResponse>{
try{

    await resend.emails.send({
  from: 'you@example.com',
  to: email,
  subject: 'AlgoViz | Verification Email',
  react: VerificationEmail({username , otp: verifycode}),
});
    return {
        success: true,
        message: "verification email send successfully"
    }
}
catch(emailError){
    console.error("Error Sending Email" , emailError);
    return{
        success: false,
        message: "error sending email"
    }
}
}