"use client"

import Image from "next/image";
import Button from "@/utilities/Button";

import { useEffect, useState } from "react";
import { ArrowUp } from "@/svgComponents/Icon";
export default function ScrolltoTop() {

    function handlescroll() {
        window.scrollTo({ top: 0, behavior: 'smooth' })

    }

    const [showtop, setShowTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 200) {
                setShowTop(true);
            } else {
                setShowTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            {!showtop && <Button
                className={`fixed bottom-0 right-10 z-1 p-0! rounded-full  `}
                onClick={() => { handlescroll() }}
            >
                <ArrowUp />

            </Button>}
        </>
    );
}