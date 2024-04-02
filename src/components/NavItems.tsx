"use client"
import { PRODUCT_CATEGORIES } from '@/config'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import NavItem from './NavItem'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'

const NavItems = () => {
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
    )
}

export default NavItems