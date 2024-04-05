"use client"

import React from 'react'
import { Icons } from '../../../components/ui/Icons'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from '@/lib/validators/account-credential-validators'
import { PasswordInput } from '@/components/ui/customPasswordInput'


const page = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }



    return (
        <>
            <div className="flex w-full min-h-96 items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-4 max-w-96 lg:max-w-96 xs:max-w-64 p-8 border border-gray-300 rounded-lg border-solid mt-10 shadow-2xl bg-background">
                    <Icons.logo className='h-20 w-20' />
                    <h1 className="text-2xl font-bold">Create your account!</h1>
                    <div className={cn("flex gap-1 items-center justify-center group", buttonVariants({ variant: 'link' }))}>
                        <h2 className="text-base font-semibold text-primary group-hover:cursor-pointer">Already have an account? Sign in</h2>
                        <ArrowRight className='text-primary group-hover:underline group-hover:cursor-pointer' />
                    </div>

                    <div className="formContainer w-full">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="you@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                {/* <Input type='password' placeholder="your password" {...field} /> */}
                                                <PasswordInput placeholder="your password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className='w-full'>Submit</Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page