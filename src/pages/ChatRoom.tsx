import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../components/hooks/reduxHooks";
import { addUser } from "../redux/modules/socket";
import Chatting from "./Chatting";
import Server from "../components/serverButton/Server";
import island from "../assets/pixel/island.png";

const roomId1 = process.env.REACT_APP_ROOMID1;
const roomId2 = process.env.REACT_APP_ROOMID2;
const roomId3 = process.env.REACT_APP_ROOMID3;
const roomId4 = process.env.REACT_APP_ROOMID4;
const roomId5 = process.env.REACT_APP_ROOMID5;

function ChatRoom() {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const { id }: any = location.state;

  useEffect(() => {
    dispatch(addUser);
  }, []);

  return (
    <MessageContainer>
      <MessageFormContainer>
        {/* 왼쪽 section */}
        <LeftSide>
          <TopBox>
            {/* 채팅방 타이틀 */}

            <OceanName>
              <>
                {id === roomId1 ? <span>Indian Ocean</span> : null}
                {id === roomId2 ? <span>Pacific Ocean</span> : null}
                {id === roomId3 ? <span>Atlantic Ocean</span> : null}
                {id === roomId4 ? <span>The Arctic Ocean</span> : null}
                {id === roomId5 ? <div>The Antarctic Ocean</div> : null}
              </>
            </OceanName>
            <HandleSide>
              <Server />
            </HandleSide>
          </TopBox>
          <BottomBox>
            <Island src={island} />
          </BottomBox>
        </LeftSide>

        {/* 채팅 부분 */}
        <SeaContainer>
          <ChatContainer>
            <Chatting />
          </ChatContainer>
        </SeaContainer>
      </MessageFormContainer>
    </MessageContainer>
  );
}

const LeftSide = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;
const TopBox = styled.div`
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
  height: 77%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`;
const BottomBox = styled.div`
  height: 20%;
`;
const Island = styled.img`
  width: 100%;
  height: 100%;
`;
const OceanName = styled.div`
  height: 120px;
  background: #0096ff;
  font-size: 50px;
  line-height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid black;
  margin: 0 10px;

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
const HandleSide = styled.div`
  height: 80%;
`;

const MessageContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
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

const ChatContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 3;
  flex-direction: column;
`;

export default ChatRoom;
