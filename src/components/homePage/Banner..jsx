"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from 'next/image'; 

const bannerImages = [
  { src: "/assets/images/banner/banner2.png", alt: "Banner 1" },
  { src: "/assets/images/banner/banner1.png", alt: "Banner 2" },
  { src: "/assets/images/banner/banner3.png", alt: "Banner 3" },
];

const Banner = () => {
  return (
    <div className="md:pt-14 pb-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerImages.map((banner, index) => (
          <SwiperSlide key={index}>
            <Image
              src={banner.src}
              alt={banner.alt}
              layout="responsive"
              width={1920} 
              height={800} 
              objectFit="cover" 
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
