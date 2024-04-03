"use client"
import { PRODUCT_CATEGORIES } from '@/config'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import NavItem from './NavItem'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'


const NavItems = () => {
    return (
        <div className="flex gap-4 h-full w-full items-center justify-between">
            <NavigationMenu>
                <NavigationMenuList className='h-full'>
                    {PRODUCT_CATEGORIES.map((category, i) => {
                        return (
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
                                <NavigationMenuContent className='flex'>
                                    <NavigationMenuLink className='flex flex-row gap-4'>
                                        <NavItem
                                            category={category}
                                            handleOpen={() => { }}
                                            isOpen={true}
                                            isAnyOpen={true}
                                            key={category.value}
                                        />
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </div >
    )
}

export default NavItems


/* 
<>
                                            {category.featured.map((item, i) => {
                                                <>
                                                    <div className='relative aspect-video overflow-hidden rounded-lg bg-mute group-hover:opacity-75'>
                                                        <Image
                                                            src={item.imageSrc}
                                                            alt='product category image'
                                                            fill
                                                            className='object-cover object-center cursor-pointer'
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-4">
                                                        <Link
                                                            href={item.href}
                                                            className='mt-6 block font-medium text-foreground'>
                                                            {item.name}
                                                        </Link>
                                                        <button className={buttonVariants({ variant: 'secondary' })}>
                                                            Shop now
                                                        </button>
                                                    </div>
                                                </>
                                            })}
                                        </> */



/* 

const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const isAnyOpen = activeIndex !== null

    const navRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveIndex(null)
            }
        }
        document.addEventListener("keydown", (e: KeyboardEvent) => handler(e))

        return (
            document.removeEventListener("keydown", (e: KeyboardEvent) => handler(e))
        )

    }, [])

    useOnClickOutside(navRef, () => setActiveIndex(null))

    return (
        <div className='flex gap-4 h-full w-full items-center justify-between' ref={navRef}>
            {PRODUCT_CATEGORIES.map((category, i) => {

                const handleOpen = () => {
                    if (activeIndex === i)
                        setActiveIndex(null)
                    else
                        setActiveIndex(i)
                }

                const isOpen = i === activeIndex

                return (
                    <>
                        <NavItem
                            category={category}
                            handleOpen={handleOpen}
                            isOpen={isOpen}
                            key={category.value}
                            isAnyOpen={isAnyOpen}
                        />
                    </>
                )
            })}
        </div>
*/