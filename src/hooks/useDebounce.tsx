"use client "

import { useEffect, useState } from "react"

export const useDebounce = (value: string, delay: number) => {
    const [debounced, setdebounced] = useState(value)
    useEffect(() => {
        const imer = setTimeout(() => {
            setdebounced(value)
        }, delay)
        return () => clearTimeout(imer)
    }, [value, delay])
    return debounced
}