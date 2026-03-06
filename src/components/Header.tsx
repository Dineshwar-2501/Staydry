'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import style from './Header.module.scss'
import { CallIcon, CartIcon, MenuIcon, SearchIcon } from "@/svgComponents/Icon";
import Logo from "@/svgComponents/Logo";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
export default function Header() {
    const [open, setOpen] = useState(false)
    const [fixed, setFixed] = useState(false)
    const pathname = usePathname();
    const reduxCart = useSelector((state: RootState) => state.cart)

    useEffect(() => {
        function handleHeader() {
            requestAnimationFrame(()=>{
            if (window.scrollY > 0) {
                setFixed(true)
            } else {
                setFixed(false)
            }
        }
    )};
        window.addEventListener("scroll", handleHeader);
        return () => window.removeEventListener("scroll", handleHeader)
    }, []);
    return (
        <header className={`  z-100 w-full bg-amber-50 ${style.header}`}>
            {/* ${fixed? 'fixed':''}  */}


            <div className={`${style.tabs} mx-auto px-4 xl:px-10`}>
                <div className={` ${style.tabs__logo} flex gap-3 items-center max-w-70  `}>
                    <Link href='/'  >
                        <Image src='/Icons/logo.svg' width={164} height={20} alt="StayDry-Logo" className={`object-cover ${pathname === '/' ? style["tabs__logo--active"] : ""} py-5  px-3`} />

                    </Link>
                    <Link href='/cart' >
                        <Image src='/Icons/Staydry-Kids.svg' width={180} height={20} alt="StayDry-Logo" className={`object-cover ${pathname === '/cart' ? style["tabs__logo--active"] : ""}  py-2  px-3`} />
                    </Link>
                </div>
                <button
                    type="button"
                    title="menu"
                    className={`${style.tabs__button} gap-2 items-center hidden md:flex text-[#dc410b]`}
                    onClick={() => setOpen(prev => !prev)}
                >MENU
                    {/* <Image width={20} height={20} src='/Icons/menu.png' alt="Menu" /> */}
                    <MenuIcon className="fill-[#dc410b]" />

                </button>
            </div>

            <div className="  mx-auto px-4 xl:px-10">



                {/* navbar */}

                <div className="navbar flex flex-row py-5 text-center justify-end lg:justify-between items-center  ">
                    <div className="hidden lg:flex gap-2">
                        <Link className={style.nav} href="/products">Shop All</Link>
                        <Link className={style.nav} href="">Underwear</Link>
                        <Link className={style.nav} href="">Bedding&Home</Link>
                        <Link className={style.nav} href="">Mobility</Link>
                        <Link className={style.nav} href="/about">About</Link>
                        <Link className={style.nav} href="/users">Users</Link>
                        <Link className={style.nav} href="/contacts">Contacts</Link>

                    </div>
                    <div className="flex  items-center">

                        <Link href={'/products'} className=" ">
                            <SearchIcon className="text-black w-8 lg:hidden block" />
                        </Link>

                        <Image src='/Icons/line.png' alt="line" width={30} height={20} />
                        <Link className='  flex' href="tel:1800684876">
                            <CallIcon className="w-10" />
                            <span className="mx-2 text-lg font-bold">Call </span>
                        </Link>
                        <Image src='/Icons/line.png' alt="line" width={30} height={20} />
                        <Link href={'/products'} className=" ">
                            <SearchIcon className="text-black w-8 mx-2 lg:block hidden" />
                        </Link>
                        <Link className=" me-3 text-lg flex items-center content-center relative" href="/cart">  <CartIcon className="w-9" /> <span className={` -right-2  -top-2 w-6 h-6 absolute rounded-full bg-amber-700  text-white text-xl  font-bold ${reduxCart.items.length === 0 ? "hidden" : "inline-block"} `}>{reduxCart.items.length}</span> </Link>


                        <button
                            type="button"
                            title="menu"
                            className="lg:hidden block"
                            onClick={() => setOpen(prev => !prev)}
                        ><MenuIcon />
                        </button>
                    </div>
                </div>

                {open &&

                    <motion.div
                        initial={{ opacity: 0, y: -500 }}
                        animate={{ opacity: 1, y: 0 }}
                        // exit={{ opacity: 0, y: -20 }}

                        transition={{ duration: 2 }}
                        className="absolute top-33 w-full z-1 p-4 items-center right-0 h-screen flex flex-col bg-gray-300 shadow-2xl gap-2">
                        <button className="absolute right-10 top-2 rounded-full text-center bg-gray-50 p-2 px-4 outline-0 " onClick={() => setOpen(prev => !prev)}>x</button>
                        <Link className={style.nav} href="/products">Shop All</Link>
                        <Link className={style.nav} href="">Underwear</Link>
                        <Link className={style.nav} href="">Bedding&Home</Link>
                        <Link className={style.nav} href="">Mobility</Link> 
                        <Link className={style.nav} href="/about">About</Link>
                        <Link className={style.nav} href="/users">Users</Link>
                        <Link className={style.nav} href="/contacts">Contacts</Link>


                    </motion.div>

                }
            </div>



        </header>
    );
}