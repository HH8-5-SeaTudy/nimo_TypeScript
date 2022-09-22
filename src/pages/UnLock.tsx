import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import styled, { keyframes } from "styled-components";
import fishbowl from "../assets/background/fishbowl.png";
import fish01 from "../assets/fish/fish01.png";
import fish02 from "../assets/fish/fish02.png";
import purpleBorder from "../assets/background/purpleborderpx.png";
import Grid from "../elements/Grid";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { __getUserProfile } from "../redux/modules/userData";
import theme from "../style/Theme";
import Fishs from "../components/fish/Fishs";
import { EnumFishs } from "../enum/EnumFishs";

SwiperCore.use([Navigation, Pagination]);

const UnLock = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userData.userData);

  useEffect(() => {
    dispatch(__getUserProfile());
  }, []);
  return (
    <UnClockContainer>
      <FirstBorderContainer>
        <FishSliderBorder>
          <BorderTitleContainer>
            <BorderTitleWrapper>
              <span>S</span>
              <span>e</span>
              <span>a</span>
              <span>T</span>
              <span>u</span>
              <span>d</span>
              <span>y</span>
            </BorderTitleWrapper>
          </BorderTitleContainer>
        </FishSliderBorder>
      </FirstBorderContainer>
      <Swiper
        style={{
          width: "50%",
          height: "70%",
          marginLeft: "35%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <FishSliderSecondBorder>
            <UnLockContainer></UnLockContainer>
            <FishContainer>
              <FishCardWrapper>
                <Fishs type={EnumFishs.SunFish} />
                {/* <Grid background={fish01}></Grid> */}
              </FishCardWrapper>
              <FishInfoContainer>
                <TitleContainer>
                  <InfoTitle>이름:나모</InfoTitle>
                </TitleContainer>

                <TitleContainer>
                  <InfoTitle>특징:</InfoTitle>
                  <InfoTitle>귀여움</InfoTitle>
                </TitleContainer>

                <TitleContainer>
                  <InfoTitle>나이:3</InfoTitle>
                </TitleContainer>
              </FishInfoContainer>
            </FishContainer>
          </FishSliderSecondBorder>
        </SwiperSlide>
        <SwiperSlide>
          <FishSliderSecondBorder>
            <UnLockContainer></UnLockContainer>
            <FishContainer>
              <FishCardWrapper>
                <Fish2 />
              </FishCardWrapper>
              <FishInfoContainer>
                <TitleContainer>
                  <InfoTitle>이름:복이</InfoTitle>
                </TitleContainer>

                <TitleContainer>
                  <InfoTitle>특징:독이 있음</InfoTitle>
                </TitleContainer>

                <TitleContainer>
                  <InfoTitle>나이:5</InfoTitle>
                </TitleContainer>
              </FishInfoContainer>
            </FishContainer>
          </FishSliderSecondBorder>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </UnClockContainer>
  );
};

const animeTextup = keyframes`
   0% {
    transform: translate(-30%, 0);
  }
  50% {
    text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
  }
  100% {
    transform: translate(30%, 0);
  }
`;

const UnClockContainer = styled.div`
  width: 100%;
  /* height: 100px; */
  border: 12px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FirstBorderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: aliceblue;
`;

const FishSliderBorder = styled.div`
  border: 8px solid black;
  width: 38%;
  height: 100%;
  position: absolute;
  left: 20%;
  border-radius: 40px;
  background-color: #6161e0;
`;

const BorderTitleContainer = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BorderTitleWrapper = styled.div`
  transform: rotate(-90deg);
  border: 2px solid blue;
  span {
    font-size: 5em;
    letter-spacing: 20px;
    color: #6161e0;
    animation: ${animeTextup} 1.5s alternate;
    &:nth-child(1) {
      animation-delay: 0.5s;
    }
    &:nth-child(2) {
      animation-delay: 0.6s;
    }
    &:nth-child(3) {
      animation-delay: 0.7s;
    }
    &:nth-child(4) {
      animation-delay: 0.8s;
    }
    &:nth-child(5) {
      animation-delay: 0.9s;
    }
    &:nth-child(6) {
      animation-delay: 1s;
    }
    &:nth-child(7) {
      animation-delay: 1.1s;
    }
  }
`;

const FishSliderSecondBorder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${purpleBorder}) no-repeat;
  background-size: 100% 100%;
  padding: 5%;
  position: relative;
  border: 1px solid red;
`;

const UnLockContainer = styled.div`
  width: 90%;
  height: 85%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
`;

const FishContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const FishCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  /* position: absolute; */
  background: url(${fishbowl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  ${({ theme }) => theme.common.flexCenter};
`;

const Fish = styled.div`
  width: 50%;
  height: 50%;
  background: url(${fish01});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
`;

const Fish2 = styled.div`
  width: 50%;
  height: 50%;
  background: url(${fish02});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
`;

const FishInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  ${({ theme }) => theme.common.flexCenterColumn};
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export default UnLock;
