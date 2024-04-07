const hasUpperCase = (str: string) => /[A-Z]/.test(str);
const hasLowerCase = (str: string) => /[a-z]/.test(str);
const hasNumber = (str: string) => /\d/.test(str);
const hasSymbol = (str: string) => /\W/.test(str); // Matches non-word characters
import { z } from "zod"

export const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }),
    password: z.string().min(8, { message: 'Password must be atleast 8 characters long.' }).refine((str) => hasUpperCase(str) && hasLowerCase(str) && hasNumber(str) && hasSymbol(str), {
        message: 'Password must contain at least one uppercase letter, lowercase letter, number, and symbol'
    }),
    passwordAgain: z.string().min(8, { message: 'Password must be atleast 8 characters long.' }).refine((str) => hasUpperCase(str) && hasLowerCase(str) && hasNumber(str) && hasSymbol(str), {
        message: 'Password must contain at least one uppercase letter, lowercase letter, number, and symbol'
    })
})