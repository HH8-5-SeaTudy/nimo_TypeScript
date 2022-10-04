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
        autoplay={{ delay: 1 }}
        pagination={{ clickable: true }}
      >
        <StyledSwiperSlide>
          <Img src="https://springblog.s3.ap-northeast-2.amazonaws.com/fish-deco.gif" alt="슬라이드1" />
          <div>Test</div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Img src="https://springblog.s3.ap-northeast-2.amazonaws.com/fish-deco.gif" alt="슬라이드1" />
          <div>Test</div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Img src="https://springblog.s3.ap-northeast-2.amazonaws.com/fish-deco.gif" alt="슬라이드1" />
          <div>Test</div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Img src="https://springblog.s3.ap-northeast-2.amazonaws.com/fish-deco.gif" alt="슬라이드1" />
          <div>Test</div>
        </StyledSwiperSlide>
      </StyledSwiper>
    </div>
  );
};

export default LoginSwiper;

const StyledSwiper = styled(Swiper)`
  width: 80%;
`
const StyledSwiperSlide = styled(SwiperSlide)`
  border: solid red 5px;
  display:flex;
  flex-direction:column;
  div{
    height: 70px;
  }
`
const Img = styled.img`
  width:100%;
`