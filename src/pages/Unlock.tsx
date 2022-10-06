import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { __editUserProfile, __getUserProfile } from "../redux/modules/userData";
import Grid from "../elements/Grid";
import Input from "../elements/Input";

import { getCookie } from "../components/social/Cookie";
import { useNavigate } from "react-router-dom";
import UnLockFishBook from "../components/unlock/UnlockFishBook";
import React from "react";
import _ from "lodash";

const Unlock = () => {
  const token: string = getCookie("token") as string;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userData = useAppSelector((state) => state.userData.userProfile);

  const [nickname, setNickname] = useState("");
  const [editNickname, setEditNickname] = useState(false);


  const debounce = _.debounce((text : any) =>  {
    onChangeNickname(text);
  }
  , 300);

  const DeOnChangeNickname = React.useCallback(debounce, []);
  
  function onClickEditNickname() {
    setEditNickname(!editNickname)
    setNickname("");
    dispatch(__editUserProfile(nickname));
  }

  function onChangeNickname(e: any) {
    setNickname(e.target.value.slice(0, 7));
  }

  useEffect(() => {
    if (token === undefined) {
      navigate("/login");
      alert("로그인이 필요한 페이지입니다.");
    }
    dispatch(__getUserProfile());
  }, [token]);
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
                        onChange={(e)=>{DeOnChangeNickname(e)}}
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
                {!editNickname && 
                <EditNicknameButton onClick={()=>setEditNickname(!editNickname)}>
                  CHANGE
                </EditNicknameButton>
                }
                {editNickname &&   
                <EditNicknameButton onClick={onClickEditNickname}>
                  CHANGE
                </EditNicknameButton>}
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
              <UnLockFishBook />
            </FishContainer>
          </FishSliderSecondBorder>
        </FirstBorderContainer>
      </UnClockContainer>
    </>
  );
};

const EditNicknameButton = styled.button`
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

export default Unlock;
