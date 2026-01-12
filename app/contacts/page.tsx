"use client"
import Image from "next/image";
import chat from "@/public/Icons/chat.png"
import mail from "@/public/Icons/email.png"
import call from "@/public/Icons/phone-call.png"
import line from "@/public/Icons/line.png"
import callus from '@/lib/userdetails'
import Button from "../utilities/Button";
import styles from './page.module.scss'
export default function Page() {
    return (
        <div className="container mx-auto">
        <div>
            <h1 className="text-3xl font-extrabold text-red-500/90 p-2">Customer Care</h1>
            <h3 className="p-3 text-red-500/90">Have questions or curious about something in particular?</h3>
            <p className="text-blue-500/90 p-3 mb-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae possimus quibusdam recusandae deserunt odit eaque illum quidem non distinctio asperiores! Id ipsa aliquam molestiae quos, minima consequatur velit! Earum, dolorum?
            </p>
            <hr className="p-2"/>

        </div>
            <div>
                <h1 className="mb-10 text-sm text-red-500/90"> 02 - Contact Us</h1>
                <div className="grid grid-cols-3 gap-10 ">
                    <div className="col-span-1 gap-10 flex flex-col">
                        <div>
                            <Image width={20} src={chat} alt='Chat'/>
                            <h1 className={styles.title}>Live Chat</h1>
                            <p>Mon-Fri <br /> 9am-5pm AEST</p>
                        </div>
                        <div>
                            <Image width={20} src={call} alt='call' />
                            <h1 className={styles.title}>Call Us</h1>
                            <p>1800 684 878 <br /> 9am-5pm AEST</p>
                        </div>
                        <div>
                            <Image width={20} src={mail} alt='mail' />
                            <h1 className={styles.title}> Email</h1>
                            <p>Send an Email</p>
                        </div>
                    </div>
                    <div className="col-span-2 ">
                        <form action={callus} className="flex flex-col w-full">
                            
                            {/* <label htmlFor="name"></label> */}
                            <input required  className={styles.inp} type="text" id="name" name="name"  placeholder="Name"/>
                            {/* <label htmlFor="phone"></label> */}
                            <input required  className={styles.inp} type="text" id="phone" pattern="[0-9]{10}" name="phone"  placeholder="Phone Number"/>
                            {/* <label htmlFor="mail"></label> */}
                            <input required  className={styles.inp} type="email" id="mail" name="mail"  placeholder="Email"/>
                            <label htmlFor="date" className="mt-4"> Prefered Date for call back </label>
                            <input required  className={`${styles.inp} `} type="date" id="date" name="date"  placeholder="dd-mm-yyyy"/>
                            {/* <label htmlFor="comment"></label> */}
                            <textarea className="border mt-2" id="comment" name="comment"  placeholder="Comment" rows={5} cols={20}/>      

                            <div className="flex ">
                                <Button className="w-fit " type="submit" >Submit</Button>
                                <Button className="w-fit " type="reset">Reset</Button>
                            </div>    
                            </form>
                        <p className={`${styles.title} p-2`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reiciendis iste provident nobis omnis corporis ullam eos ducimus, quis eius quod blanditiis facere numquam, quidem fugiat perferendis. Atque, iure quisquam.</p>
                        
                        <Button type="button" >Chat with us right here</Button>

                    </div>
                </div>
            </div>
        </div>
    );
}