import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addUser } from "../../redux/modules/socket";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import handle from "../../assets/pixel/handle.png";
//server zone
const roomId1 = process.env.REACT_APP_ROOMID1;
const roomId2 = process.env.REACT_APP_ROOMID2;
const roomId3 = process.env.REACT_APP_ROOMID3;
const roomId4 = process.env.REACT_APP_ROOMID4;
const roomId5 = process.env.REACT_APP_ROOMID5;

const Server = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addUser);
  }, []);

  const onClickRoom1 = () => {
    navigate("/chat", {
      state: {
        id: roomId1,
      },
    });
    window.location.reload();
  };

  const onClickRoom2 = () => {
    navigate("/chat", {
      state: {
        id: roomId2,
      },
    });
    window.location.reload();
  };

  const onClickRoom3 = () => {
    navigate("/chat", {
      state: {
        id: roomId3,
      },
    });
    window.location.reload();
  };

  const onClickRoom4 = () => {
    navigate("/chat", {
      state: {
        id: roomId4,
      },
    });
    window.location.reload();
  };

  const onClickRoom5 = () => {
    navigate("/chat", {
      state: {
        id: roomId5,
      },
    });
    window.location.reload();
  };

  const navigate = useNavigate();

  return (
    <Body>
      <div className="background-wrap">
        <div className="bubble x1">
          <UL>
            <Toggle onClick={() => setToggle(!toggle)} toggle={toggle} >
              <Img src={handle}></Img>
            </Toggle>
            <LI1 onClick={onClickRoom1} toggle={toggle}>
              <A style={{ transform: "rotate(calc(360deg/ -5 * 1))" }} >
                <ATitle>인도양</ATitle>
              </A>
            </LI1>
            <LI2 onClick={onClickRoom2} toggle={toggle}>
              <A style={{ transform: "rotate(calc(360deg/ -5 * 2))" }}>
                <ATitle>태평양</ATitle>
              </A>
            </LI2>
            <LI3 onClick={onClickRoom3} toggle={toggle}>
              <A style={{ transform: "rotate(calc(360deg/ -5 * 3))" }}>
                <ATitle>대서양</ATitle>
              </A>
            </LI3>
            <LI4 onClick={onClickRoom4} toggle={toggle}>
              <A style={{ transform: "rotate(calc(360deg/ -5 * 4))" }}>
                <ATitle>북극해</ATitle>
              </A>
            </LI4>

            <LI5 onClick={onClickRoom5} toggle={toggle}>
              <A style={{ transform: "rotate(calc(360deg/ -5 * 5))" }}>
                <ATitle>남극해</ATitle>
              </A>
            </LI5>
          </UL>
        </div>
      </div>
    </Body>
  );
};

export default Server;
interface ToggleProps {
  toggle: boolean;
}
const Body = styled.div`
  position: relative;
  width: 100%;
  height: 470px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  .background-wrap {
    width: 100%;
    left: 0;
    top: 50%;
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bubble {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    ${({ theme }) => theme.common.flexCenter};
    width: 100px;

  }
`;

const UL = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const LI1 = styled.div<ToggleProps>`
  position: absolute;
  transform: translate(50% 50%);
  left: -89%;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 1);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 5 )) translateX(-80px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI2 = styled.div<ToggleProps>`
  position: absolute;
  left: -89%;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 2);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 5* 2 )) translateX(-80px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI3 = styled.div<ToggleProps>`
  position: absolute;
  left: -89%;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 3);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 5 * 3)) translateX(-80px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI4 = styled.div<ToggleProps>`
  position: absolute;
  left: -89%;
  list-style: none;
  transition: 0.5s;
  transform: translate(-50% -50%);
  transition-delay: calc(0.1s * 4);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 5 * 4 )) translateX(-80px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI5 = styled.div<ToggleProps>`
  position: absolute;
  left: -89%;
  list-style: none;
  transition: 0.5s;
  transform: translate(-50% -50%);
  transition-delay: calc(0.1s * 4);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 5 * 5 )) translateX(-80px)"
      : "rotate(0deg) translateX(110px)"};
`;

const Toggle = styled.div<ToggleProps>`
  position: absolute;
  width: 310px;
  height: 310px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  font-size: 2em;
  transition: transform 1.25s;
  overflow: hidden;
  transform: ${({ toggle }) => (toggle ? "rotate(270deg)" : "")};
  background-color: transparent;
`;
const Img =styled.img`
  width:100%;
  height:100%;
`
const A = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 2px solid #ff9100;
  border-radius: 50%;
  background-color: #ff9100;
  cursor: pointer;
  word-break: break-all;
  &:hover {
    transition: 0s;
    background: #ff9100;
    box-shadow: 0 0 10px #ff9100, 0 0 30px #ff9100, 0 0 50px #ff9100;
  }
`;

const ATitle = styled.span`
  font-size: 1em;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;
