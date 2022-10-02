import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../components/hooks/reduxHooks";
import Server from "../components/serverButton/Server";
import Chatting from "./Chatting";

const roomId1 = process.env.REACT_APP_ROOMID1;
const roomId2 = process.env.REACT_APP_ROOMID2;
const roomId3 = process.env.REACT_APP_ROOMID3;
const roomId4 = process.env.REACT_APP_ROOMID4;
const roomId5 = process.env.REACT_APP_ROOMID5;

function ChatRoom() {
  const navigate = useNavigate();

  const chatUser = useAppSelector((state) => state.socket.chat);

  const roomName = chatUser.find((room: any) => room.roomId);
  const userCount = chatUser.find((user: any) => user.userCount);
  const enter = chatUser.find((enter: any) => enter.rankByNickname);

  return (
    <MessageContainer>
      <MessageFormContainer>
        {/* 왼쪽 section */}

        <SeaContainer>
          <SeaTitleWrapper>
            {/* 채팅방 타이틀 */}
            <SeaTitle>
              {roomName?.roomId === roomId1 ? <span>Indoan Ocean</span> : null}
              {roomName?.roomId === roomId2 ? <span>Pacific Ocean</span> : null}
              {roomName?.roomId === roomId3 ? (
                <span>Atlantic Ocean</span>
              ) : null}
              {roomName?.roomId === roomId4 ? (
                <span>The Arctic Ocean</span>
              ) : null}
              {roomName?.roomId === roomId5 ? (
                <span>The Antarctic Ocean</span>
              ) : null}
            </SeaTitle>
          </SeaTitleWrapper>
          <ServerButtonContainer>
            <UserCounterContainer>
              {/* 채팅방 인원 */}
              <UserCounterWrapper>
                <UserCount>User Count: </UserCount>
                <UserCount>{userCount?.userCount}/20</UserCount>
              </UserCounterWrapper>

              {/* 유저 랭킹 */}
              <UserRankContainer>
                {enter?.rankByNickname.nickname}
              </UserRankContainer>
            </UserCounterContainer>
            <ServerContainer>
              <ServerTitle>Server</ServerTitle>
              <Server />
              <OutButtonContainer>
                <OutButton onClick={() => navigate("/home")}>Out</OutButton>
              </OutButtonContainer>
            </ServerContainer>
          </ServerButtonContainer>
        </SeaContainer>

        {/* 채팅 부분 */}
        <ChatContainer>
          <Chatting />
        </ChatContainer>
      </MessageFormContainer>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  background: #0096ff;
`;

const MessageFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SeaContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2.5;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const SeaTitleWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeaTitle = styled.span`
  font-size: 50px;
  background: #0096ff;
  padding: 0 20px;
`;

const ServerButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translate(50% 50%);
  border: 2px solid black;
  display: flex;
`;

const OutButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
`;

const OutButton = styled.div`
  width: 120px;
  height: 40px;
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

const UserCount = styled.span`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
`;

const UserCounterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const UserCounterWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const UserRankContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ServerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ServerTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
`;

const ChatContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 3;
  flex-direction: column;
`;

const MessageForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  /* flex: 1; */
  border: 4px solid yellow;
  resize: none;
  textarea {
    resize: none;
    width: 100%;
    border: none;
    font-size: 1.5em;
    &:focus {
      outline: none;
    }
  }
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 3;
  padding-top: 20px;
  justify-content: center;
  padding-right: 10px;
  button {
    width: 50px;
    height: 30px;
  }
`;

export default ChatRoom;
