import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ProfileIcon } from "../../image/icon/ProfileIcon.svg";

const ProfileSidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div onClick={() => setShow(!show)}>
      <ProfileSide>
        <ProfileLayer show={show}>
          <ProfileBox>
            <ProfileImg></ProfileImg>
            <PlayerName>플레이어 이름</PlayerName>
            <PlayerMSG></PlayerMSG>
          </ProfileBox>
        </ProfileLayer>
      </ProfileSide>
      <ProfileIconBox>
        <Profile />
      </ProfileIconBox>
    </div>
  );
};

export default ProfileSidebar;

const Profile = styled(ProfileIcon)`
  position: absolute;
  right: 15px;
  top: 33px;
`;

const ProfileSide = styled.div`
  position: absolute;
  width: 24px;
  height: 394px;
  left: 0px;
  top: 64px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const ProfileIconBox = styled.div`
  position: relative;
  width: 112px;
  height: 98px;
  left: -56px;
  top: 172px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
  border-radius: 40px;
`;

interface ProfileLayerProps {
  show : boolean;
}

const ProfileLayer = styled.div<ProfileLayerProps>`
  position: absolute;
  width: 359px;
  height: 394px;
  transition: all 0.5s;
  z-index: 1;
  left: ${({ show }) => (show ? "0px" : "-359px")};
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const ProfileBox = styled.div`
  box-sizing: border-box;
  padding: 21px;
  width: 335px;
  height: 394px;
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
