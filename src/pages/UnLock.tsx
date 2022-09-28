import React, { Fragment, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import {
  __editUserFishProfile,
  __editUserProfile,
  __getUserProfile,
} from "../redux/modules/userData";
import fishImages from "../components/fish/FishImages";
import Grid from "../elements/Grid";
import { __getFishList } from "../redux/modules/fishList";
import Input from "../elements/Input";

const UnLock = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userData.userProfile);
  const fishData = useAppSelector((state) => state.fishList.fishInfo);
  const bannerImage = fishImages.map((data) => data.image);
  const fishImage = useAppSelector(
    (state) => state.fishList.fishInfo.fishImageUrl
  );
  const [nickname, setNickname] = useState("");
  const [editNickname, setEditNickname] = useState(false);
  const [editFishName, setEditFishName] = useState(false);
  const [lock, setLock] = useState(false);

  // const onClickLock = () => {
  //   for (let i = 0; i < fishImages.length; i++) {
  //     if (userPoint >= fishPoint[i]) {
  //       setLock(true);
  //     }
  //   }
  // };

  const onClickEditNickname = () => {
    if (nickname.length > 7) {
      alert("닉네임은 최대 7글자 입니다");

      return;
    } else if (nickname.trim() === " ") {
      alert("빈값 없이 입력해주세요");
    }
    setEditNickname(!editNickname);
    dispatch(__editUserProfile(nickname));
  };

  const onClickEditFishName = () => {
    setEditFishName(!editFishName);
  };

  const onChangeNickname = (e: any) => {
    setNickname(e.target.value);
  };

  // const onClickImage = (e: any) => {
  //   dispatch(__getFishList(data.)));
  // };

  useEffect(() => {
    const fishPoint = fishImages.map((data) => data.point);
    for (let i = 0; i < fishImages.length; i++) {
      if (userData.point >= fishPoint[i]) {
        setLock(true);
      }
    }
  }, []);

  useEffect(() => {
    dispatch(__getUserProfile());
  }, []);
  return (
    <UnClockContainer>
      <FirstBorderContainer>
        <UserInfoContainer>
          <Grid
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {editFishName ? (
              <>
                <span>물고기를 선택해주세요</span>
              </>
            ) : (
              <UserProfileImage src={userData.defaultFish} alt="" />
            )}
          </Grid>
          <button onClick={onClickEditFishName}>
            {editFishName ? "완료" : "수정"}
          </button>
          <UserWrapper>
            <UserTitle>닉네임:</UserTitle>
            <Grid
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <>
                {editNickname ? (
                  <Input
                    outline="none"
                    padding="10px"
                    type="text"
                    onChange={onChangeNickname}
                  />
                ) : (
                  <UserProfileTitle>{userData.nickname}</UserProfileTitle>
                )}
              </>
            </Grid>
            <button onClick={onClickEditNickname}>
              {editNickname ? "완료" : "수정"}
            </button>
          </UserWrapper>
          <UserWrapper>
            <UserTitle>이메일:</UserTitle>
            <Grid
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <UserProfileTitle>{userData.email}</UserProfileTitle>
            </Grid>
          </UserWrapper>

          <UserWrapper>
            <UserTitle>포인트:</UserTitle>
            <Grid
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <UserProfileTitle>{userData.point}</UserProfileTitle>
            </Grid>
          </UserWrapper>

          <UserWrapper>
            <UserLevel>Lv:</UserLevel>
            <Grid
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <UserProfileTitle>{userData.id}</UserProfileTitle>
            </Grid>
          </UserWrapper>
        </UserInfoContainer>

        {/* <FishSliderBorder>
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
        </FishSliderBorder> */}

        <FishSliderSecondBorder>
          <FishContainer>
            <FishIllustratedBookTitleContainer>
              {/* 오른쪽 타이틀 */}
              <FishIllustratedRightWrapper>
                <span>물고기 도감</span>
              </FishIllustratedRightWrapper>
            </FishIllustratedBookTitleContainer>

            {/* 물고기 자세히 보기 */}
            <FishWrapper>
              <FishDetailContainer>
                {fishImage ? (
                  <>
                    <BigFishContainer>
                      <Grid
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <BigFishNum>Lv.{fishData.fishNum}</BigFishNum>
                        <BigFishName>{fishData.fishName}</BigFishName>
                      </Grid>
                      <BigFish src={fishImage} alt="" />
                      <BigFishInfo>{fishData.fishInfo}</BigFishInfo>
                    </BigFishContainer>
                  </>
                ) : (
                  <>
                    <BigFishContainer>
                      <Grid
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <BigFishNum>Lv.1</BigFishNum>
                        <BigFishName>황금니모</BigFishName>
                      </Grid>
                      <BigFish src={bannerImage[0]} alt="" />
                    </BigFishContainer>
                  </>
                )}
              </FishDetailContainer>

              {/* 물고기 리스트 보여주는 곳 */}
              <FishListContainer>
                {fishImages.map((data: any, index: any) => {
                  if (userData.point >= data.point) {
                    // 물고기 해제
                    return (
                      <FishListWrapper
                        key={index}
                        onClick={() => {
                          dispatch(__getFishList(data.fishName));
                        }}
                      >
                        {lock ? (
                          <>
                            {editFishName ? (
                              <>
                                <FishImageNumberContainer
                                  onClick={() => {
                                    dispatch(
                                      __editUserFishProfile(data.fishName)
                                    );
                                  }}
                                >
                                  <FishNumber>Lv.{index + 1}</FishNumber>
                                  <Grid padding="2%">
                                    <FishImage src={data.image} alt="" />
                                  </Grid>
                                  <Grid
                                    display="flex"
                                    justifyContent="space-between"
                                    width="40%"
                                    onClick={() => {
                                      dispatch(
                                        __editUserFishProfile(data.fishName)
                                      );
                                    }}
                                  >
                                    <FishName>{data.fishName}</FishName>
                                    <RemainingPoint>{0}</RemainingPoint>
                                  </Grid>
                                </FishImageNumberContainer>
                              </>
                            ) : (
                              <>
                                <FishImageNumberContainer>
                                  <FishNumber>Lv.{index + 1}</FishNumber>
                                  <Grid padding="2%">
                                    <FishImage src={data.image} alt="" />
                                  </Grid>
                                  <Grid
                                    display="flex"
                                    justifyContent="space-between"
                                    width="40%"
                                    onClick={() => {
                                      dispatch(
                                        __editUserFishProfile(data.fishName)
                                      );
                                    }}
                                  >
                                    <FishName>{data.fishName}</FishName>
                                    <RemainingPoint>{0}</RemainingPoint>
                                  </Grid>
                                </FishImageNumberContainer>
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            <FishImageNumberContainer>
                              <FishNumber>Lv.{index + 1}</FishNumber>
                              <Grid padding="2%">
                                <FishImage src={data.image} alt="" />
                              </Grid>
                              <Grid
                                display="flex"
                                justifyContent="space-between"
                                width="40%"
                                onClick={() => {
                                  dispatch(
                                    __editUserFishProfile(data.fishName)
                                  );
                                }}
                              >
                                <FishName>{data.fishName}</FishName>
                                <RemainingPoint>
                                  {data.point - userData.point}
                                </RemainingPoint>
                              </Grid>
                            </FishImageNumberContainer>
                          </>
                        )}
                      </FishListWrapper>
                    );
                  } else {
                    // if (userPoint >= data.point) {
                    // }
                    // 물고기 잠금
                    return (
                      <FishListWrapper key={index}>
                        <UnLockContainer>
                          <UnLockAnimation
                            className="icon-lock"
                            style={{ float: "left" }}
                          >
                            <div
                              className="lock-top-1"
                              style={{ backgroundColor: "#02A7D7" }}
                            ></div>
                            <div className="lock-top-2"></div>
                            <div
                              className="lock-body"
                              style={{ backgroundColor: "#02A7D7" }}
                            ></div>
                            <div className="lock-hole"></div>
                          </UnLockAnimation>
                        </UnLockContainer>
                        <FishImageNumberContainer>
                          <FishNumber>Lv.{index + 1}</FishNumber>
                          <Grid padding="2%">
                            <FishImage src={data.image} alt="" />
                          </Grid>
                          <Grid
                            display="flex"
                            justifyContent="space-between"
                            width="40%"
                            onClick={() => {
                              dispatch(__editUserFishProfile(data.fishName));
                            }}
                          >
                            <FishName>{data.fishName}</FishName>
                            <RemainingPoint>
                              {data.point - userData.point}
                            </RemainingPoint>
                          </Grid>
                        </FishImageNumberContainer>
                      </FishListWrapper>
                    );
                  }
                })}
              </FishListContainer>
            </FishWrapper>
          </FishContainer>
        </FishSliderSecondBorder>
      </FirstBorderContainer>
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
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

const FirstBorderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  background-color: #ff7500;
`;

const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 3%;
  border: 3px solid black;
`;

const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  margin-top: 5%;
  /* padding: 5%; */
  padding-top: 3%;
  color: white;
`;

const UserLevel = styled.div`
  width: 100px;
  font-weight: bold;
  padding-left: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const UserTitle = styled.span`
  width: 100px;
  font-weight: bold;
  padding-left: 5px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const UserProfileImage = styled.img`
  width: 15vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10%;
  padding: 3%;
`;

const UserProfileTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const FishSliderSecondBorder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  flex: 3;
`;

const FishContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
  background: linear-gradient(-65deg, #eee 50%, #fff 50%);
  /* border-radius: 10px; */
`;

const FishIllustratedBookTitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
`;

const FishIllustratedRightWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 2% 0;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
`;

const FishWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 2%;
  padding-bottom: 5%;
`;

const FishDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-right: 2px solid #ccc;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BigFishContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 3%; */
  margin-bottom: 30%;
  border: 2px solid white;
`;

const BigFishNum = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  margin-right: 5%;
`;

const BigFishName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const BigFishInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding: 10% 4% 0 4%;
`;

const RemainingPoint = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const BigFish = styled.img`
  width: 15vw;
  height: 20vh;
  margin-top: 3%;
`;

const FishListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
  color: black;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #cccccc;
  }
`;

const UnLockContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
`;

const FishListWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 6%;
  align-items: center;
  border: 1px solid black;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
`;

const FishImageNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  user-select: all;
  padding: 3%;
`;

const LockAnimation = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid #fff;
  transition: all 0.8s;
  cursor: pointer;
  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-top: 5px solid #1a1a1a;
    border-bottom: 5px solid #1a1a1a;
    border-left: 5px solid #1a1a1a;
    border-right: 5px solid #1a1a1a;
    top: -15px;
    left: 8px;
    transform: all 0.8s;
    z-index: -1;
  }
  .key {
    width: 12px;
    height: 4px;
    background-color: #fff;
    margin: 10px auto 0;
    border-radius: 15px;
    transition: all 0.8s;
  }
  &::before {
    position: absolute;
    content: "Lock";
    text-align: center;
    font-size: 8px;
    font-weight: bolder;
    color: #fff;
    letter-spacing: 2px;
    left: 6px;
    top: 5px;
  }
`;

const UnLockAnimation = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 5;
  width: 13%;
  height: 80%;

  .lock-top-1 {
    width: 40%;
    height: 40%;
    position: absolute;
    left: 50%;
    margin-left: -20%;
    top: 14%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 40%;
  }
  .lock-top-2 {
    width: 24%;
    height: 40%;
    position: absolute;
    left: 50%;
    margin-left: -12%;
    top: 22%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 25%;
  }
  .lock-body {
    width: 60%;
    height: 48%;
    position: absolute;
    left: 50%;
    margin-left: -30%;
    bottom: 11%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15%;
  }
  .lock-hole {
    width: 16%;
    height: 16%;
    position: absolute;
    left: 50%;
    margin-left: -8%;
    top: 51%;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .lock-hole:after {
    content: "";
    width: 43%;
    height: 78%;
    position: absolute;
    left: 50%;
    margin-left: -20%;
    top: 100%;
    background-color: inherit;
  }
`;

const FishNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const FishName = styled.span`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: "DungGeunMo";
`;

const FishImage = styled.img`
  width: 25%;
  height: 80%;
  margin-left: 15%;
`;

const FishBowlImage = styled.img`
  width: 7%;
  height: 70%;
`;

export default UnLock;
