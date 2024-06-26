import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import { Icons } from './Icons'
import NavItems from '../NavItems'
import { buttonVariants } from './button'
import Cart from '../Cart'
import DarkModeToggle from './darkModeToggle'


const Navbar = () => {

    /* mocking user */

    const user = null

    return (
        <div className='bg-background/50 sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-muted/10 backdrop-blur-md'>
                <MaxWidthWrapper>
                    <div className='border-b border-border'>
                        <div className='flex h-16 items-center'>
                            <div className='ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h-10 w-10' />
                                </Link>
                            </div>
                            <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                                <NavItems />
                            </div>

                            <div className='ml-auto flex items-center'>
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                    {user ? null : (
                                        <Link
                                            href='/sign-in'
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}>
                                            Sign in
                                        </Link>
                                    )}

                                    {user ? null : (
                                        <span
                                            className='h-6 w-px bg-muted-foreground'
                                            aria-hidden='true'
                                        />
                                    )}

                                    {user ? (
                                        <>
                                            {/* <UserAccountNav user={user} /> */}
                                            <p></p>
                                        </>
                                    ) : (
                                        <Link
                                            href='/sign-up'
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}>
                                            Create account
                                        </Link>
                                    )}

                                    {user ? (
                                        <span
                                            className='h-6 w-px bg-muted-foreground'
                                            aria-hidden='true'
                                        />
                                    ) : null}

                                    {user ? null : (
                                        <div className='flex lg:ml-6'>
                                            <span
                                                className='h-6 w-px bg-muted-foreground'
                                                aria-hidden='true'
                                            />
                                        </div>
                                    )}

                                    <div className='ml-4 flow-root lg:ml-6'>
                                        {<Cart />}
                                    </div>
                                    <span
                                        className='h-6 w-px bg-muted-foreground'
                                        aria-hidden='true'
                                    />
                                    <DarkModeToggle />
                                </div>
                            </div>


                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar