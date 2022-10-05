import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { addUser } from "../../redux/modules/socket";
import { getCookie } from "../social/Cookie";
import styled from "styled-components";
import { __getUserProfile } from "../../redux/modules/userData";
import sendbtn from "../../assets/pixel/sendbtn.png";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = getCookie("token") as string;

const socket = new SockJS(`${BASE_URL}/api/v1/chat/connections`);
const client = Stomp.over(socket);

function Chatting() {
  const location = useLocation();

  const { id }: any = location.state;

  const dispatch = useAppDispatch();
  const message = useRef<any>(null);
  const chatUser = useAppSelector((state) => state.socket.chat);
  const enter = chatUser.find((nickname) => nickname.rankByNickname);

  const userNickname = useAppSelector(
    (state) => state.userData.userProfile.nickname
  );

  useEffect(() => {
    dispatch(addUser);
  }, []);

  const headers = {
    Authorization: token,
  };

  //렌더되면 소켓 연결실행
  useEffect(() => {
    if (token !== undefined) {
      onConneted();
      dispatch(__getUserProfile());
    }
    return () => {
      disConneted();
    };
  }, []);

  function handleEnterPress(e: any) {
    if (e.code === "Enter" && e.shiftKey === false) {
      sendMessage();
    }
  }

  function handleClick(e: any) {
    e.preventDefault();
    sendMessage();
  }

  //연결&구독
  const onConneted = () => {
    try {
      client.connect(headers, () => {
        client.subscribe(
          `/sub/chat/room/${id}`,
          (data) => {
            const user = JSON.parse(data.body);
            dispatch(addUser(user));
          },
          headers
        );
      });
    } catch (error) {}
  };

  //메시지 보내기
  const sendMessage = () => {
    if (message.current.value.trim() === "") {
      return null;
    }
    const res = JSON.stringify({
      roomId: id,
      message: message.current.value,
    });
    waitForConnection(client, function () {
      client.send(`/pub/chat/message`, headers, res);
    });

    message.current.value = "";
  };

  // 연결해제, 구독해제
  function disConneted() {
    try {
      client.disconnect(
        () => {
          client.unsubscribe("sub-0");
        },
        { token: token }
      );
    } catch (error) {}
  }

  function waitForConnection(client: any, callback: any) {
    setTimeout(function () {
      if (client.ws.readyState === 1) {
        callback();
      } else {
        waitForConnection(client, callback);
      }
    }, 1);
  }

  return (
    <ChattingContainer>
      <RightSide>
        <RankSide>
          <RankTitle>
            <p>
              CHATTING
              <br />
              RANKING
            </p>
          </RankTitle>
          <RankBox>
            <Rank>
              <RankInfo>
                {enter?.rankByNickname.map((data, index) => (
                  <UserRankNicknameWrapper key={index}>
                    <UserRankNickname>
                      {index + 1}.
                      <UserRankImage src={data.defaultFish} />
                      <NickName>{data.nickname}</NickName>
                    </UserRankNickname>
                    <UserRankPoint>Time:{data.totalStudy}</UserRankPoint>
                  </UserRankNicknameWrapper>
                ))}
                {/* </UserRankNicknameContainer> */}
              </RankInfo>
            </Rank>
          </RankBox>
        </RankSide>
        <ChatSide>
          <ChatBox>
            {chatUser &&
              chatUser.map((list: any, index: number) => {
                if (list.type === "TALK") {
                  if (list.sender === userNickname) {
                    return (
                      <MyMessageListContainer key={index}>
                        <MySenderMessageContainer className="chat-thread">
                          <MySenderContainer>
                            <Message>{list.message}</Message>
                          </MySenderContainer>
                        </MySenderMessageContainer>
                      </MyMessageListContainer>
                    );
                  }
                  return (
                    <MessageListContainer key={index}>
                      <SenderMessageContainer className="chat-thread">
                        <SenderMessageWrapper>
                          <SenderProfile src={list.defaultFish} />
                          <Sender>{list.sender}</Sender>
                        </SenderMessageWrapper>
                        <SenderContainer>
                          <Message>{list.message}</Message>
                        </SenderContainer>
                      </SenderMessageContainer>
                    </MessageListContainer>
                  );
                } else if (list.type === "ENTER") {
                  return (
                    <NoticeContainer key={index}>
                      <EnterContainer>
                        <Sender>{list.sender}</Sender>
                        <Message>{list.message}</Message>
                      </EnterContainer>
                    </NoticeContainer>
                  );
                } else {
                  return (
                    <NoticeContainer key={index}>
                      <EnterContainer>
                        <Sender>{list.sender}</Sender>
                        <Message>{list.message}</Message>
                      </EnterContainer>
                    </NoticeContainer>
                  );
                }
              })}
          </ChatBox>
          <SendBox>
            <MessageForm>
              <textarea onKeyUp={handleEnterPress} ref={message} />
              <ButtonContainer>
                <SendButton onClick={handleClick}></SendButton>
              </ButtonContainer>
            </MessageForm>
          </SendBox>
        </ChatSide>
      </RightSide>
    </ChattingContainer>
  );
}

const ChattingContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  perspective: 35em;
  display: block;
  overflow: hidden;
`;
const RightSide = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;
const RankSide = styled.div`
  border-radius: 6px 0 0 0;
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RankTitle = styled.div`
  border-radius: 6px 0 0 0;
  height: 120px;
  background: #ff9100;
  font-size: 50px;
  line-height: 40px;
  padding: 0 20px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
    text-align: center;
    border-bottom: solid black 2px;
  }
`;
const RankBox = styled.div`
  padding-left: 5px;
  background-color: #fff;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  border-radius: 0 0 0 6px;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
    border-radius: 9999px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0096ff;
    height: 5px;
    border-radius: 9999px;
  }
  div {
    &:first-child {
      margin-top: 2px;
    }
  }
`;
const Rank = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 5px;
  background-color: white;
`;
const RankInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const NickName = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  line-height: 17px;
`;

const ChatSide = styled.div`
  border-radius: 6px;
  word-break: break-all;
  max-width: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
`;
const ChatBox = styled.div`
  padding: 10px 20px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column-reverse;
  background-color: #eee;
  border-radius: 0 6px 0 0;
  border-left: 1px solid black;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
    border-radius: 9999px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0096ff;
    height: 5px;
    border-radius: 9999px;
  }
  div {
    &:first-child {
      margin-top: 2px;
    }
  }
`;
const Message = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const SendBox = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 2px solid #eee;
`;

const MyMessageListContainer = styled.div`
  width: 100%;
`;

const MessageListContainer = styled.div`
  width: 100%;
`;
const UserRankImage = styled.img`
  width: 60px;
  height: 40px;
  margin-left: 10px;
`;
const UserRankNicknameWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid black;
  padding: 10px 0;
`;
const UserRankNickname = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.base};
`;
const UserRankPoint = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const NoticeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 5px;
  margin-bottom: 15px;
`;

const EnterContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MySenderMessageContainer = styled.ul`
  width: 100%;
  /* width: auto; */
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;

const MySenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #75c9ff;
  border-radius: 10px;
  max-width: 80%;
  width: fit;
`;

const SenderMessageContainer = styled.ul`
  width: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
`;

const SenderMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
`;

const SenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
  justify-content: center;
  background-color: #8bc7df;
  border-radius: 10px;
  width: fit;
`;

const SenderProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  padding: 5px;
`;

const Sender = styled.span`
  font-size: 0.8em;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

const MessageForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  resize: none;
  width: 100%;
  background: #ff9100;
  padding: 10px;
  border-radius: 0 0 6px 0;

  textarea {
    padding: 10px;
    border: 3px solid black;
    background-color: ${({ theme }) => theme.colors.white};
    resize: none;
    width: 80%;
    border-radius: 10px;
    font-size: 1.5em;
    ::-webkit-scrollbar {
      background-color: transparent;
      width: 5px;
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #cae5f8;

      border-radius: 9999px;
      height: 5px;
    }
    &:focus {
      outline: none;
    }
  }
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-left: 10px;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
`;

const SendButton = styled.button`
  background-image: url(${sendbtn});
  background-size: 80px;
  background-position: top 1px;
  height: 50px;
  width: 80px;
  height: 65.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "DungGeunMo";
  font-size: 16px;
  border-radius: 10px;
`;

export default React.memo(Chatting);
