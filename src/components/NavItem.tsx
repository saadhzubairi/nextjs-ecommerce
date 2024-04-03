"use client"

import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'


type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: Category,
    handleOpen: () => void,
    isOpen: boolean,
    isAnyOpen: boolean
}

const NavItem = ({ category, handleOpen, isAnyOpen, isOpen }: NavItemProps) => {
    return (
        <div className="flex p-8 min-w-96 h-fit flex-row gap-12">
            {
                category.featured.map(
                    (item) => (
                        <div
                            key={item.name}
                            className='group relative text-base sm:text-sm w-64'>
                            <div className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                <Image
                                    src={item.imageSrc}
                                    alt='product category image'
                                    fill
                                    className='object-cover object-center cursor-pointer h-96'
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <Link
                                    href={item.href}
                                    className='mt-6 block font-medium text-foreground'>
                                    {item.name}
                                </Link>
                                <button className={cn(buttonVariants({ variant: 'secondary' }), "")}>
                                    Shop now
                                </button>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}
export default NavItem



/* <div className='relative bg-white'>
            <div className='mx-auto px-8'>
                <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                    <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                        {
                            category.featured.map(
                                (item) => (
                                    <div
                                        key={item.name}
                                        className='group relative text-base sm:text-sm w-64'>
                                        <div className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                            <Image
                                                src={item.imageSrc}
                                                alt='product category image'
                                                fill
                                                className='object-cover object-center cursor-pointer h-96'
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <Link
                                                href={item.href}
                                                className='mt-6 block font-medium text-foreground'>
                                                {item.name}
                                            </Link>
                                            <button className={cn(buttonVariants({ variant: 'secondary' }), "w-52")}>
                                                Shop now
                                            </button>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div> 
        */