"use client"
import styles from './page.module.scss'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import LinkCompo from '@/utilities/LinkCompo';
import Image from 'next/image';
import Button from '@/utilities/Button';
import { heroslide } from '@/data/heroslide';
import Link from 'next/link';
import { ComfyIcon, PayIcon, StarIcon, WaterproofIcon } from '@/svgComponents/Icon';
export default function Page() {
    return (
        <>


            <div className='mt-30'>

                <Swiper
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}

                    // navigation={{
                    //     nextEl: ".hero-next",
                    //     prevEl: ".hero-prev",
                    // }}

                    // onSwiper={(swiper)=>{
                    //     setTimeout(() => {
                    //       swiper.params.navigation={
                    //         prevEl:".hero-prev",
                    //         nextEl:".hero-next"
                    //       }
                    //       swiper.navigation.init()
                    //       swiper.navigation.update()
                    //     });
                    // }}


                    pagination={{
                        clickable: true,
                        el: ".heropagination",
                        bulletClass: "heropagination__bullet",
                        bulletActiveClass: "heropagination__bullet--active",
                    }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    // watchSlidesProgress
                    loop={true} //infinte
                    speed={3500}//smooth
                    keyboard
                >
                    <SwiperSlide>

                        <section className={`${styles.hero} relative w-full `} >

                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className='absolute h-screen w-full  -z-50 object-cover object-top bg-black/20 '
                                poster='/Images/HeroImage.webp'
                            >
                                <source src="/videos/HeroVideoOG.mp4" type="video/mp4" />

                            </video>

                            <div className="   mx-auto lg:px-10 px-4 flex flex-col justify-center  h-screen translate-y-15 ">

                                <h1 className={`${styles.hero__title} py-5 `}>Dry-Stylin, never felt so good.</h1>


                                {/* <div className='  flex flex-col lg:translate-y-20 lg:translate-x-80  text-left py-2'> */}
                                <div className='  flex flex-col lg:items-center lg:-translate-x-40  text-left py-2'>
                                    <p className={`${styles.hero__para} lg:max-w-[20%] max-w-[60%] `}>Discover why people of all ages are feeing  their groove</p>
                                    <LinkCompo href='/products' className='p-2' >Explore Underwear</LinkCompo>
                                </div>



                            </div>
                        </section>

                    </SwiperSlide>
                    {heroslide.map((data, id) => (
                        <SwiperSlide key={id}>
                            <section className={`${styles.hero}  `} style={{ backgroundImage: `url(${data.src})` }} >
                                <div className="   bg-black/20 mx-auto lg:px-10 px-4 flex flex-col justify-center  h-screen   ">

                                    <h1 className={`${styles.hero__title} py-5 translate-y-15`}>{data.title}</h1>

                                    <div className='flex flex-col lg:items-center lg:-translate-x-40  text-left py-2 translate-y-15'>
                                        <p className={`${styles.hero__para} lg:max-w-[20%] max-w-[60%]  `}>{data.description}</p>
                                        <LinkCompo href='/products'>{data.button}</LinkCompo>
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                    <div className={`${styles.heropagination} heropagination justify-start  lg:-translate-x-25 -translate-y-22.5 lg:justify-end`}></div>
                    <div className={` ${styles.context} justify-start text-white lg:-translate-x-22 -translate-y-22.5 lg:justify-end`}>
                        <Link className='text-shadow-2xs p-3' href='' > Underwear</Link>
                        <Link className='text-shadow-2xs p-3' href=''> Resuable <br /> Bed pads</Link>
                        <Link className='text-shadow-2xs p-3' href=''> Bedding</Link>
                        <Link className='text-shadow-2xs p-3' href=''> Toilet Training</Link>
                        <Link className='text-shadow-2xs p-3' href=''> NDIS</Link>
                    </div>
                    {/* <div className="hero-prev">←</div>
                    <div className="hero-next">→</div> */}

                </Swiper>
            </div>





            <section className='  mx-auto lg:px-10 px-4'>
                <hr />
                <h1 className={styles.heading}>
                    <span className={styles.heading__no}>00</span>
                    <span className={styles.heading__separator}>   </span>
                    <span className={styles.heading__title}> shop your way</span>
                </h1>
                <div className={`${styles.offer} flex flex-col lg:flex-row`}>
                    <div className={styles.offer__card} >
                        <StarIcon className={styles.offer__star} />
                        <Image className={styles.offer__image} fill src={"/Images/Girls.webp"} alt='bed'

                        />
                        <h1 className={styles.offer__title}>Save #0 % off Bundles</h1>
                    </div>
                    <div className={styles.offer__card} >
                        <StarIcon className={styles.offer__star} />
                        <Image className={styles.offer__image} fill src={"/Images/Bed-og.webp"} alt='' />
                        <h1 className={styles.offer__title}> Continence Undewear</h1>
                    </div>
                    <div className={styles.offer__card} >
                        <StarIcon className={styles.offer__star} />
                        <Image className={styles.offer__image} fill src={"/Images/WraterProof-Bed.webp"} alt='' />
                        <h1 className={styles.offer__title}> Mobility Sheet</h1>
                    </div>
                    <div className={styles.offer__card} >
                        <StarIcon className={styles.offer__star} />
                        <Image className={styles.offer__image} fill src={"/Images/Potty.webp"} alt='' />
                        <h1 className={styles.offer__title}>Kids Toilet Tranining</h1>
                    </div>

                </div>
                <div className="grid grid-cols-4 mt-30">
                    <div className='col-span-3'>
                        <div className='flex items-center gap-3'>
                            <div className="flex gap-2 items-center">
                                <WaterproofIcon/>
                                <p>100% Waterproof</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <ComfyIcon/>
                                <p>Comfy Guarantee</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <PayIcon/>
                                <p>Pay Later</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <p className='text-3xl text-blue-500 py-10'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia libero asperiores provident dignissimos obcaecati, eum vitae. Optio molestias dolorum perspiciatis!
                            </p>
                        </div>
                        <div className='flex py-10 gap-3'>
                            <Image width={80} className='aspect-2/1' height={5} src={"/Images/Paypal.png"} alt='' />
                            <Image width={80} className='aspect-2/1' height={5} src={"/Images/indis.png"} alt='' />
                            <Image width={80} className='aspect-2/1' height={5} src={"/Images/master.png"} alt='' />
                            <Image width={80} className='aspect-2/1' height={5} src={"/Images/visa.png"} alt='' />
                            <Image width={80} className='aspect-2/1' height={5} src={"/Images/zpay.png"} alt='' />
                            <Image width={80} className='aspect-2/1' height={5} src={"/Images/afterpay.png"} alt='' />
                        </div>
                    </div>
                    <div className='col-span-1 flex items-end flex-col'>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <Button>Find out how</Button>
                    </div>
                </div>
                <hr />

            </section >

            {/*
            <section className='  mx-auto lg:px-10 px-4'>
                <h1 className={styles.heading}>
                    <span className={styles.heading__no}>02</span>
                    <span className={styles.heading__separator}>   </span>
                    <span className={styles.heading__title}> Our water proof products</span>
                </h1>
                {<div>
                    <div>
                        <Image src={""} alt='Big thumbnail' />
                    </div>
                    <div>
                        <Image src={""} alt='logo' />
                        <h1>|</h1>
                        <Swiper>                6</Swiper>
                        <p></p>
                        <Button></Button>
                    </div>
                </div>}
                <p>AS SEEN IN</p>

            </section>
            <section className='  mx-auto lg:px-10 px-4'>
                <hr />
                <h1 className={styles.heading}>
                    <span className={styles.heading__no}>03</span>
                    <span className={styles.heading__separator}>   </span>
                    <span className={styles.heading__title}>Customer Reviews</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, esse.</p>
                <Swiper>3*4</Swiper>
            </section>
            <section className='  mx-auto lg:px-10 px-4'>
                <hr />
                <h1 className={styles.heading}>
                    <span className={styles.heading__no}>04</span>
                    <span className={styles.heading__separator}>   </span>
                    <span className={styles.heading__title}> Sustainability</span>
                </h1>
                <div>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam laboriosam iste, doloribus magnam sunt deserunt facere illum. Saepe dolore dolores culpa repellat aliquid voluptatum animi possimus reiciendis impedit quod aut architecto, debitis magnam odio vel, dignissimos asperiores temporibus fugit laudantium, ut reprehenderit.<br /> Eius culpa itaque ab omnis animi ipsum dolorum, corrupti officiis numquam nemo natus.<br />  Amet repellat, possimus pariatur sapiente, commodi quas sit, consequatur tempore corporis debitis animi. Suscipit ipsam quas iste! Laborum illum doloremque at molestiae fuga voluptas, ducimus veniam rem voluptatem laudantium cum aut perferendis eaque quaerat repellendus ipsum deleniti voluptates. Beatae reiciendis ratione quod nostrum quam.</p>
                </div>
                <div>
                    <Swiper>image*2</Swiper>
                </div>
            </section>
            <section className='  mx-auto lg:px-10 px-4'>
                <h1 className={styles.heading}>
                    <span className={styles.heading__no}>05</span>
                    <span className={styles.heading__separator}>   </span>
                    <span className={styles.heading__title}> Blog-stories</span>
                </h1>
                <Swiper></Swiper>
            </section>
            <section className='  mx-auto lg:px-10 px-4'>
                <hr />
                <h1 className={styles.heading}>
                    <span className={styles.heading__no}>06</span>
                    <span className={styles.heading__separator}>   </span>
                    <span className={styles.heading__title}> Artist collabration</span>
                </h1>
                <div>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere earum, consequatur itaque, neque dicta magnam mollitia eligendi dolorum fuga cumque totam corporis eum cupiditate. Molestias sed, adipisci deleniti eos vero ab tenetur. <br /> Maiores aliquam ea cum obcaecati ullam omnis nulla facere! Nihil exercitationem consequuntur dolorum quas fugiat totam necessitatibus illum.</p>
                    <Button>Explore </Button>
                </div>
            </section>
            <section className='  mx-auto lg:px-10 px-4'>
                <hr />
                <h1 className={styles.heading}>
                    <span className={styles.heading__no}>07</span>
                    <span className={styles.heading__separator}>   </span>
                    <span className={styles.heading__title}> Stocklist</span>
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, aspernatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, in.</p>
                <div>
                    <hr />
                    <Image src={""} alt='' />
                    <hr />
                    <Image src={""} alt='' />
                    <hr />
                    <Image src={""} alt='' />
                    <hr />
                </div>
            </section>
            <section className='  mx-auto lg:px-10 px-4'>
                <h1 className={styles.heading}>
                    <span className={styles.heading__no}>08</span>
                    <span className={styles.heading__separator}>   </span>
                    <span className={styles.heading__title}> FAQ&apos;s general</span>
                </h1>
                {<div>
                    <h1></h1>
                    <h1></h1>
                    <p></p>
                </div>}
            </section> */}


        </>
    );
}