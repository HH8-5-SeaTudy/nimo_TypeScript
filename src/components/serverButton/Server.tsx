import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//server zone
const roomId1 = process.env.REACT_APP_ROOMID1;
const roomId2 = process.env.REACT_APP_ROOMID2;
const roomId3 = process.env.REACT_APP_ROOMID3;
const roomId4 = process.env.REACT_APP_ROOMID4;
const roomId5 = process.env.REACT_APP_ROOMID5;

const Server = () => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  return (
    <Body>
      <UL>
        <Toggle onClick={() => setToggle(!toggle)} toggle={toggle} />
        <LI1
          onClick={() => {
            navigate("/chat", {
              state: {
                id: roomId1,
              },
            });
            window.location.reload();
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -5 * 1))" }}>
            <ATitle>인도양</ATitle>
          </A>
        </LI1>
        <LI2
          onClick={() => {
            navigate("/chat", {
              state: {
                id: roomId2,
              },
            });
            window.location.reload();
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -5 * 2))" }}>
            <ATitle>태평양</ATitle>
          </A>
        </LI2>
        <LI3
          onClick={() => {
            navigate("/chat", {
              state: {
                id: roomId3,
              },
            });
            window.location.reload();
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -5 * 3))" }}>
            <ATitle>대서양</ATitle>
          </A>
        </LI3>
        <LI4
          onClick={() => {
            navigate("/chat", {
              state: {
                id: roomId4,
              },
            });
            window.location.reload();
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -5 * 4))" }}>
            <ATitle>북극해</ATitle>
          </A>
        </LI4>

        <LI5
          onClick={() => {
            navigate("/chat", {
              state: {
                id: roomId5,
              },
            });
            window.location.reload();
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -5 * 5))" }}>
            <ATitle>남극해</ATitle>
          </A>
        </LI5>
      </UL>
    </Body>
  );
};

export default Server;
interface ToggleProps {
  toggle: boolean;
}
const Body = styled.div`
  position: relative;
  width: 240px;
  height: 420px;
  display: flex;
  align-items: center;
  border: 2px solid white;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
`;

const UL = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const LI1 = styled.div<ToggleProps>`
  position: absolute;
  transform: translate(50% 50%);
  left: -9%;

  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 1);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 5 )) translateX(30px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI2 = styled.div<ToggleProps>`
  position: absolute;
  left: -9%;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 2);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 5* 2 )) translateX(30px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI3 = styled.div<ToggleProps>`
  position: absolute;
  left: -9%;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 3);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 5 * 3)) translateX(30px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI4 = styled.div<ToggleProps>`
  position: absolute;
  left: -9%;
  list-style: none;
  transition: 0.5s;
  transform: translate(-50% -50%);
  transition-delay: calc(0.1s * 4);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 5 * 4 )) translateX(30px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI5 = styled.div<ToggleProps>`
  position: absolute;
  left: -9%;
  list-style: none;
  transition: 0.5s;
  transform: translate(-50% -50%);
  transition-delay: calc(0.1s * 4);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 5 * 5 )) translateX(30px)"
      : "rotate(0deg) translateX(110px)"};
`;

const Toggle = styled.div<ToggleProps>`
  position: absolute;
  width: 61.7px;
  height: 61.7px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  font-size: 2em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transition: transform 1.25s;
  background-color: transparent;
  overflow: hidden;
  transform: ${({ toggle }) => (toggle ? "rotate(270deg)" : "")};
  background-color: #68a691;
`;

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
