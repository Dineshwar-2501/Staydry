'use client'
import Image from "next/image";
import Link from "next/link";
import logosd from '@/public/Logosd.png'
import call from '@/public/Icons/phone-call.png'
import search from '@/public/Icons/search.png'
import menu from '@/public/Icons/menu.png'
import style from './Header.module.css'
import line from '@/public/Icons/line.png'
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header>
            <div className="flex justify-between p-2 text-center items-center container mx-auto px-4 xl:px-10  ">

                <Link href='/' className="logo flex gap-2 ">
                    {/* <div className="logo flex  gap-2"></div> */}
                    <Image width={30} height={20} src={logosd} alt="StayDry-Logo" />
                    <h1 className="text-sm xl:text-3xl font-extrabold xl:ps-5">STAY DRY</h1>
                </Link>

                <div className="navbar flex flex-row p-2 text-center items-center px-5">
                    <div className="hidden xl:flex gap-2">
                        <Link className={style.nav} href="/products">Shop All</Link>
                        <Link className={style.nav} href="">Underwear</Link>
                        <Link className={style.nav} href="">Bedding&Home</Link>
                        <Link className={style.nav} href="">Mobility</Link>
                        <Link className={style.nav} href="">Toilet Training</Link>
                        <Link className={style.nav} href="">Bundles</Link>

                    </div>
                    <Image src={line} alt="line" width={30} className="xl:inline hidden " />
                    <Link className='mx-4 hover:border-b-2' href="/contacts">  <Image width={20} height={20} alt="Call" src={call} className="inline -mt-2" /> <span className="hidden md:inline text-orange-500">Call </span> </Link>
                    <Image src={line} alt="line" width={30} className="xl:inline hidden " />
                    <Link href={'/products'} className=" hover:border-b-2">
                        <Image alt="Search" className="w-5   aspect-square inline -mt-2 mr-2" src={search} />
                    </Link>
                    <Link className={style.nav} href="/cart">Cart</Link>
                    <Image src={line} alt="line" width={30} className="inline xl:hidden " />
                    <button
                        type="button"
                        title="menu"
                        className={` xl:hidden `}
                        onClick={() => setOpen(prev => !prev)}
                    ><Image width={20} height={20} src={menu} alt="Menu" /></button>
                </div>

                {open &&

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}

                        transition={{ duration: 0.5 }}
                        className="absolute top-20 w-full z-1 p-4 right-0 flex flex-col bg-gray-300 shadow-2xl gap-2">
                        <button className="absolute right-10 top-2 rounded-full bg-gray-50 px-2 outline-0 " onClick={() => setOpen(prev => !prev)}>x</button>
                        <Link className={style.nav} href="/products">Shop All</Link>
                        <Link className={style.nav} href="">Underwear</Link>
                        <Link className={style.nav} href="">Bedding&Home</Link>
                        <Link className={style.nav} href="">Mobility</Link>
                        <Link className={style.nav} href="">Toilet Training</Link>
                        <Link className={style.nav} href="">Bundles</Link>

                    </motion.div>

                }
            </div>


        </header>
    );
}