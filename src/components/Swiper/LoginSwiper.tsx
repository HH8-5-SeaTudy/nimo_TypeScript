import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from 'styled-components';

SwiperCore.use([Navigation, Pagination]);

const LoginSwiper = () => {
  return (

    <div>
      <StyledSwiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 100 }}
        pagination={{ clickable: true }}
      >
        <StyledSwiperSlide>
          <Img src="https://springblog.s3.ap-northeast-2.amazonaws.com/fish-deco.gif" alt="슬라이드1" />
        </StyledSwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </StyledSwiper>
    </div>

  );
};

export default LoginSwiper;

const StyledSwiper = styled(Swiper)`
  width: 90%;
`
const StyledSwiperSlide = styled(SwiperSlide)`
 border: solid red 5px;
 display:flex;
`
const Img = styled.img`
  width:100%;
`