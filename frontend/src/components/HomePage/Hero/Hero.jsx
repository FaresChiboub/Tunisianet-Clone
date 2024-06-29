import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "./Hero.css";

import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  gridImg1,
  gridImg2,
  gridImg3,
  gridImg4,
  gridImg5,
  gridImg6,
  gridImg7,
  gridImg8,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
} from "./slide";
export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Navigation]}
        className="mySwiper"
      >
        {[
          slide1,
          slide2,
          slide3,
          slide4,
          slide5,
          slide6,
          slide7,
          slide8,
          slide9,
        ].map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <section className="grid--images">
        {[
          gridImg1,
          gridImg2,
          gridImg3,
          gridImg4,
          gridImg5,
          gridImg6,
          gridImg7,
          gridImg8,
        ].map((image, index) => (
          <img
            key={`grid-${index}`}
            src={image}
            alt={`Grid Image ${index + 1}`}
          />
        ))}
      </section>
      <section className="brand--logo">
        {[brand1, brand2, brand3, brand4, brand5, brand6, brand7].map(
          (brand, index) => (
            <img
              key={`brand-${index}`}
              src={brand}
              alt={`Brand ${index + 1}`}
            />
          )
        )}
      </section>
    </>
  );
}
