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
import Link from 'next/link'
import { trpc } from '@/trpc/client'


const page = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            passwordAgain: "",
        },
    })


    const { data } = trpc.anyApiRoute.useQuery()
    console.log(data)

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // This will be type-safe and validated.
        console.log(values)
    }



    return (
        <>
            <div className="flex w-full min-h-96 items-center justify-center transition-all duration-300">
                <div className="flex flex-col justify-center items-center gap-8 min-w-96 lg:max-w-96 xs:max-w-64 p-8 border border-border rounded-lg border-solid mt-6 shadow-md hover:shadow-xl bg-card duration-300 transition-all">
                    <Icons.logo className='h-20 w-20' />
                    <h1 className="text-2xl font-bold">Create your account!</h1>
                    <div className="formContainer w-full">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                                <div className="space-y-2">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className='space-y-1'>
                                                <FormLabel className='ml-1 font-bold'>Email address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="you@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage className='ml-1 text-sm font-normal' />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className='space-y-1'>
                                                <FormLabel className='ml-1 font-bold'>Password</FormLabel>
                                                <FormControl>
                                                    {/* <Input type='password' placeholder="your password" {...field} /> */}
                                                    <PasswordInput placeholder="your password" {...field} />
                                                </FormControl>
                                                <FormMessage className='ml-1 text-sm font-normal' />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="passwordAgain"
                                        render={({ field }) => (
                                            <FormItem className='space-y-1'>
                                                <FormLabel className='ml-1 font-bold'>Re-enter password</FormLabel>
                                                <FormControl>
                                                    {/* <Input type='password' placeholder="your password" {...field} /> */}
                                                    <PasswordInput placeholder="your password" {...field} />
                                                </FormControl>
                                                <FormMessage className='ml-1 text-sm font-normal' />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Button type="submit" className='w-full'>Submit</Button>
                            </form>
                        </Form>
                    </div>
                    <Link href={"/sign-in"} className={cn("flex gap-1 items-center justify-center group w-full", buttonVariants({ variant: 'ghost' }))}>
                        <h2 className="text-xs font-semibold group-hover:cursor-pointer text-primary">Already have an account? Sign in</h2>
                        <ArrowRight size={12} className=' group-hover:cursor-pointer text-primary' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default page