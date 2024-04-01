"use client"
import { PRODUCT_CATEGORIES } from '@/config'
import React, { useReducer, useRef, useState } from 'react'
import NavItem from './NavItem'

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const isAnyOpen = activeIndex !== null

    const navRef = useRef<HTMLDivElement | null>(null)

    return (
        <div className='flex gap-4 h-full w-full items-center justify-between'>
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