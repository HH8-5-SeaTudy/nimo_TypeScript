import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { __getDateTodo } from "../redux/modules/dateTodos";
import {
  __getCheckInTimer,
  __getCheckOutTimer,
  __getUserinquire,
} from "../redux/modules/timer";
import backimg from "../assets/pixel/backimg.jpeg";
import MiniCalendar from "../components/calendar/MiniCalendar";
import fishImages from "../components/fish/FishImages";
import { __getUserProfile } from '../redux/modules/userData';
import CalendarVer2 from '../components/calendar/CalendarVer2';


const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //Todo zone
  const date = useAppSelector((state) => state.updateDate.date);
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);

  useEffect(() => {
    dispatch(__getDateTodo(moment(date).format("YYYY-MM-DD")));
  }, [date]);

  //SideBar hidden
  const [profileShow, setProfileShow] = useState(false);
  const [todoShow, setTodoShow] = useState(false);
  const [burgerShow, setBurgerShow] = useState(false);
  const [calendarShow, setCalendarShow] = useState(false);
  const [sideBarShow, setSideBarShow] = useState(false);
  const [modalShow, setModlaShow] = useState(false);

  //server zone
  const roomId1 = process.env.REACT_APP_ROOMID1;
  const roomId2 = process.env.REACT_APP_ROOMID2;
  const roomId3 = process.env.REACT_APP_ROOMID3;
  const roomId4 = process.env.REACT_APP_ROOMID4;
  const roomId5 = process.env.REACT_APP_ROOMID5;
  
  //Inventory
  const userData = useAppSelector((state) => state.userData.userProfile);
  const userPoint = userData.point;

  useEffect(() => {
    dispatch(__getUserProfile());
    document.body.style.overflow = "hidden";
  }, []);


  const containerRef = useRef<HTMLDivElement>(null); // 드래그 할 영역 네모 박스 Ref


  const [originPos, setOriginPos] = useState({ x: 0, y: 0 }); // 드래그 전 포지션값 (e.target.offset의 상대 위치)
  const [clientPos, setClientPos] = useState({ x: 0, y: 0 }); // 실시간 커서위치인 e.client를 갱신하는값
  const [pos, setPos] = useState({ left: 0, top: 0 }); // 실제 drag할 요소가 위치하는 포지션값
  const [size, setSize] = useState({  width:'',height: '',}); // 실제 drag할 요소가 위치하는 포지션값
  const [dTest, setDTest] = useState(Array.from({length : 25}, (v,i)=> {
    return [60 * i,100]}));
  
  // console.log('드래그 전 포지션값',originPos)
  // console.log('실시간 커서위치',clientPos)
  // console.log('실제 drag할 요소',pos)
  
  
  const dragStartHandler = (e: any) => {
    const blankCanvas: any = document.createElement('canvas')
    blankCanvas.classList.add("canvas");
    e.dataTransfer?.setDragImage(blankCanvas, 0, 0);
    document.body?.appendChild(blankCanvas); 
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
    
    e.dataTransfer.effectAllowed = "move"; // 크롬의그린 +아이콘 제거
    console.log('e',e)
    const originPosTemp = { ...originPos };
    originPosTemp["x"] = e.target.offsetLeft;
    originPosTemp["y"] = e.target.offsetTop;
    console.log("originPosTemp", originPosTemp);
    setOriginPos(originPosTemp); //드래그 시작할때 드래그 전 위치값을 저장
  
    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);
  };
  
  const dragHandler = (e: any) => {
    const PosTemp = { ...pos };
    PosTemp["left"] = e.target.offsetLeft + e.clientX - clientPos.x;
    PosTemp["top"] = e.target.offsetTop + e.clientY - clientPos.y;
    setPos(PosTemp);
  
    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);
  };
  const dragOverHandler = (e: any) => {
    e.preventDefault(); // 드래그시에 플라잉백하는 고스트이미지를 제거한다
  };
  
  const isInsideDragArea = (e:any) => {
  
  } 
  
  const dragEndHandler = (e: any) => {
    // if (clientPos.x < originPos.x + 50) {
    //    const posTemp = { ...pos };
    //   posTemp["left"] = originPos.x;
    //   posTemp["top"] = originPos.y;
    //   setPos(posTemp);
    // } else{
    //   setSize({
    //     width:'120px',
    //     height: '120px',
    //   })
    // }
    setSize({
          width:'100px',
          height: '100px',
        })


       // 캔버스 제거
       const canvases = document.getElementsByClassName("canvas");
       for (let i = 0; i < canvases.length; i++) {
         let canvas = canvases[i];
         canvas.parentNode?.removeChild(canvas);
     }
      // 캔버스로 인해 발생한 스크롤 방지 어트리뷰트 제거
    document.body.removeAttribute("style");  
    document.body.style.overflow = "hidden";
  };

  return (
    <Layer>
{/*       
       {modalShow && <CalendarVer2 />} 
      <button onClick={()=>{
        dispatch(__getCheckInTimer());
      }}>start</button>
      <button onClick={()=>{
        dispatch(__getCheckOutTimer());
      }}> stop</button>
    
      <button
        onClick={() => {
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
          navigate("/chat", {
            state: {
              id: roomId5,
            },
          });
        }}
      >
        서버5
      </button>  */}
     
      <MainBox  ref={containerRef}>
        <InvenLayout>  
          {fishImages.map((data:any, i:number)=>{
          return (
          <Label>
            <Bubble>  
              <BubbleA></BubbleA>
            </Bubble>
            <FishImg 
            draggable
            onDragStart={(e) => {
              dragStartHandler(e);
            }}
            onDrag={(e) => dragHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragEnd={(e) => 
              {
                dragEndHandler(e);
                let tempData = [...dTest];
                tempData[i] = [tempData[i][0]-pos.left,tempData[i][1]-pos.top];
                setDTest([...tempData]);
              }
            }
            // style={{left: dTest[i][0], top: dTest[i][1],  width: size.width === '' ? '60px' : size.width, height: size.height === '' ? '50px':size.height  }}
            src={data.image} alt="" />
          </Label>
          )
        })}
        </InvenLayout>
        <Inventory>     
        {fishImages.map((data:any, i:number)=>{
                          return (
                            <>
                              <InventoryFish >
                                {userPoint >= data.point ?
                                <>
                                <FishItem 
                                draggable
                                onDragStart={(e) => {
                                  dragStartHandler(e);
                                }}
                                onDrag={(e) => dragHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDragEnd={(e) => 
                                  {
                                    dragEndHandler(e);
                                    let tempData = [...dTest];
                                    tempData[i] = [tempData[i][0]-pos.left,tempData[i][1]-pos.top];
                                    setDTest([...tempData]);
                                  }
                                }
                                style={{left: dTest[i][0], top: dTest[i][1],  width: size.width === '' ? '60px' : size.width, height: size.height === '' ? '50px':size.height  }}
                                src={data.image}></FishItem>
                                </>
                                :
                                <>           
                                {/* <BoxCover readOnly></BoxCover> */}
                                <FishItem src={data.image}></FishItem>
                                </>
                                }
                              </InventoryFish>
                            </>
                          )
                      })}
        </Inventory>
        
        <SideBarLayer style={{ left: sideBarShow ? "0"  :"-300px" }}>
          <SideBar>
            <SideBar>
              <SideProfile onClick={() => setProfileShow(!profileShow)}>
                프로필헤더
              </SideProfile>
              <SideProfileBox profileShow={profileShow}>
                <ProfileLeft>
                  <ProfileFish></ProfileFish>
                </ProfileLeft>
                <ProfileRight>
                  <Name>name</Name>
                  <StudyTime>총 공부시간</StudyTime>
                </ProfileRight>
              </SideProfileBox>
              <SideCalendar onClick={() => setCalendarShow(!calendarShow)}>
                캘린더헤더
              </SideCalendar>
              <SideCalendarBox calendarShow={calendarShow}>
                <MiniCalendar></MiniCalendar>
              </SideCalendarBox>
              <SideTodoList draggable>
                <Title onClick={() => setTodoShow(!todoShow)}>
                  투두리스트헤더
                </Title>
                <CalendarBtn
                  onClick={() => setModlaShow(!modalShow)}
                ></CalendarBtn>
              </SideTodoList>
              <SideTodoListBox todoShow={todoShow}>
                {dateTodos &&
                  dateTodos.map((list) =>
                    list.todoList?.map((item) => (
                      <Todo>
                        <TodoCheck></TodoCheck>
                        <TodoTitle>{item.content}</TodoTitle>
                        <TodoDelete></TodoDelete>
                      </Todo>
                    ))
                  )}
              </SideTodoListBox>
              <SideInventory onClick={() => setBurgerShow(!burgerShow)}>
                인벤토리헤더
              </SideInventory>
              <SideInventoryBox burgerShow={burgerShow}>
                <InventoryLayer>
                  <NextFishBox>
                  </NextFishBox>
                </InventoryLayer>
              </SideInventoryBox>
            </SideBar>
          </SideBar>
          <SideBarBtn onClick={() => setSideBarShow(!sideBarShow)}></SideBarBtn>
        </SideBarLayer>
      </MainBox>
    </Layer>
  );
};

export default Home;


//
interface ProfileLayerProps {
  profileShow: boolean;
}
interface BurgerLayerProps {
  burgerShow: boolean;
}
interface TodoLayerProps {
  todoShow: boolean;
}
interface CalendarLayerProps {
  calendarShow: boolean;
}
interface InventoryLayerProps {
  inventoryShow: boolean;
}

const Layer = styled.section`
 position:relative;
  width: 100%;
  height: 90vh;
  background: url(${backimg});
  background-size: 100% 100vh;
  overflow: hidden;
`;

const MainBox = styled.div`
  border: solid red 1px;
  height: 90vh;
  position: relative;
  overflow:hidden;
`;

const Inventory = styled.div`
  border: solid red 2px;
  width: 90vw;
  height: 50px;
  position: absolute;
  display: flex;
  z-index:6;
  overflow:hidden ;
`
const InventoryFish = styled.div`
  border: solid red 2px;
  height:50px;
  width:60px;
  display: grid;
  grid-template-rows: repeat(25, 60px);
`
const FishItem =styled.img`
  width:60px;
  height:50px;
  position:fixed;
`

const SideBarLayer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  transition: all 0.3s;
`;
const SideBarBtn = styled.div`
  width: 20px;
  height: 100px;
  background-color: red;
`;
const SideBar = styled.div`
  position: relative;
  border: solid red 1px;
  background-color: white;
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const SideProfile = styled.div`
  border: solid red 1px;
  height: 30px;
`;
const SideCalendar = styled.div`
  border: solid red 1px;
  height: 30px;
`;
const SideTodoList = styled.div`
  border: solid red 1px;
  height: 30px;
  display: flex;
`;
const SideInventory = styled.div`
  border: solid red 1px;
  height: 30px;
`;
//
const Title = styled.div`
  width: 90%;
`;
const CalendarBtn = styled.div`
  border: solid red 1px;
  width: 10%;
`;

const SideProfileBox = styled.div<ProfileLayerProps>`
  border: solid red 1px;
  height: 100px;
  display: ${({ profileShow }) => (profileShow ? "flex" : "none")};
`;
const ProfileLeft = styled.div`
  border: solid red 1px;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const ProfileFish = styled.div`
  border: solid red 1px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
`;
const ProfileRight = styled.div`
  border: solid red 1px;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Name = styled.div`
  border: solid red 1px;
  width: 60%;
  height: 40px;
  margin: auto;
`;
const StudyTime = styled.div`
  border: solid red 1px;
  width: 60%;
  height: 40px;
  margin: auto;
`;

const SideCalendarBox = styled.div<CalendarLayerProps>`
  border: solid red 1px;
  display: ${({ calendarShow }) => (calendarShow ? "block" : "none")};
`;
const SideTodoListBox = styled.div<TodoLayerProps>`
  border: solid red 1px;
  display: ${({ todoShow }) => (todoShow ? "block" : "none")};
`;
const Todo = styled.div`
  border: solid red 1px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;
const TodoCheck = styled.div`
  border: solid red 1px;
  width: 50px;
  height: 30px;
`;
const TodoTitle = styled.div`
  border: solid red 1px;
  width: 300px;
  height: 30px;
`;
const TodoDelete = styled.div`
  border: solid red 1px;
  width: 50px;
  height: 30px;
`;
const SideInventoryBox = styled.div<BurgerLayerProps>`
  border: solid red 1px;
  height: 300px;
  display: ${({ burgerShow }) => (burgerShow ? "block" : "none")};
`;
const InventoryLayer = styled.div`
  height: 100%;
  box-sizing:border-box;
`;
const NextFishBox = styled.div`
  border: solid red 1px;
  width: 100%;
  height: 100%;
  box-sizing:border-box;
`;
///
const InvenLayout = styled.div`
  border:solid red 1px;
  width:100vw;
  height: 3.2em;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  z-index: 1;
`

const animateBubble = keyframes`
  0%, 100% {
    transform: translate(0, 3%);
}
25% {
    transform: translate(-3%, 0);
}
50% {
    transform: translate(0, -3%);
}
75% {
    transform: translate(3%, 0);
}
`;

const Label =styled.div`
  border: solid red 1px;
  width: 3em;
  height: 3em;
  animation: ${animateBubble} 4s ease-in-out infinite;
  display: block;
  -webkit-tap-highlight-color: transparent;
  padding: 0.1em 0.1em;
  &:hover{
    width: 3.2em;
    height: 3.2em;
    div{
    width: 2.9em;
    height: 2.9em;
    }
    img{
      width:2.2em;
      height:1.7em;
    }
    }
`
const Bubble = styled.div`
    background-image:  radial-gradient( 8% 8% at 22% 28%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 23% 27%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 24% 26%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 25% 25%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 26% 24%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 27% 23%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 28% 22%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% );
    box-shadow: 0 -0.06em 0.1em hsl(0deg 0% 100%) inset, 0 -0.15em 0.4em hsl(196deg 90% 45%) inset, 0 0.05em 0.05em hsl(197deg 90% 45%) inset, 0.05em 0 0.1em hsl(0deg 0% 100%) inset, -0.05em 0 0.1em hsl(0deg 0% 100%) inset, 0 0.1em 0.4em hsl(193deg 90% 60%) inset;
    cursor: pointer;
    position: relative;
    width: 2.7em;
    height: 2.7em;
    transform-style: preserve-3d;
    transition-property: box-shadow, transform, width, height;
    transition-timing-function: ease-in-out, ease-in-out, cubic-bezier(0.5,0.15,0.25,1.75), cubic-bezier(0.5,0.15,0.25,1.75);
    will-change: transform;
    -webkit-appearance: none;
    appearance: none;
    z-index: 0;
    border-radius: 50%;
    transition-duration: 0.2s;
    display: block;
    -webkit-tap-highlight-color: transparent;
    border:0;
    outline:0;

 `
const BubbleA =styled.div`
    background: radial-gradient(100% 100% at center,hsla(0,0%,0%,0) 35%,hsla(0,0%,0%,0.2) 48%,hsla(0,0%,0%,0) 50%);
    filter: blur(4px);
    top: 0.6em;
    left: 0.6em;
    width: 100%;
    height: 100%;
    transform: translate3d(0,0,-1px);
    z-index: -2;
    content: "";
    display: block;
    position: absolute;
    transition-timing-function: cubic-bezier(0.5,0.15,0.25,1.75);
    border-radius: 50%;
    transition-duration: 0.2s;
 `  
 const FishImg = styled.img`
  width:2em;
  height:1.5em;
 position:absolute;
 top: 0.7em;
 left: 0.5em;
 `