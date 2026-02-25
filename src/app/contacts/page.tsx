"use client"


import {   useUserData } from '@/lib/postuserdetails'
import Button from "@/utilities/Button";
import styles from './page.module.scss'
import { useEffect, useState } from "react";
import { CallIcon, CloseIcon, EmailIcon, LiveChatIcon } from "@/svgComponents/Icon";
import { ObiDetail} from '@/types/obiDetails';




export default function Page() {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState<ObiDetail>()
    const { mutateAsync } = useUserData()
    async function handelsubmit(formdata: FormData) {
        const data = await mutateAsync(formdata)

        console.log(data)

        setData(data)
        setOpen(true)

    }

    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
        }, 4000);
    }, [open])

    return (
        <section className="  mx-auto px-4 md:px-10 mt-35">
            <section className="  mx-auto px-5">
                <h1 className="text-4xl font-medium text-[#d4410b] mb-25">Customer Care</h1>
                <h3 className=" text-[#d4410b] text-2xl py-5 ">Have questions or curious about something in particular?</h3>
                <p className="text-[#05788b] text-2xl py-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae possimus quibusdam recusandae deserunt odit eaque illum quidem non distinctio asperiores! Id ipsa aliquam molestiae quos, minima consequatur velit! Earum, dolorum?
                </p>
                <hr className="p-2" />

            </section>
            <section className="  mx-auto px-5">
                <h1 className={styles.heading}>
                    <span className={styles.heading__no}>02</span>
                    <span className={styles.heading__separator}>   </span>
                    <span className={styles.heading__title}> Contacts</span>
                </h1>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10 ">
                    <div className="lg:col-span-1 gap-10 flex lg:flex-col lg:justify-start lg:items-start  items-center justify-between col-span-3 row-start-2 lg:row-start-1 ">
                        <div>
                            <LiveChatIcon className="w-10" />
                            <h1 className={styles.title}>Live Chat</h1>
                            <p>Mon-Fri <br /> 9am-5pm AEST</p>
                        </div>
                        <div>
                            <CallIcon className="h-20 w-10" />
                            <h1 className={styles.title}>Call Us</h1>
                            <p>1800 684 878 <br /> 9am-5pm AEST</p>
                        </div>
                        <div>
                            <EmailIcon className="w-7" />
                            <h1 className={styles.title}> Email</h1>
                            <p>Send an Email</p>
                        </div>
                    </div>
                    <div className="col-span-2 ">
                        <form action={handelsubmit} className="flex flex-col gap-10  w-full">

                            <div className="flex flex-col  justify-start">
                                {/* <label htmlFor="name">Name:</label> */}
                                <input required className={styles.input} type="text" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="flex flex-col  justify-start">
                                {/* <label htmlFor="phone">Phone Number</label> */}
                                <input required className={styles.input} type="text" id="phone" pattern="[0-9]{10}" name="phone" placeholder="Phone Number" />
                            </div>
                            <div className="flex flex-col  justify-start">
                                {/* <label htmlFor="mail">Email</label> */}
                                <input required className={styles.input} type="email" id="mail" name="mail" placeholder="Email" />
                            </div>
                            <div className="flex flex-col  justify-start">
                                <label htmlFor="date" className="mt-4"> Prefered Date for call back </label>
                                <input required className={`${styles.input} `} type="date" id="date" name="date" placeholder="dd-mm-yyyy" />
                            </div>
                            <div className="flex flex-col  justify-start">
                                {/* <label htmlFor="comment">Comment</label> */}
                                <textarea className={`${styles.input} border-2 p-2`} id="comment" name="comment" placeholder="Comment" rows={10} cols={20} />
                            </div>

                            <div className="flex ">
                                <Button className="w-fit " type="submit" >Submit</Button>
                                <Button className="w-fit " type="reset">Reset</Button>
                            </div>
                        </form>

                        <p className={`${styles.title} p-2`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reiciendis iste provident nobis omnis corporis ullam eos ducimus, quis eius quod blanditiis facere numquam, quidem fugiat perferendis. Atque, iure quisquam.</p>

                        <Button type="button" >Chat with us right here</Button>


                        {open && data &&
                            <div className="fixed  inset-0 drop-shadow-2xl p-3  rounded-2xl">
                                <div className=" flex flex-col mx-auto w-fit justify-center h-screen  ">
                                    <div className="shadow-xl bg-white p-15 rounded-2xl relative" >
                                        <p className="font-bold text-xl text-gray-900 p-2 ">Name: {data.name}</p>
                                        <p className="font-bold text-xl text-gray-900 p-2 ">Phone number: {data.phone}</p>
                                        <p className="font-bold text-xl text-gray-900 p-2 ">Email: {data.email}</p>
                                        <p className="font-bold text-xl text-gray-900 p-2 ">Date: {data.date}</p>
                                        <p className="font-bold text-xl text-gray-900 p-2 ">Comment: {data.comment}</p>
                                        <button title='closebtn' className='absolute top-4 right-4 cursor-pointer' onClick={() => setOpen(false)}><CloseIcon/></button>
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div>
            </section>
        </section>
    );
}