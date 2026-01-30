import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

function Carousel({ data = [], renderComponent }) {
  const swiperRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      {/* External navigation */}
      <CarouselLeftNavigation swiperRef={swiperRef} />
      <CarouselRightNavigation swiperRef={swiperRef} />

      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={40}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{ padding: "0 20px" }}
      >
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>
            {renderComponent(ele)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
