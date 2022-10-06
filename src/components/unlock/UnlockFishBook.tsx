import React, { useEffect, useMemo, useState } from "react";
import fishImages from "../fish/FishImages";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { __getFishList } from "../../redux/modules/fishList";
import { __editUserFishProfile } from "../../redux/modules/userData";
import Grid from "../../elements/Grid";

import { getCookie } from "../../components/social/Cookie";
import styled from "styled-components";

const UnLockFishBook = () => {
  const token: string = getCookie("token") as string;
  const dispatch = useAppDispatch();

  const fishData = useAppSelector((state) => state.fishList.fishInfo);
  const bannerImage = fishImages.map((data) => data.image);
  const bannerInfo = fishImages.map((data) => data.info);
  const fishImage = useAppSelector(
    (state) => state.fishList.fishInfo.fishImageUrl
  );
  const [editFishName, setEditFishName] = useState(false);
  const [lock, setLock] = useState(false);
  const userData = useAppSelector((state) => state.userData.userProfile);

  useEffect(() => {
    const fishPoint = fishImages.map((data) => data.point);
    for (let i = 0; i < fishImages.length; i++) {
      if (userData.point >= fishPoint[i]) {
        setLock(true);
      }
    }
  }, [token]);
  return (
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
              <ProfileSelect
                onClick={() =>
                  dispatch(__editUserFishProfile(fishData.fishName))
                }
              >
                PROFILE SELECT
              </ProfileSelect>
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
              <BigFishInfo>{bannerInfo[0]}</BigFishInfo>
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
                {lock && (
                  <>
                    {editFishName ? (
                      <>
                        <FishImageNumberContainer
                          onClick={() => {
                            dispatch(__editUserFishProfile(data.fishName));
                          }}
                        >
                          <FishNumber>Lv.{index + 1}</FishNumber>
                          <Grid padding="2% 0">
                            <FishImage src={data.image} alt="" />
                          </Grid>

                          <FishName>{data.fishName}</FishName>
                        </FishImageNumberContainer>
                      </>
                    ) : (
                      <>
                        <FishImageNumberContainer>
                          <FishNumber>Lv.{index + 1}</FishNumber>
                          <Grid padding="2% 0">
                            <FishImage src={data.image} alt="" />
                          </Grid>
                          <Grid
                            display="flex"
                            justifyContent="space-around"
                            width="60%"
                          >
                            <FishName>{data.fishName}</FishName>
                          </Grid>
                        </FishImageNumberContainer>
                      </>
                    )}
                  </>
                )}
              </FishListWrapper>
            );
          } else {
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
                  <Grid padding="2% 0">
                    <FishImage src={data.image} alt="" />
                  </Grid>
                  <Grid
                    display="flex"
                    justifyContent="space-around"
                    width="60%"
                  >
                    <FishName>{data.fishName}</FishName>
                    <RemainingPointContainer>
                      남은 포인트:
                      <RemainingPoint>
                        {data.point - userData.point}
                      </RemainingPoint>
                    </RemainingPointContainer>
                  </Grid>
                </FishImageNumberContainer>
              </FishListWrapper>
            );
          }
        })}
      </FishListContainer>
    </FishWrapper>
  );
};

const FishWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
`;

const FishDetailContainer = styled.div`
  width: 100%;
  height: 88%;
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
  justify-content: space-between;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #cccccc;
  }
`;

const BigFishNum = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  margin-right: 5%;
`;

const BigFishName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const BigFishInfo = styled.span`
  display: inline;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding: 3% 4% 3% 4%;
  line-height: 40px;
`;

const RemainingPointContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RemainingPoint = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  display: flex;
`;

const BigFish = styled.img`
  width: 15vw;
  height: 20vh;
  margin-top: 1%;
`;
const ProfileSelect = styled.button`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "DungGeunMo";
  font-size: 16px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
  border: 1px solid black;
  line-height: 12px;
`;

const FishListContainer = styled.div`
  width: 100%;
  height: 88%;
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
    background: #0096ff;
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
  border: 2px solid black;
  border-radius: 10px;
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

const UnLockAnimation = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 3;
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
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: "DungGeunMo";
`;

const FishImage = styled.img`
  width: 3vw;
  height: 5vh;
  margin-left: 35%;
`;

export default React.memo(UnLockFishBook);
