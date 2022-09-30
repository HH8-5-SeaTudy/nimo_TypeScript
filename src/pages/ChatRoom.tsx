import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../components/hooks/reduxHooks";
import { __getChatroom } from "../redux/modules/socket";
import Chatting from "./Chatting";


const roomId1 = process.env.REACT_APP_ROOMID1;
const roomId2 = process.env.REACT_APP_ROOMID2;
const roomId3 = process.env.REACT_APP_ROOMID3;
const roomId4 = process.env.REACT_APP_ROOMID4;
const roomId5 = process.env.REACT_APP_ROOMID5;

function ChatRoom() {
  const navigate = useNavigate();
  const location = useLocation();

  const { id }: any = location.state;

  //기본설정---헤더, 토큰, 주소설정
  const dispatch = useAppDispatch();

  const roomIdHandler = () => {
    window.location.reload();
    dispatch(__getChatroom(id));
  };

  return (
    <MessageContainer>
      <MessageFormContainer>
        {/* 왼쪽 section */}
        <SeaContainer>
          <div>
            <button
              onClick={() => {
                roomIdHandler();
                navigate("/chat", {
                  state: {
                    id: roomId1,
                  },
                });
              }}
            >
              서버1
            </button>
            <button
              onClick={() => {
                roomIdHandler();
                navigate("/chat", {
                  state: {
                    id: roomId2,
                  },
                });
              }}
            >
              서버2
            </button>
            <button
              onClick={() => {
                roomIdHandler();
                navigate("/chat", {
                  state: {
                    id: roomId3,
                  },
                });
              }}
            >
              서버3
            </button>
            <button
              onClick={() => {
                roomIdHandler();
                navigate("/chat", {
                  state: {
                    id: roomId4,
                  },
                });
              }}
            >
              서버4
            </button>
            <button
              onClick={() => {
                roomIdHandler();
                navigate("/chat", {
                  state: {
                    id: roomId5,
                  },
                });
              }}
            >
              서버5
            </button>
          </div>
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
  border: 4px solid green;
  padding: 0 10px;
`;

const MessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  /* padding: 20px 10px; */
  /* flex: 4; */
  flex-direction: column-reverse;
  background-color: #b2c7d9;
`;

const MessageListContainer = styled.span`
  width: 100%;
  border: 1px solid black;
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
  flex: 2.5;
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
