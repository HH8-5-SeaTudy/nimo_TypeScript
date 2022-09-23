import { useEffect } from "react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import styled, { keyframes } from "styled-components";
import fish01 from "../assets/fish/fish01.png";
import fish02 from "../assets/fish/fish02.png";
import purpleBorder from "../assets/background/purpleborderpx.png";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { __getUserProfile } from "../redux/modules/userData";
import Fishs from "../components/fish/Fishs";
import { EnumFishs } from "../enum/EnumFishs";
import { fishImages } from "../components/fish/FishImages";

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

      <FishSliderSecondBorder>
        {/* <UnLockContainer></UnLockContainer> */}
        <FishContainer>
          {/* 물고기 자세히 보기 */}
          <FishDetailContainer>
            {/* {fishImages.map((data) => {})} */}
            {/* <Fishs type={EnumFishs.BigFish01} /> */}
          </FishDetailContainer>

          {/* 물고기 리스트 보여주는 곳 */}
          <FishListContainer>
            <Fishs type={EnumFishs.Fish01} />
          </FishListContainer>
        </FishContainer>
      </FishSliderSecondBorder>
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
  width: 60%;
  height: 80%;
  display: flex;
  left: 15%;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 6px solid red;
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
  background: linear-gradient(-65deg, #f3f5f0 50%, #dfe8eb 50%);
`;

const FishFirstBackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const FishDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid green;
`;

const FishListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
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
