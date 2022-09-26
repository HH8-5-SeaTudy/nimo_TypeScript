import React,{useState,useRef} from 'react';
import styled from 'styled-components';

const SideBarVer2 = () => {

const containerRef = useRef<HTMLDivElement>(null); // 드래그 할 영역 네모 박스 Ref
const dragComponentRef = useRef<HTMLDivElement>(null); // // 움직일 드래그 박스 Ref
const [originPos, setOriginPos] = useState({ x: 0, y: 0 }); // 드래그 전 포지션값 (e.target.offset의 상대 위치)
const [clientPos, setClientPos] = useState({ x: 0, y: 0 }); // 실시간 커서위치인 e.client를 갱신하는값
const [pos, setPos] = useState({ left: 0, top: 0 }); // 실제 drag할 요소가 위치하는 포지션값
const [size, setSize] = useState({ with: 100, height: 100 }); // 실제 drag할 요소가 위치하는 포지션값

console.log('드래그 전 포지션값',originPos)
console.log('실시간 커서위치',clientPos)
console.log('실제 drag할 요소',pos)


const dragStartHandler = (e: any) => {
  const blankCanvas: any = document.createElement('canvas')
  blankCanvas.classList.add("canvas");
  e.dataTransfer?.setDragImage(blankCanvas, 0, 0);
  document.body?.appendChild(blankCanvas); 
  
  e.dataTransfer.effectAllowed = "move"; // 크롬의그린 +아이콘 제거
  
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
  if (clientPos.x < originPos.x + 500) {
     const posTemp = { ...pos };
    posTemp["left"] = originPos.x;
    posTemp["top"] = originPos.y;
    setPos(posTemp);
  } else{
    setSize({
      with:400,
      height: 400,
    })
  }
   
     // 캔버스 제거
     const canvases = document.getElementsByClassName("canvas");
     for (let i = 0; i < canvases.length; i++) {
       let canvas = canvases[i];
       canvas.parentNode?.removeChild(canvas);
   }
    // 캔버스로 인해 발생한 스크롤 방지 어트리뷰트 제거
  document.body.removeAttribute("style");
   
    
};
  return (
    <> 
    <Layer ref={containerRef}>
      <SideBarBtn></SideBarBtn>
      <TestBox ref={dragComponentRef}
      draggable
      onDragStart={(e) => dragStartHandler(e)}
      onDrag={(e) => dragHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      style={{ left: pos.left, top: pos.top, width:size.with, height:size.height }}>안뇽</TestBox>
    </Layer>
    </>
   
  );
};

export default SideBarVer2;
const SideBarBtn = styled.div`
  border: solid black 2px;
  position:absolute;
  width:80px;
  height:80px;
  right: -100px;
  z-index: 5;
`
const Layer = styled.div`
  background-color:red;
  position: relative;
  height: 100vh - 65px;
  width: 30vw;
  /* left: -30vw; */
  z-index:5;
`

const TestBox = styled.div`
  background-color: black;
  position: absolute;
  width: 50px;
  height: 50px;
`