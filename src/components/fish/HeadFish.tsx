import React from "react";
import styled, { keyframes } from "styled-components";
import HeadfishTail from "../../assets/Headfish/HeadfishTail.svg";
import HeadfishBody from "../../assets/Headfish/HeadfishBody.svg";
import HeadfishTop from "../../assets/Headfish/HeadfishTop.svg";
import HeadfishBottom from "../../assets/Headfish/HeadfishBottom.svg";
import HeadfishHand from "../../assets/Headfish/HeadfishHand.svg";

const HeadFish = () => {
  return (
    <>
      <NimoWrapper>
        <Headfish>
          <Tail src={HeadfishTail} />

          <Top src={HeadfishTop} />
          <Bottom src={HeadfishBottom} />

          <Body src={HeadfishBody} />
          <Hand src={HeadfishHand} />
        </Headfish>
      </NimoWrapper>
    </>
  );
};

export default HeadFish;

const nimo1 = keyframes`
  0% {
    transform: scaleX(-1) translate(0vw);
  }
  100% {
    transform: scaleX(-1) translate(-100vw);
  }
`;

const nimo2 = keyframes`
  0% {
    transform: translate(-100vw);
    
  }
  100% {
    transform:  translate(0);
  }
`;

const animation = keyframes`
  0% {
    transform:rotate(5deg) ;
  }
  50% {
    transform:rotate(-5deg);
  }
  100%{
    transform:rotate(5deg);
  }
`;
const animation2 = keyframes`
  0% {
    transform:rotate(5deg) ;
  }
  50% {
    transform:rotate(-5deg);
  }
  100%{
    transform:rotate(5deg);
  }
`;
const animation3 = keyframes`
  0% {
    transform:rotate(-5deg) ;
  }
  50% {
    transform:rotate(5deg);
  }
  100%{
    transform:rotate(-5deg);
  }
`;

const NimoWrapper = styled.div`
  position: sticky;
  transform: scaleX(-1);
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* animation: ${nimo1} 5s ease-in infinite alternate; */

  /* animation-name: ${nimo1};
  animation-duration: 5s;
  animation-timing-function: ease-in-out; */
  /* animation-iteration-count: infinite; */
`;

const Headfish = styled.div`
  width: 100%;
  height: 100%;
  border: solid blue 1px;
  &:active {
    img:first-child {
      animation: ${animation} 0.4s ease-in-out infinite;
    }
    img {
      animation: ${animation2} 0.3s ease-in-out infinite;
    }
    img:last-child {
      animation: ${animation3} 0.3s ease-in-out infinite;
    }
  }
  img {
    width: 100%;
    position: absolute;
  }
`;
const Body = styled.img`
  animation: ${animation2} 3s ease-in-out infinite;
`;
const Tail = styled.img`
  transform-origin: 40% 50%;
  animation: ${animation} 1.5s ease-in-out infinite;
`;

const Hand = styled.img`
  animation: ${animation2} 1s ease-in-out infinite;
`;

const Top = styled.img`
  animation: ${animation2} 3s ease-in-out infinite;
`;
const Bottom = styled.img`
  animation: ${animation2} 3s ease-in-out infinite;
`;
