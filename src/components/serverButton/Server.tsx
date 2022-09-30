import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import starFish from "../../assets/pixel/startFish.png";
import { deleteCookie } from "../social/Cookie";

const Server = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const onClickLogOut = () => {
    deleteCookie("token");
    navigate("/");
  };

  //server zone
  const roomId1 = process.env.REACT_APP_ROOMID1;
  const roomId2 = process.env.REACT_APP_ROOMID2;
  const roomId3 = process.env.REACT_APP_ROOMID3;
  const roomId4 = process.env.REACT_APP_ROOMID4;
  const roomId5 = process.env.REACT_APP_ROOMID5;

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
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -8 * 1))" }}>
            <ATitle>Server1</ATitle>
          </A>
        </LI1>
        <LI2
          onClick={() => {
            navigate("/chat", {
              state: {
                id: roomId2,
              },
            });
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -8 * 2))" }}>
            <ATitle>Server2</ATitle>
          </A>
        </LI2>
        <LI3
          onClick={() => {
            navigate("/chat", {
              state: {
                id: roomId3,
              },
            });
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -8 * 3))" }}>
            <ATitle>Server3</ATitle>
          </A>
        </LI3>
        <LI4
          onClick={() => {
            navigate("/chat", {
              state: {
                id: roomId4,
              },
            });
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -8 * 4))" }}>
            <ATitle>Server4</ATitle>
          </A>
        </LI4>
        <LI5
          onClick={() => {
            navigate("/chat", {
              state: {
                id: roomId5,
              },
            });
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -8 * 5))" }}>
            <ATitle>Server5</ATitle>
          </A>
        </LI5>
        <LI6
          onClick={() => {
            navigate("/unlock");
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -8 * 6))" }}>
            <ATitle>My Info</ATitle>
          </A>
        </LI6>
        <LI7
          onClick={() => {
            navigate("/statistics");
          }}
          toggle={toggle}
        >
          <A style={{ transform: "rotate(calc(360deg/ -8 * 7))" }}>
            <ATitle>Total</ATitle>
          </A>
        </LI7>
        <LI8 toggle={toggle}>
          <A
            onClick={onClickLogOut}
            style={{ transform: "rotate(calc(360deg/ -8 * 8))" }}
          >
            <ATitle>LogOut</ATitle>
          </A>
        </LI8>
      </UL>
    </Body>
  );
};

export default Server;
interface ToggleProps {
  toggle: boolean;
}
const Body = styled.div`
  width: 100%;
  position: absolute;
  bottom: 15%;
  left: 5%;
`;

const UL = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;
const LI1 = styled.div<ToggleProps>`
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 1);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 8 )) translateX(0px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI2 = styled.div<ToggleProps>`
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 2);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 8 * 2)) translateX(0px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI3 = styled.div<ToggleProps>`
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 3);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 8 * 3)) translateX(0px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI4 = styled.div<ToggleProps>`
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 4);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 8 * 4 )) translateX(0px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI5 = styled.div<ToggleProps>`
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 5);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 8 * 5 )) translateX(0px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI6 = styled.div<ToggleProps>`
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 6);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 8 * 6 )) translateX(0px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI7 = styled.div<ToggleProps>`
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 7);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 8 * 7)) translateX(0px)"
      : "rotate(0deg) translateX(110px)"};
`;

const LI8 = styled.div<ToggleProps>`
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * 8);
  transform-origin: 140px;
  transform: ${({ toggle }) =>
    toggle
      ? "rotate(calc(360deg / 8 * 8 )) translateX(0px)"
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
  background: url(${starFish});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transition: transform 1.25s;
  background-color: transparent;
  overflow: hidden;
  transform: ${({ toggle }) => (toggle ? "rotate(315deg)" : "")};
  background-color: #1a647d;
`;

const A = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    transition: 0s;
    background: #ffffffba;
    box-shadow: 0 0 10px #ffffffba, 0 0 30px #ffffffba, 0 0 50px #ffffffba;
  }
`;

const ATitle = styled.span`
  font-size: 1em;
  display: flex;
`;
