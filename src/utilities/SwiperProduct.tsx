"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swipe/css/navigation'
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules'
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper as Swipetype } from 'swiper';
import styles from './Swiper.module.scss'
import { style } from 'framer-motion/client';
import { useMediaQuery } from "react-responsive";

type prodprop = {
    images: string[]
}

export default function SwiperProduct({ images }: prodprop) {
    const [thumb, setThumb] = useState<Swipetype | null>(null)
    const [hover, isHover] = useState(false)
    const [slideindex, setSlideindex] = useState(0)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const isDesktop = useMediaQuery({ minWidth: 768 })
    const frame =useRef<null | number>(null)

    const handleMouseMovement = (e: React.MouseEvent<HTMLDivElement>) => {
        if(frame.current) cancelAnimationFrame(frame.current)

        
        
        const { left, top, width, height } = e.currentTarget?.getBoundingClientRect()
        console.log(left, top, width, height, e.clientX, e.clientY)
        frame.current = requestAnimationFrame(() => {
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        console.log(x, y)
        setPosition({ x, y })
    })
    }
    return (
        <div className={styles.container}>
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumb}
                direction={isDesktop ? 'vertical' : 'horizontal'}
                slidesPerView={4}
                watchSlidesProgress
                spaceBetween={5}
                className={`${styles.thumbSwiper}`}

            >
                {images?.map((image, index) => (

                    <SwiperSlide key={index} >
                        <Image
                            src={image}
                            alt={`thumb-${index}`}
                            width={75}
                            height={75}
                            className={styles.thumbSwiper__Image}
                        />
                    </SwiperSlide>

                ))}

            </Swiper>
            <Swiper

                modules={[Navigation, Pagination, Autoplay, Thumbs]}
                // className=''
                // centeredSlides 
                navigation
                onSlideChange={(swiper) => setSlideindex(swiper.realIndex)}
                thumbs={{ swiper: thumb && !thumb.destroyed ? thumb : null }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // autoplay={{delay:3000,disableOnInteraction:false}}
                loop={false}
                speed={600}
                className={styles.mainSwiper}>

                {images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={styles.mainSwiper__Imagewrapper}
                            onMouseEnter={() => isHover(true)}
                            onMouseLeave={() => isHover(false)}
                            // ref={frame}
                            onMouseMove={handleMouseMovement}
                        >
                            <Image
                                src={image}
                                alt={`img-${index}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {isDesktop && hover &&
                <div
                    // className='   z-50 border absolute  bg-no-repeat inset-0 bg-cover'/
                    className={styles.hoverWrapper}
                    style={{
                        backgroundImage: `url(${images[slideindex]})`,
                        backgroundPosition: `${position.x}% ${position.y}%`,
                        backgroundSize: "200%"
                    }}
                >
                </div>
            }
        </div >
    );
}

