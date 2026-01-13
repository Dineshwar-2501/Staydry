import Image from "next/image";
import Link from "next/link";
import logosd from '@/public/Logosd.png'
import call from '@/public/Icons/phone-call.png'
import search from '@/public/Icons/search.png'
import menu from '@/public/Icons/menu.png'
import style from './Header.module.css'
import line from '@/public/Icons/line.png'
export default function Header() {
    
    return (
        <>
            <div className="flex justify-between p-2 text-center items-center px-5  ">
                
                    <Link href='/' className="logo flex gap-2 ">
                    {/* <div className="logo flex  gap-2"></div> */}
                        <Image width={30} height={20} src={logosd} alt="StayDry-Logo" />
                        <h1 className="text-3xl font-extrabold ps-5">STAY DRY</h1>
                    </Link>
                
                <div className="navbar flex flex-row p-2 text-center items-center px-5">
                    <div className="hidden md:block">
                        <Link  className= {style.nav} href="/products">Shop All</Link>
                        <Link  className= {style.nav} href="">Underwear</Link>
                        <Link  className= {style.nav} href="">Bedding&Home</Link>
                        <Link  className= {style.nav} href="">Mobility</Link>
                        <Link  className= {style.nav} href="">Toilet Training</Link>
                        <Link  className= {style.nav} href="">Bundles</Link>
                        <Image src={line} alt="line" width={30} className="inline -m-1" />
                    </div>
                    
                    <Link  className= {style.nav}href="/contacts"> <Image   width={20} height={20} alt="Call" src={call} className="inline -mt-2"/> Call</Link>
                    <Image src={line} alt="line" width={30} className="inline -m-1" />
                    <Link href={'/products'}>
                        <Image   width={20} height={20} alt="Search" className="inline -mt-2 mr-2" src={search} />
                    </Link>
                    <Link className= {style.nav} href="/cart">Cart</Link>
                    <Image src={line} alt="line" width={30} className="inline -m-1" />
                    <Link  className= {style.nav}href=""><span>Menu </span><Image   width={20} height={20} className="inline -mt-1" src={menu} alt="Menu" /></Link>
                </div>
            </div>


        </>
    );
}