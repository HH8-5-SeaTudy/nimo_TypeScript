import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import fishImages from "../fish/FishImages";
import { __getUserProfile } from "../../redux/modules/userData";

import {
  __AllDeleteFishPosition,
  __deleteFishPosition,
  __getFishPosition,
  __postFishPosition,
} from "../../redux/modules/fishPosition";
import coral2 from "../../assets/pixel/coral2.png";

const FishIventory = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userData.userProfile);
  const userPoint = userData.point;
  const positionData = useAppSelector((state) => state.fishPosition.position);

  useEffect(() => {}, [positionData]);

  useEffect(() => {
    dispatch(__getUserProfile());
    dispatch(__getFishPosition());
  }, []);

  const containerRef = useRef<HTMLDivElement>(null); // 드래그 할 영역 네모 박스 Ref

  const [originPos, setOriginPos] = useState({ x: 0, y: 0 }); // 드래그 전 포지션값 (e.target.offset의 상대 위치)
  const [clientPos, setClientPos] = useState({ x: 0, y: 0 }); // 실시간 커서위치인 e.client를 갱신하는값
  const [pos, setPos] = useState({ left: 0, top: 0 }); // 실제 drag할 요소가 위치하는 포지션값
  const [dTest, setDTest] = useState(
    Array.from({ length: 25 }, (v, i) => {
      return [0, 0];
    })
  );

  useEffect(() => {
    let tempData = [...dTest];

    positionData.map((v) => {
      tempData[v.fishNum] = [v.left, v.top];
    });

    setDTest([...tempData]);
  }, [positionData]);

  const [dSize, setDSize] = useState(
    Array.from({ length: 25 }, (v, i) => {
      return [0, 0];
    })
  );

  const dragStartHandler = (e: any) => {
    const blankCanvas: any = document.createElement("canvas");
    blankCanvas.classList.add("canvas");
    e.dataTransfer?.setDragImage(blankCanvas, 0, 0);
    document.body?.appendChild(blankCanvas);
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
    e.dataTransfer.effectAllowed = "move"; // 크롬의그린 +아이콘 제거

    const originPosTemp = { ...originPos };
    originPosTemp["x"] = e.target.offsetLeft;
    originPosTemp["y"] = e.target.offsetTop;
    setOriginPos(originPosTemp); //드래그 시작할때 드래그 전 위치값을 저장

    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);
  };

  const dragHandler = (e: any, i: number) => {
    const PosTemp = { ...pos };
    PosTemp["left"] = e.target.offsetLeft + e.clientX - clientPos.x;
    PosTemp["top"] = e.target.offsetTop + e.clientY - clientPos.y;
    let tempData = [...dTest];
    tempData[i][0] = e.target.offsetLeft + e.clientX - clientPos.x;
    tempData[i][1] = e.target.offsetTop + e.clientY - clientPos.y;
    setDTest(tempData);
    setPos(PosTemp);

    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault(); // 드래그시에 플라잉백하는 고스트이미지를 제거한다
  };

  const dragEndHandler = (e: any, i: number) => {
    // 범위조건

    let tempSize = [...dSize];
    tempSize[i][0] = 100;
    tempSize[i][1] = 70;
    setDSize(tempSize);

    let tempData = [...dTest];
    tempData[i][0] = e.target.offsetLeft + e.clientX - clientPos.x;
    tempData[i][1] = e.target.offsetTop + e.clientY - clientPos.y;
    setDTest(tempData);

    dispatch(
      __postFishPosition({
        fishNum: i,
        left: dTest[i][0],
        top: dTest[i][1],
      })
    );

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

  const FishDeleteHandler = (e: any, i: number) => {
    e.preventDefault();
    alert("내가 사라져볼게 얍!");
    dispatch(__deleteFishPosition(i));
  };
  const AllFishDeleteHandler = () => {
    alert("전부 사라져볼게 얍!");
    dispatch(__AllDeleteFishPosition());
  };

  return (
    <InvenLayout ref={containerRef}>
      <Coral>
        <Img src={coral2} onClick={() => AllFishDeleteHandler()} />
      </Coral>
      {fishImages.map((data: any, i: number) => {
        return (
          <Label key={i}>
            <FishImg
              draggable={userPoint >= data.point ? true : false}
              onDragStart={(e) => dragStartHandler(e)}
              onDrag={(e) => dragHandler(e, i)}
              onDragOver={(e) => dragOverHandler(e)}
              onDragEnd={(e) => {
                dragEndHandler(e, i);
              }}
              style={{
                left: dTest[i][0] === 0 ? "0.5em" : dTest[i][0],
                top: dTest[i][1] === 0 ? "0.85em" : dTest[i][1],

                width: dTest[i][0] === 0 ? "" : 100,
                height: dTest[i][1] === 0 ? "" : 70,
              }}
              src={data.image}
              alt=""
              onContextMenu={(e) => FishDeleteHandler(e, i)}
            />
            <Bubble
              style={{
                display: dTest[i][1] === 0 ? "block" : "none",
                boxShadow:
                  userPoint >= data.point
                    ? ""
                    : "0 -0.06em 0.1em hsl(180deg 0% 100%) inset, 0 -0.15em 0.4em hsl(0deg 90% 45%) inset, 0 0.05em 0.05em hsl(0deg 90% 45%) inset, 0.05em 0 0.1em hsl(180deg 0% 100%) inset, -0.05em 0 0.1em hsl(180deg 0% 100%) inset, 0 0.1em 0.4em hsl(0deg 90% 60%) inset",
              }}
            >
              <BubbleA></BubbleA>
            </Bubble>
          </Label>
        );
      })}
    </InvenLayout>
  );
};

export default FishIventory;

const InvenLayout = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  width: 100vw;
  height: 3.4em;
  display: flex;
  justify-content: center;
  bottom: 0;
  z-index: 4;
  position: absolute;
`;

const Coral = styled.div`
  position: absolute;
  left: 20px;
  bottom: 10px;
  width: 100px;
  height: 80px;
`;
const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;

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

const Label = styled.div`
  width: 3em;
  height: 3em;
  animation: ${animateBubble} 4s ease-in-out infinite;
  display: block;
  -webkit-tap-highlight-color: transparent;
  padding: 0.1em 0.1em;
  &:active {
    width: 3.2em;
    height: 3.2em;
    div {
      width: 2.9em;
      height: 2.9em;
    }
    img {
      width: 2.2em;
      height: 1.7em;
    }
  }
`;
const Bubble = styled.div`
  background-image: radial-gradient(
      8% 8% at 22% 28%,
      hsl(0, 0%, 100%) 45%,
      hsla(0, 0%, 100%, 0) 50%
    ),
    radial-gradient(
      8% 8% at 23% 27%,
      hsl(0, 0%, 100%) 45%,
      hsla(0, 0%, 100%, 0) 50%
    ),
    radial-gradient(
      8% 8% at 24% 26%,
      hsl(0, 0%, 100%) 45%,
      hsla(0, 0%, 100%, 0) 50%
    ),
    radial-gradient(
      8% 8% at 25% 25%,
      hsl(0, 0%, 100%) 45%,
      hsla(0, 0%, 100%, 0) 50%
    ),
    radial-gradient(
      8% 8% at 26% 24%,
      hsl(0, 0%, 100%) 45%,
      hsla(0, 0%, 100%, 0) 50%
    ),
    radial-gradient(
      8% 8% at 27% 23%,
      hsl(0, 0%, 100%) 45%,
      hsla(0, 0%, 100%, 0) 50%
    ),
    radial-gradient(
      8% 8% at 28% 22%,
      hsl(0, 0%, 100%) 45%,
      hsla(0, 0%, 100%, 0) 50%
    );
  box-shadow: 0 -0.06em 0.1em hsl(0deg 0% 100%) inset,
    0 -0.15em 0.4em hsl(196deg 90% 45%) inset,
    0 0.05em 0.05em hsl(197deg 90% 45%) inset,
    0.05em 0 0.1em hsl(0deg 0% 100%) inset,
    -0.05em 0 0.1em hsl(0deg 0% 100%) inset,
    0 0.1em 0.4em hsl(193deg 90% 60%) inset;
  cursor: pointer;
  position: absolute;
  width: 2.7em;
  height: 2.7em;
  transform-style: preserve-3d;
  transition-property: box-shadow, transform, width, height;
  transition-timing-function: ease-in-out, ease-in-out,
    cubic-bezier(0.5, 0.15, 0.25, 1.75), cubic-bezier(0.5, 0.15, 0.25, 1.75);
  will-change: transform;
  -webkit-appearance: none;
  appearance: none;
  z-index: 0;
  border-radius: 50%;
  transition-duration: 0.2s;
  display: block;
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: 0;
`;
const BubbleA = styled.div`
  background: radial-gradient(
    100% 100% at center,
    hsla(0, 0%, 0%, 0) 35%,
    hsla(0, 0%, 0%, 0.2) 48%,
    hsla(0, 0%, 0%, 0) 50%
  );
  filter: blur(4px);
  top: 0.6em;
  left: 0.6em;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, -1px);
  z-index: -2;
  content: "";
  display: block;
  position: absolute;
  transition-timing-function: cubic-bezier(0.5, 0.15, 0.25, 1.75);
  border-radius: 50%;
  transition-duration: 0.2s;
`;
const FishImg = styled.img`
  width: 2em;
  height: 1.5em;
  position: fixed;
  z-index: 2;
`;
