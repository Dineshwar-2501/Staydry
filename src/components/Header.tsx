'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import style from './Header.module.css'
import { CallIcon, MenuIcon, SearchIcon } from "@/svgComponents/Icon";
export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className=" fixed top-0  z-10 w-full bg-amber-50 " >
            {/* logo */}
            <div className="  mx-auto px-4 xl:px-10">

                <div className="flex  justify-between pt-2 border-b">
                    <div className="flex gap-3 items-center max-w-70  ">
                        <Link href='/' >
                            <Image src='/Icons/logo.svg' width={180} height={20} alt="StayDry-Logo" className="object-cover " />
                        </Link>
                        {/* <Link href='/' >
                            <Image src='/Icons/Staydry-Kids.svg' width={180} height={20} alt="StayDry-Logo" className="object-cover " />
                        </Link> */}
                    </div>
                    <button
                        type="button"
                        title="menu"
                        className=" gap-2 items-center hidden md:flex"
                        onClick={() => setOpen(prev => !prev)}
                    >
                        <Image width={20} height={20} src='/Icons/menu.png' alt="Menu" />
                        MENU
                    </button>
                </div>





                {/* navbar */}

                <div className="navbar flex flex-row py-5 text-center justify-end lg:justify-between items-center  ">
                    <div className="hidden lg:flex gap-2">
                        <Link className={style.nav} href="/products">Shop All</Link>
                        <Link className={style.nav} href="">Underwear</Link>
                        <Link className={style.nav} href="">Bedding&Home</Link>
                        <Link className={style.nav} href="">Mobility</Link>
                        <Link className={style.nav} href="">Toilet Training</Link>
                        <Link className={style.nav} href="">Bundles</Link>
                        <Link className={style.nav} href="/contacts">Contacts</Link>

                    </div>
                    <div className="flex  items-center">

                        <Link href={'/products'} className=" ">
                            <SearchIcon className="text-black w-8"/>
                        </Link>

                        <Image src='/Icons/line.png' alt="line" width={30} height={20} />
                        <Link className='  flex' href="tel:1800684876">
                            <CallIcon className="w-10"/>
                            <span className="mx-2 text-lg font-bold">Call </span>
                        </Link>
                        <Image src='/Icons/line.png' alt="line" width={30} height={20} />
                        <Link className=" me-3 text-lg" href="/cart">Cart</Link>


                        <button
                            type="button"
                            title="menu"

                            onClick={() => setOpen(prev => !prev)}
                        ><MenuIcon/>
                        </button>
                    </div>
                </div>

                {open &&

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        // exit={{ opacity: 0, y: -20 }}

                        transition={{ duration: 0.5 }}
                        className="absolute top-20 w-full z-1 p-4 right-0 flex flex-col bg-gray-300 shadow-2xl gap-2">
                        <button className="absolute right-10 top-2 rounded-full bg-gray-50 px-2 outline-0 " onClick={() => setOpen(prev => !prev)}>x</button>
                        <Link className={style.nav} href="/products">Shop All</Link>
                        <Link className={style.nav} href="">Underwear</Link>
                        <Link className={style.nav} href="">Bedding&Home</Link>
                        <Link className={style.nav} href="">Mobility</Link>
                        <Link className={style.nav} href="">Toilet Training</Link>
                        <Link className={style.nav} href="">Bundles</Link>
                        <Link className={style.nav} href="/contacts">Contacts</Link>


                    </motion.div>

                }
            </div>



        </header>
    );
}