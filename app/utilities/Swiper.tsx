"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';
type prodprop = {
    images: string[]
}

export default function Page({ images }: prodprop) {
    return (
        <Swiper
            centeredSlides 
            pagination={{clickable:true}}
            autoplay={{delay:3000,disableOnInteraction:false}}
        >
            
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={image}
                        alt={image}
                        width={400}
                        height={400}
                    />
                </SwiperSlide>
            ))}

        </Swiper>
    );
}