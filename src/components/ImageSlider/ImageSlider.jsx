"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// images
import canada from "../../../public/canada.jpg";
import australia from "../../../public/sydeny.jpg";
import usa from "../../../public/usa.jpg";
import london from "../../../public/london.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ImageSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ImageSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 10000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className=" rounded-2xl h-[30%] md:h-[50%] xl:h-[90%] w-auto">
          <Image className="h-auto max-w-full rounded-2xl" src={canada} />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl h-[30%] md:h-[50%] xl:h-[90%] w-auto">
          <Image className="h-auto max-w-full  rounded-2xl" src={australia} />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl h-[30%] md:h-[50%] xl:h-[90%] w-auto">
          <Image className="h-auto max-w-full  rounded-2xl" src={usa} />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl h-[30%] md:h-[50%] xl:h-[90%] w-auto">
          <Image className="h-auto max-w-full  rounded-2xl" src={london} />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl h-[30%] md:h-[50%] xl:h-[90%] w-auto">
          <Image className="h-auto max-w-full  rounded-2xl" src={canada} />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl h-[30%] md:h-[50%] xl:h-[90%] w-auto">
          <Image className="h-auto max-w-full  rounded-2xl" src={australia} />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl h-[30%] md:h-[50%] xl:h-[90%] w-auto">
          <Image className="h-auto max-w-full  rounded-2xl" src={usa} />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl h-[30%] md:h-[50%] xl:h-[90%] w-auto">
          <Image className="h-auto max-w-full  rounded-2xl" src={london} />
        </SwiperSlide>
        <div className="autoplay-progress " slot="container-end">
          <svg className="hidden" viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span className="hidden" ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
