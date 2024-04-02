import React from 'react'
import { buttonVariants } from './ui/button'
import { cn, formatPrice } from '@/lib/utils'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from 'lucide-react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import Image from 'next/image'


const Cart = () => {

    const itemCount = 1;
    const bill = 35.69;

    return (
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center p-2'>
                <ShoppingCart
                    aria-hidden='true'
                    className='h-6 w-6 flex-shrink-0 text-muted-foreground group-hover:text-foreground'
                />
                <span className='ml-2 text-sm font-medium text-muted-foreground group-hover:text-foreground'>
                    {itemCount}
                </span>
            </SheetTrigger>
            <SheetContent className='flex w-full flex-col p-6 sm:max-w-lg'>


                <SheetHeader className='space-y-2.5 pr-6'>
                    <SheetTitle>Cart ({itemCount})</SheetTitle>
                </SheetHeader>

                {
                    itemCount > 0
                        ? (
                            <>
                                <div className="flex w-full flex-col">
                                    {/* TODO: CARD LOGIC */}
                                    Cart Items
                                </div>
                                {/* the buttons on the cart */}
                                <div className="space-y-4">
                                    <Separator />
                                    <div className="space-y-1.5 text-sm">
                                        <div className="flex">
                                            <span className="flex-1">Shipping</span>
                                            <span>Free</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 text-sm">
                                        <div className="flex">
                                            <span className="flex-1">Transaction Fee</span>
                                            <span>{formatPrice(bill)}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 text-sm">
                                        <div className="flex">
                                            <span className="flex-1">Total</span>
                                            <span>{formatPrice(bill)}</span>
                                        </div>
                                    </div>

                                    <SheetFooter>
                                        <SheetTrigger asChild>
                                            <Link href={"/cart"} className={cn(buttonVariants({ variant: 'default' }), "w-full")}>
                                                Continue to Checkout
                                            </Link>
                                        </SheetTrigger>
                                    </SheetFooter>

                                </div>
                            </>
                        )
                        : (
                            <div className='flex h-full flex-col items-center justify-center space-y-1'>
                                <div
                                    aria-hidden='true'
                                    className='relative mb-4 h-60 w-60 text-muted-foreground'>
                                    <Image
                                        src='/hippo-empty-cart.png'
                                        fill
                                        alt='empty shopping cart hippo'
                                    />
                                </div>
                                <div className='text-xl font-semibold'>
                                    Your cart is empty
                                </div>
                                <SheetTrigger asChild>
                                    <Link
                                        href='/products'
                                        className={buttonVariants({
                                            variant: 'link',
                                            size: 'sm',
                                            className:
                                                'text-sm text-muted-foreground',
                                        })}>
                                        Add items to your cart to checkout
                                    </Link>
                                </SheetTrigger>
                            </div>
                        )
                }
            </SheetContent>
        </Sheet>

    )
}

export default Cart