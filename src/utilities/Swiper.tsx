"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swipe/css/navigation'
import {Navigation,Pagination,Autoplay} from 'swiper/modules'
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
type prodprop = {
    images: string[]
}

export default function Page({ images }: prodprop) {
    return (
        <Swiper
                    
            modules={[Navigation,Pagination,Autoplay]}
            // centeredSlides 
            navigation
            slidesPerView={1}
            pagination={{clickable:true}}
            // autoplay={{delay:3000,disableOnInteraction:false}}
            loop={true}
            speed={600}

            
        >
            
            {images.map((image, index) => (
                <SwiperSlide 
                key={index}

                >
                    <div className="relative -z-10 aspect-square">
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
    );
}