import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

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
          <Img
            src="https://springblog.s3.ap-northeast-2.amazonaws.com/seatudy-gif/check-in%26out.gif"
            alt="슬라이드1"
          />
          <div>
            <span>- 공부시간 기록(총 공부시간 & 하루 공부시간)</span>

            <span>- 매일 오전 5시 리셋되어 새로운 하루 시작</span>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Img
            src="https://springblog.s3.ap-northeast-2.amazonaws.com/seatudy-gif/todolist.gif"
            alt="슬라이드2"
          />
          <div>
            <span>- 카테고리별로 TodoList 관리(추가/조회/수정/삭제)</span>
            <span>- 달력에서 TodoList 완료율 확인 가능</span>

            <span>- 메인 페이지에서도 TodoList 완료 체크 및 확인가능</span>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Img
            src="https://springblog.s3.ap-northeast-2.amazonaws.com/seatudy-gif/fish-book.gif"
            alt="슬라이드3"
          />
          <div>
            <span>
              - 공부량을 기반으로 unlock된 물고기를 메인페이지에 꾸밀 수 있음
            </span>
            <span>
              - 게임적 요소: 더 많은 물고기를 unlock하여 메인페이지를 꾸밀 수
              있도록 동기부여
            </span>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Img
            src="https://springblog.s3.ap-northeast-2.amazonaws.com/seatudy-gif/rank.gif"
            alt="슬라이드4"
          />
          <div>
            <span>- 전체 회원의 랭킹을 일일별/주간별 확인가능</span>
            <span>
              - 내 포인트 확인가능 → 포인트는 총 공부량의 시간 = 1 point / 1
              hour
            </span>

            <span>
              -한 주동안 요일별 내 공부량, 주차별 내 공부량 그래프로 확인가능
            </span>
            <span>- 1년동안 공부량 확인가능(= Github 잔디심기)</span>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Img
            src="https://springblog.s3.ap-northeast-2.amazonaws.com/seatudy-gif/chatroom.gif"
            alt="슬라이드5"
          />
          <div>
            <span>- 개의 고정된 채팅방</span>
            <span>- 상대방이 입장/퇴장시 확인 가능</span>

            <span>- 실시간으로 채팅 참여자 확인 가능</span>
            <span>- 각 채팅방에서 유저들끼리의 랭킹 확인가능</span>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Img
            src="https://springblog.s3.ap-northeast-2.amazonaws.com/seatudy-gif/dday.gif"
            alt="슬라이드6"
          />
          <div>
            <span> - D-day 관리(추가/조회/수정/삭제)</span>
            <span>- 가장 가까운 D-day는 메인 상단바에서 확인가능</span>
            <span>- 달력에 빨간색으로 표시하여 D-day 확인가능</span>
          </div>
        </StyledSwiperSlide>
      </StyledSwiper>
    </div>
  );
};

export default LoginSwiper;

const StyledSwiper = styled(Swiper)`
  width: 80%;
  margin-top: -4%;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  div {
    padding: 10px 0;
    margin-bottom: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
const Img = styled.img`
  width: 100%;
`;
