import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { __getCheckInTimer, __getCheckOutTimer } from "../redux/modules/timer";
import backimg from "../assets/background/homeBack.png";
import FishIventory from "../components/fish/FishIventory";
import crab from "../assets/pixel/crab.png";
import sicissorsCrab from "../assets/pixel/sicissorsCrab.png";
import coral from "../assets/pixel/coral.png";
import brokenCoral from "../assets/pixel/brokenCoral.png";
import ProfileHeader from "../components/profileHeader/ProfileHeader";
import { getCookie } from "../components/social/Cookie";
import LoginSwiper from "../components/Swiper/LoginSwiper";

const Home = () => {
  const token: string = getCookie("token") as string;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //Todo zone
  const check = useAppSelector((state) => state.timer.isStudy);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    if (token === undefined) {
      navigate("/login");
      alert("로그인이 필요한 페이지입니다.");
    }
    document.body.style.overflow = "hidden";
  }, []);

  function onClickCheckIn() {
    dispatch(__getCheckInTimer());
  }

  function onClickCheckOut() {
    dispatch(__getCheckOutTimer());
  }
  return (
    <>
      <Layer>
        <MainBox>
          <ProfileContainer>
            <ProfileHeader />
          </ProfileContainer>
          {check ? (
            <>
              <ButtonTitle>checkOut</ButtonTitle>
              <Triangle />
              <ButtonContainer onClick={onClickCheckOut}>
                <CoralContainer>
                  <BrokenCoral />
                </CoralContainer>
                <CrabContainer>
                  <SicissorsCrab />
                </CrabContainer>
              </ButtonContainer>
            </>
          ) : (
            <>
              <ButtonAnimtaionTitle>checkIn</ButtonAnimtaionTitle>
              <Triangle />
              <ButtonContainer onClick={onClickCheckIn}>
                <CoralContainer>
                  <Coral />
                </CoralContainer>
                <CrabContainer>
                  <Crab />
                </CrabContainer>
              </ButtonContainer>
            </>
          )}
          <InfoContainer>
            {info ? (
              <>
                <Info onClick={() => setInfo(!info)}>?</Info>
                <Slide>
                  <LoginSwiper />
                </Slide>
              </>
            ) : (
              <Info onClick={() => setInfo(!info)}>?</Info>
            )}
          </InfoContainer>
          <FishIventory />
        </MainBox>
      </Layer>
    </>
  );
};

export default Home;

const Layer = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  background: url(${backimg});
  background-size: 100% 100%;
  overflow: hidden;
`;

const MainBox = styled.div`
  height: 90vh;
  position: relative;
  overflow: hidden;
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 12vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  right: 2%;
  bottom: 10%;
  transform: translate(50% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 9999px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  right: 5%;
  bottom: 28%;
  position: absolute;
  border-top: 20px solid black;
  border-bottom: 20px solid transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
`;

const textBounce = keyframes`
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-0.5em);
    }
    40% {  
        transform: translateY(0);
    }
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
`;

const ButtonAnimtaionTitle = styled.span`
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.x4l};
  position: absolute;
  right: 2%;
  bottom: 35%;
  font-weight: bold;
  animation: ${textBounce} 1.5s ease-in-out infinite;
`;

const ButtonTitle = styled.span`
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.x4l};
  position: absolute;
  right: 2%;
  bottom: 35%;
  font-weight: bold;
`;

const CoralContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  right: 5%;
  bottom: 5%;
  display: flex;
`;

const Coral = styled.div`
  width: 90%;
  height: 90%;
  background: url(${coral});
  background-size: 90% 90%;
  background-repeat: no-repeat;
  z-index: 2;
`;

const BrokenCoral = styled.div`
  width: 100%;
  height: 100%;
  background: url(${brokenCoral});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 3;
`;

const CrabContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 30%;
  top: 25%;
  display: flex;
  border-radius: 9999px;
  padding: 10px;
`;

const Crab = styled.div`
  background: url(${crab});
  width: 80%;
  height: 80%;
  background-size: 80% 80%;
  background-repeat: no-repeat;
  z-index: 0;
`;

const SicissorsCrab = styled.div`
  background: url(${sicissorsCrab});
  width: 80%;
  height: 80%;
  background-size: 80% 80%;
  background-repeat: no-repeat;
  z-index: 2;
`;

const InfoContainer = styled.div`
  position: absolute;
  left: 2%;
  top: 2%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  font-size: 4em;
  color: white;
  border-radius: 9999px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const Slide = styled.div`
  position: absolute;
  left: 120%;
  top: 120%;
  z-index: 10;
  width: 50vw;
  color: black;
`;
