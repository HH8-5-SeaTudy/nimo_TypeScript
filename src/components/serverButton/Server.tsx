import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addUser } from "../../redux/modules/socket";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

//server zone
const roomId1 = process.env.REACT_APP_ROOMID1;
const roomId2 = process.env.REACT_APP_ROOMID2;
const roomId3 = process.env.REACT_APP_ROOMID3;
const roomId4 = process.env.REACT_APP_ROOMID4;
const roomId5 = process.env.REACT_APP_ROOMID5;

const Server = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const dispatch = useAppDispatch();

  const chatUser = useAppSelector((state) => state.socket.chat);
  const chatCount = chatUser.find((state: any) => state.userCount);

  useEffect(() => {
    dispatch(addUser);
  }, []);

  const onClickRoom1 = () => {
    if (Number(chatCount?.userCount) > 3) {
      alert("인원이 전부 찼습니다");
      return;
    }
  };

  const onClickRoom2 = () => {
    if (Number(chatCount?.userCount) > 3) {
      alert("인원이 전부 찼습니다");
      return;
    }
  };

  const onClickRoom3 = () => {
    if (Number(chatCount?.userCount) > 3) {
      alert("인원이 전부 찼습니다");
      return;
    }
  };

  const onClickRoom4 = () => {
    if (Number(chatCount?.userCount) > 3) {
      alert("인원이 전부 찼습니다");
      return;
    }
  };

  const onClickRoom5 = () => {
    if (Number(chatCount?.userCount) > 3) {
      alert("인원이 전부 찼습니다");
      return;
    }
  };

  const navigate = useNavigate();

  return (
    <Body>
      <div className="background-wrap">
        <div className="bubble x1">
          <UL>
            <Toggle onClick={() => setToggle(!toggle)} toggle={toggle} />
            <LI1
              onClick={() => {
                navigate("/chat", {
                  state: {
                    id: roomId1,
                  },
                });
                onClickRoom1();
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
                onClickRoom2();
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
                onClickRoom3();
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
                onClickRoom4();
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
                onClickRoom5();
                window.location.reload();
              }}
              toggle={toggle}
            >
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
    box-shadow: 0 0px 20px #fff, inset 0px 10px 30px 5px #add9ec54;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    ${({ theme }) => theme.common.flexCenter};
    width: 100px;
    border: solid rgba(255, 255, 255, 0.5) 1px;
  }
  .bubble:after {
    background: -webkit-gradient(
      radial,
      center center,
      0px,
      center center,
      100%,
      color-stop(0%, transparent),
      color-stop(70%, rgba(255, 255, 255, 0))
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      transparent 0%,
      rgba(255, 255, 255, 0) 70%
    );
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      rgba(255, 255, 255, 0) 90%
    );
    border-radius: 50%;
    box-shadow: inset 0 -20px -30px rgba(26, 58, 94, 0.322);
    content: "";
    height: 180px;
    left: 10px;
    position: absolute;
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
  left: -92%;
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
  left: -92%;
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
  left: -92%;
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
  left: -92%;
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
  left: -92%;
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
  background-color: #0096ff;
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
