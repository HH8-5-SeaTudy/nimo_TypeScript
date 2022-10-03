import React from 'react';
import styled from 'styled-components';

const Test = () => {
  return (
<StatisticsLayer>
        <Layer>
          <LeftSide>
            <OceanName>        
              <p>태평양 영어</p>
              </OceanName>
            <HandleSide></HandleSide>
            <Island></Island>
          </LeftSide>
          <RightSide>
            <RankSide>
              <RankTitle>
                <p>
                  채팅
                  <br />
                  RANKING
                </p>
              </RankTitle>
              <RankBox>
                <Rank >
                  <RankNum>
                    <Num>1.</Num>
                  </RankNum>
                  <RankProfile 
                  // src={list.fish}
                  ></RankProfile>
                  <RankInfo>
                    <NickName>중표돌이</NickName>
                    <Point>포인트말고시간</Point>
                  </RankInfo>
                </Rank>
              </RankBox>
            </RankSide>
            <ChatSide>
              <ChatBox>
                <Message>
                  <Profile>
                    <Image></Image>
                    <Name>사이즈작게</Name>
                  </Profile>
                  <Text>예찬님예찬님예찬님예찬님예찬님예찬님예찬님예찬님예찬님</Text>
                </Message> 
                <MyMessage>
                  <TextBox>
                    <MyText>내 메세지는 프로필사진 필요없음요 </MyText>
                  </TextBox>
                </MyMessage>
              </ChatBox>
              <SendBox>
                <InputBox></InputBox>
                <SendBtn>버튼맘대루</SendBtn>
              </SendBox>
            </ChatSide>
          </RightSide>
        </Layer>
      </StatisticsLayer>
  );
};

export default Test;


const StatisticsLayer = styled.section`
  width: 100%;
  height: 90vh;
  background: #0096ff;
`;
const Layer = styled.div`
border:solid red 3px;
  width: 100vw;
  height: 100%;
  margin: auto;
  padding: 30px;
  display: flex;

`;

const LeftSide =styled.div`
  border: solid red 1px;
  width: 35%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`
const OceanName =styled.div`
border-radius: 6px 6px 0 0;
  height: 120px;
  background: #0096ff;
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

`
const HandleSide =styled.div`
   border: solid red 1px;
   height:70%;
`
const Island =styled.div`
  border: solid red 1px;
   height:30%;
`

const RightSide =styled.div`
border: solid red 1px;
width: 65%;
display: flex;
border-radius: 6px 6px 6px 6px;
box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`
const RankSide =styled.div`
  border-radius: 6px 0 0 0;
  width: 35%;
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`
const RankTitle =styled.div`
  border: solid red 1px;
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
`
const RankBox = styled.div`
border: solid red 1px;
padding-left: 5px;
background-color: #fff;
  height: 100%;
  overflow-y: scroll;
  border-radius: 0 0 0 6px;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0096ff;
    height: 5px;
  }
  div {
    &:first-child {
      margin-top: 2px;
    }
  }
`
const Rank = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  background-color: white;
  border-bottom: solid black 1px;
`;
const RankNum = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
`;
const Num = styled.div`
  height: 40px;
  width: 40px;
  margin: auto;
  display: flex;
  font-size: 25px;
  justify-content: center;
  align-items: center;
`;
const RankProfile = styled.img`
  width: 60px;
  height: 40px;
`;
const RankInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const NickName = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  line-height: 17px;
`;
const Point = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  line-height: 17px;
`;
const ChatSide =styled.div`
border-radius: 0 6px 6px 0;
  width: 65%;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  background-color: #fff;
`
const ChatBox = styled.div`
  border: solid red 2px;
  padding: 25px 35px;
  height: 90%;
  overflow-y: scroll;
`
const Message =styled.div`
    border: solid red 1px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`
const Profile =styled.div`
  border: solid red 1px;
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction:column;
  align-items:center;
`
const Image =styled.div`
  border: solid red 1px;
  width: 100%;
  height: 50px;

`
const Name = styled.div`
  border: solid red 1px;
  width: 100%;
  height: 20px;
`
const MyMessage =styled.div`
    border: solid red 1px;    
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    margin-left: 45px;

`
const TextBox =styled.div`
    float: right;
    margin-right: 0px !important;
    margin-left: auto;
`
const MyText = styled.div`
    background-color: #75C9FF !important;
    padding: 15px;
    border-radius: 12px;
`
const Text =styled.div`
  border: solid red 1px;
    margin: 0 35px;
    background-color: #e3effd;
    padding: 15px;
    border-radius: 12px;
`
const SendBox =styled.div`
  border: solid red 2px;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #75C9FF;
    border-top: 2px solid #EEE;
    
`
const InputBox =styled.input`
    border: none !important;
    width: 90%;
    height: 50px;
    margin-left: 20px;
    padding: 10px;
    overflow: visible;
`
const SendBtn = styled.div`
    color: #fff;
    border:solid red 1px;
    background-color: black;
    margin-right: 20px;
    width:50px;
    height: 50px;
    border-radius: 50%;
    font-size: 14pt;
    margin-left: 30px;
`