import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { __getDateTodo } from "../redux/modules/dateTodos";
import {
  __getCheckInTimer,
  __getCheckOutTimer,
  __getUserinquire,
} from "../redux/modules/timer";
import backimg from "../assets/background/homeBack.png";
import { __getUserProfile } from "../redux/modules/userData";
import CalendarVer2 from "../components/calendar/CalendarVer2";
import FishIventory from "../components/fish/FishIventory";
import crab from "../assets/pixel/crab.png";
import sicissorsCrab from "../assets/pixel/sicissorsCrab.png";
import coral from "../assets/pixel/coral.png";
import brokenCoral from "../assets/pixel/brokenCoral.png";
import Main from "./Main";
import Server from '../components/serverButton/Server';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //Todo zone
  const date = useAppSelector((state) => state.updateDate.date);
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);
  const check = useAppSelector((state) => state.timer.isStudy);

  useEffect(() => {
    dispatch(__getUserProfile());
    dispatch(__getDateTodo(moment(date).format("YYYY-MM-DD")));
  }, [date]);

  //SideBar hidden
  const [modalShow, setModlaShow] = useState(false);

  //Inventory
  const userNickName = useAppSelector(
    (state) => state.userData.userProfile.nickname
  );
  const userImage = useAppSelector(
    (state) => state.userData.userProfile.defaultFish
  );
  const userTime = useAppSelector((state) => state.userData.userProfile.point);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onClickCheckIn = () => {
    dispatch(__getCheckInTimer());
  };

  const onClickCheckOut = () => {
    dispatch(__getCheckOutTimer());
  };

  return (
    <Layer>
      {modalShow && <CalendarVer2 />}
      <MainBox>
        <Server/>
        <ProfileContainer>
          <ProfileWrapper>
            <ImageContainer>
              <ProfileImage src={userImage} />
            </ImageContainer>
            <TitleContainer>
              <TitleWrapper>
                <ProfileTitle>닉네임:</ProfileTitle>
                <ProfileNickname>{userNickName}</ProfileNickname>
              </TitleWrapper>
              <TitleWrapper>
                <ProfileTitle>총 공부시간:</ProfileTitle>
                <ProfileTime>{userTime}</ProfileTime>
              </TitleWrapper>
            </TitleContainer>
          </ProfileWrapper>
        </ProfileContainer>
        <TodoContainer>
          <TodoListWrapper>
            <TodoTitle>오늘 할 일</TodoTitle>

            {dateTodos &&
              dateTodos.map((list) =>
                list.todoList?.map((item, index) => (
                  <TodoListInnerContainer>
                    <Todo>
                      <TodoSpan>No {index + 1}. </TodoSpan>
                      <TodoSpan>{item.content}</TodoSpan>
                    </Todo>
                  </TodoListInnerContainer>
                ))
              )}
          </TodoListWrapper>
        </TodoContainer>

        {check ? (
          <>
            <ButtonTitle>checkOut</ButtonTitle>
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
            <ButtonTitle>checkIn</ButtonTitle>
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

        <FishIventory />
      </MainBox>
    </Layer>
  );
};

export default Home;

const ChatButtonContainer = styled.div`
 border: solid red 1px;
  width: 10vw;
  height: 10vh;
`;

const Layer = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  background: url(${backimg});
  background-size: 100% 100%;
  overflow: hidden;
`;

const MainBox = styled.div`
  border: solid red 1px;
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

const ProfileWrapper = styled.div`
  width: 25vw;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  margin: 10px 0;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 9999px;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 70px;
  border: 2px solid white;
  padding: 10px;
  border-radius: 9999px;
`;

const ProfileTitle = styled.span`
  font-size: 1.4em;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

const ProfileNickname = styled.span`
  font-size: 1.4em;
  color: ${({ theme }) => theme.colors.white};
`;

const ProfileTime = styled.span`
  font-size: 1.4em;
  color: ${({ theme }) => theme.colors.white};
`;

const TodoContainer = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TodoListWrapper = styled.div`
  width: 25vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow-y: scroll;
  border-radius: 10px;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #0096ff;
    height: 5px;
  }
`;

const TodoTitle = styled.span`
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.white};
`;

const TodoListInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Todo = styled.div`
  padding: 0 10px;
  display: flex;
`;

const TodoSpan = styled.span`
  font-size: 1.4em;
  color: ${({ theme }) => theme.colors.white};
  margin: 5px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
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

const ButtonTitle = styled.span`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.x4l};
  position: absolute;
  right: 2%;
  bottom: 30%;
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
`;

const BrokenCoral = styled.div`
  width: 100%;
  height: 100%;
  background: url(${brokenCoral});
  background-size: 100% 100%;
  background-repeat: no-repeat;
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
  z-index: 3;
`;

const SicissorsCrab = styled.div`
  background: url(${sicissorsCrab});
  width: 80%;
  height: 80%;
  background-size: 80% 80%;
  background-repeat: no-repeat;
  z-index: 3;
`;
