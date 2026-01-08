import Image from "next/image";
import Link from "next/link";
import logoosd from "@/public/Logoosd.png"
import call from "@/public/Icons/phone-call.png"
import Facebook from "@/public/Icons/Facebook.png"
import Instagram from "@/public/Icons/instagram.png"
import Linkedin from "@/public/Icons/linkedin.png"
import email from "@/public/Icons/email.png"
import copyright from "@/public/Icons/copyright.png"
import styles from './Footer.module.css'
export default function Footer() {
    return (
        <footer>
            <div className="p-4 bg-orange-500/10 grid grid-cols-2 px-5">
                <div className="flex flex-col justify-between">
                    <div>
                        <Image width={30} height={30} src={logoosd} alt="logo" />
                        <div className="flex flex-col">
                            <Link href={''}><Image width={25} height={25} src={call} alt="Call" className="inline" />  Call Us</Link>
                            <Link href={''}><Image width={20} height={20} src={email} alt="Mail" className="inline" />    Send an Email</Link>
                        </div> </div>
                    <div >
                        <p><Image width={20} height={20} src={copyright} alt="Copyright"  className="inline mr-2"/>Copyright 2025 Staydry</p>
                        <p>ABN 67167519039</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <h1>Join our newsletter </h1>
                        <button type="submit" className={styles.button}> Submit </button>
                    </div>
                    <hr />
                    <div>
                        <input title="policy" type="checkbox" id="pp" />
                        <label htmlFor="pp"> I would like to receive newsletters from Statdry and have read the <span>Privacy Policy</span>
                        </label>
                    </div>
                    <div className="grid grid-cols-2 mt-10">
                        <ul>
                            <li>Our Brand</li>
                            <li>Account</li>
                            <li>NDIS</li>
                            <li>Returns</li>
                            <li>Terms of Service</li>
                        </ul>
                    
                        <ul>
                            <li>Customer Care</li>
                            <li>Stockists</li>
                            <li>Shipping</li>
                            <li>FAQs</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                    <div className="flex justify-between mt-10 p-3" >
                        <div className="flex gap-3">
                            <h1 className="text-2xl font-extrabold">STAYDRY</h1>
                            <p><span className="-mt-2"> ___ </span>Shop our brand and find your dry style</p>
                        </div>
                        <div className="flex gap-3">
                            <Image width={27}  src={Facebook} alt="social media" />
                            <Image width={27}  src={Linkedin} alt="social media" />
                            <Image width={27}  src={Instagram} alt="social media" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}