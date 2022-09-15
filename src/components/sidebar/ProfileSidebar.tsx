import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ProfileIcon } from "../../assets/icon/ProfileIcon.svg";

const ProfileSidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <ProfileSide onClick={() => setShow(!show)}>
        <ProfileIconBox>
          <Profile />
        </ProfileIconBox>      
        <ProfileLayer show={show}>
        <ProfileBox>
          <ProfileImg></ProfileImg>
          <PlayerName>플레이어 이름</PlayerName>
          <PlayerMSG></PlayerMSG>
        </ProfileBox>
        <CloseBtn onClick={() => setShow(!show)}></CloseBtn>
      </ProfileLayer>
      </ProfileSide>

    </div>
  );
};

export default ProfileSidebar;

const ProfileSide = styled.div`
  border: solid red 1px;
  position: absolute;
  width: 25px;
  height: 50%;
  left: 0px;
  top: 65px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const ProfileIconBox = styled.div`
  position: absolute;
  width: 60px;
  height: 75px;
  left: -5px;
  top: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
  border-radius: 40px;
`;

const Profile = styled(ProfileIcon)`
  position: absolute;
`;
interface ProfileLayerProps {
  show: boolean;
}

const ProfileLayer = styled.div<ProfileLayerProps>`
  position: absolute;
  display: flex;
  width: 359px;
  height: 90%;
  transition: all 0.5s;
  z-index: 1;
  left: ${({ show }) => (show ? "0px" : "-359px")};
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const ProfileBox = styled.div`
  box-sizing: border-box;
  border: solid red 1px;
  padding-top: 50px;
  width: 335px;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const ProfileImg = styled.div`
  box-sizing: border-box;
  width: 175px;
  height: 175px;
  background: #bababa;
  border: 2px solid #ffffff;
  border-radius: 50%;
  margin: auto;
`;

const PlayerName = styled.div`
  width: 123px;
  height: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin: auto;
  margin-top: 10%;
`;

const PlayerMSG = styled.div`
  width: 250px;
  height: 87px;
  background: rgba(217, 217, 217, 0.4);
  border-radius: 30px;
  margin: auto;
  margin-top: 10%;
`;

const CloseBtn = styled.div`
  width: 25px;
`;
