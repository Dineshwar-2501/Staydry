"use client"
import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.scss'
import { Instagram, Facebook, LinkedIn } from "@/svgComponents/Socialmedia";
export const Footer = () => {
    return (
        <footer className="w-full  bg-orange-500/10 mx-auto px-4 lg:px-10 mt-15 lg:py-15  py-5  ">
            <div className=" grid  grid-cols-6 ">
                <div className="Logo col-span-6 lg:col-span-1">
                    <Image width={40} height={40} className="aspect-square mb-5 " src='/Icons/orangeLogo.svg' alt="logo" />
                </div>
                <div className="flex flex-col gap-2 justify-start col-span-3 row-start-3 mt-10 lg:row-start-2 lg:col-span-1  text-sm lg:text-lg">
                    <Link href={''}><Image width={25} height={25} src='/Icons/call.svg' alt="Call" className="inline " />  <span className="font-medium mx-3">Call Us</span></Link>
                    <Link href={''}><Image width={20} height={20} src='/Icons/mail.svg' alt="Mail" className="inline " />   <span className="font-medium mx-3"> Send an Email</span></Link>
                </div >

                <div className="py-10  text-sm  row-start-6 col-span-4 lg:row-start-4 lg:col-span-1 flex lg:flex-col">
                    <p>© Copyright 2025 Staydry</p>
                    <p>ABN 67167519039</p>
                </div>
                <div className="col-span-6 row-start-2 lg:col-span-4 lg:row-span-2 lg:row-start-1 lg:col-start-3">
                    <form action="">
                        <div className="flex justify-between items-center  relative">
                            <label htmlFor="news" className="label text-gray-500  text-xl">Join our news letter</label>
                            <button type="submit" className={styles.button}> Submit </button>
                        </div>
                        <input type="text" title="email" id='news' className={`${styles.input} z-10    border-b-2 w-full  mb-2 outline-0 `} />
                        <div className="flex gap-3">
                            <input title="policy" type="checkbox" id="pp" className="w-5" />
                            <label htmlFor="pp " className=" md:max-w-[40%] max-w-[80%] text-sm lg:text-lg"> <p className=" text-gray-500 inline  " >I would like to receive newsletters from Statdry and have read the <span className="underline font-bold">Privacy Policy</span></p>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-2 mt-10  col-span-3 row-start-3 col-start-4 lg:row-start-3 lg:row-span-2 lg:col-span-3 lg:col-start-3  text-sm lg:text-lg">
                    <ul>
                        <li className="text-gray-500">Our Brand</li>
                        <li className="text-gray-500">Account</li>
                        <li className="text-gray-500">NDIS</li>
                        <li className="text-gray-500">Returns</li>
                        <li className="text-gray-500">Terms of Service</li>
                    </ul>

                    <ul>
                        <li className="text-gray-500">Customer Care</li>
                        <li className="text-gray-500">Stockists</li>
                        <li className="text-gray-500">Shipping</li>
                        <li className="text-gray-500">FAQs</li>
                        <li className="text-gray-500">Accessibility</li>
                    </ul>
                </div>

                <div className="  text-sm  flex  items-center flex-row flex-nowrap py-10 px-5 gap-3  row-start-5 col-span-6 lg:col-start-3 lg:col-span-2">
                    <h1 className="lg:text-2xl font-extrabold">STAYDRY</h1>
                    <Image src="/Icons/hr.svg" alt="line " width={50} height={10} />
                    <p>Shop our brand and find your dry style</p>
                </div>
                <div className="flex  gap-2 lg:gap-3 p-3 col-span-2 row-start-6 col-start-5 lg:row-start-5 lg:col-start-6">



                    <Link href={''}>
                        <Instagram className=" w-7 hover:fill-black  hover:stroke-black" />
                    </Link>
                    <Link href={''}>
                        <Facebook className=" w-10 hover:fill-black " />
                    </Link>
                    <Link href={''}>
                        <LinkedIn className="w-7  hover:fill-black" />
                    </Link>




                </div>

            </div>

        </footer>
    );
}