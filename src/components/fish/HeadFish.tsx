import React from "react";
import styled, { keyframes } from "styled-components";
import HeadfishTail from "../../image/Headfish/HeadfishTail.svg";
import HeadfishBody from "../../image/Headfish/HeadfishBody.svg";
import HeadfishTop from "../../image/Headfish/HeadfishTop.svg";
import HeadfishBottom from "../../image/Headfish/HeadfishBottom.svg";
import HeadfishHand from "../../image/Headfish/HeadfishHand.svg";

const HeadFish = () => {
  return (
    <>
      <Headfish>
        <Tail src={HeadfishTail} />

        <Top src={HeadfishTop} />
        <Bottom src={HeadfishBottom} />

        <Body src={HeadfishBody} />
        <Hand src={HeadfishHand} />
      </Headfish>
    </>
  );
};

export default HeadFish;

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

const Headfish = styled.div`
  position: absolute;
  width: 20%;
  height: 20%;
  left: 30%;
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
