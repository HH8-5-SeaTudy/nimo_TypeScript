import { useEffect, useState } from "react";
import styled from "styled-components";
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

import { getCookie } from "../components/social/Cookie";
import { useNavigate } from "react-router-dom";

const UnLock = () => {
  const token: string = getCookie("token") as string;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userData = useAppSelector((state) => state.userData.userProfile);
  const fishData = useAppSelector((state) => state.fishList.fishInfo);
  const bannerImage = fishImages.map((data) => data.image);
  const bannerInfo = fishImages.map((data) => data.info);
  const fishImage = useAppSelector(
    (state) => state.fishList.fishInfo.fishImageUrl
  );
  const [nickname, setNickname] = useState("");
  const [editNickname, setEditNickname] = useState(false);
  const [editFishName, setEditFishName] = useState(false);
  const [lock, setLock] = useState(false);

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

  const onChangeNickname = (e: any) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    const fishPoint = fishImages.map((data) => data.point);
    for (let i = 0; i < fishImages.length; i++) {
      if (userData.point >= fishPoint[i]) {
        setLock(true);
      }
    }
  }, [token]);

  useEffect(() => {
    if (token === undefined) {
      navigate("/");
      alert("로그인이 필요한 페이지입니다.");
    }
    dispatch(__getUserProfile());
  }, []);
  return (
    <>
      <UnClockContainer>
        <FirstBorderContainer>
          <UserInfoContainer>
            <UserInfoTitle>
              <p>MY PROFILE</p>
            </UserInfoTitle>
            <UserInfoProfile>
              <FishBowl>
                <Grid width="100%">
                  <UserProfileImage src={userData.defaultFish} alt="" />
                </Grid>
              </FishBowl>
            </UserInfoProfile>
            <UserInfo>
              <UserWrapper>
                <UserTitle>닉네임:</UserTitle>
                <Grid
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <>
                    {editNickname && (
                      <Input
                        onChange={onChangeNickname}
                        transition="width .2s .3s , height .3s"
                        width={editNickname ? "140px" : "0px"}
                        height={editNickname ? "25px" : "0px"}
                        placeholder="닉네임"
                        fontSize="20px"
                        border="none"
                        outline="none"
                      />
                    )}

                    {!editNickname && (
                      <UserProfileTitle>{userData.nickname}</UserProfileTitle>
                    )}
                  </>
                </Grid>
                <EditNicknamButton onClick={onClickEditNickname}>
                  CHANGE
                </EditNicknamButton>
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
            </UserInfo>
          </UserInfoContainer>

          <FishSliderSecondBorder>
            <FishContainer>
              <FishIllustratedBookTitleContainer>
                {/* 오른쪽 타이틀 */}
                <FishIllustratedRightWrapper>
                  <span>FISH BOOK</span>
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
                        <ProfileSelect
                          onClick={() =>
                            dispatch(__editUserFishProfile(fishData.fishName))
                          }
                        >
                          POFILE SELECT
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
                                    <Grid padding="2% 0">
                                      <FishImage src={data.image} alt="" />
                                    </Grid>
                                    <Grid
                                      display="flex"
                                      justifyContent="space-around"
                                      width="60%"
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
                                    <Grid padding="2% 0">
                                      <FishImage src={data.image} alt="" />
                                    </Grid>
                                    <Grid
                                      display="flex"
                                      justifyContent="space-around"
                                      width="60%"
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
                                  justifyContent="space-around"
                                  width="60%"
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
    </>
  );
};

interface TodoInputShowProps {
  todoInputShow: boolean;
}

const EditNicknamButton = styled.button`
  width: 70px;
  height: 25px;
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
  background-color: #0096ff;
  padding: 30px;
`;

const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.1;
  margin-right: 20px;
  background-color: #ff9100;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
  border-radius: 6px;
`;

const UserInfoTitle = styled.div`
  height: 12%;
  width: 100%;
  padding: 0 20px;
  background-color: #ff9100;

  border-radius: 6px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 90%;
    width: 100%;
    text-align: center;
    border-bottom: solid black 2px;
    font-size: 50px;
  }
`;
const UserInfoProfile = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FishBowl = styled.div`
  padding: 20px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #0096ff;
  border: solid 8px white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserInfo = styled.div`
  border-radius: 0 0 6px 6px;
  height: 50%;
  width: 100%;
  color: black;
  background: white;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const UserWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const UserLevel = styled.div`
  width: 100px;
  font-weight: bold;
  padding-left: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const UserTitle = styled.span`
  width: 120px;
  font-weight: bold;
  padding-left: 5px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const UserProfileImage = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border-radius: 6px;
`;

const FishContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
  background: linear-gradient(-65deg, #eee 50%, #fff 50%);
  border-radius: 6px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const FishIllustratedBookTitleContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
`;

const FishIllustratedRightWrapper = styled.div`
  width: 100%;

  height: 88px;
  padding: 0 20px;
  font-size: 2em;
  background: #0096ff;
  span {
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid black 2px;
  }
`;

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

const RemainingPoint = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
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
  margin-left: 35%;
`;

const FishBowlImage = styled.img`
  width: 7%;
  height: 70%;
`;

export default UnLock;
