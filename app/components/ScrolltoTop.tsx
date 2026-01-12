"use client"

import Image from "next/image";
import Button from "../utilities/Button";
import tarrow from "@/public/Icons/arrow-up-mark.png"
import { useEffect, useState } from "react";
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
        <div>
            {!showtop &&  <Button
                className={`fixed bottom-0 right-0   rounded-full  `}
                onClick={() => { handlescroll() }}
                
            >

                <Image src={tarrow} alt='arrow' width={30}  height={30} className="py-3 mx-1  mask-add" />

            </Button>}
        </div>
    );
}