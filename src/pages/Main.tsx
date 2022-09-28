import React from 'react';
import styled,{keyframes} from 'styled-components';
import CalendarVer2 from '../components/calendar/CalendarVer2';
import fishImages from "../components/fish/FishImages";


const Main = () => {
  return (
    <>
    <InvenLayout>  
      {fishImages.map((data:any, i:number)=>{
      return (
   
      <Label>
        <Bubble>  
          <FishImg src={data.image} alt="" />
          <BubbleA></BubbleA>
        </Bubble>
      
      </Label>
    
      )
    })}</InvenLayout>
  
    </>
    
    
  );
};

export default Main;
const InvenLayout = styled.div`
border:solid red 1px;
  width:100vw;
  height: 5em;
  display: flex;

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
    display: none;
}
`;

const Label =styled.div`
border: solid red 1px;
width: 3em;
    height: 2em;
  animation: ${animateBubble} 4s ease-in-out infinite;
  //애니메
  display: block;
  -webkit-tap-highlight-color: transparent;
  &:hover,&:focus {
    div{
      transform: scale(1);
      width: 2em;
		  height: 2em;
    }
    img {
      transform: scale(1);
      width: 2em;
		  height: 2em;
    }
  }
`
const Bubble = styled.div`
    background-image:  radial-gradient( 8% 8% at 22% 28%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 23% 27%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 24% 26%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 25% 25%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 26% 24%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 27% 23%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% ), radial-gradient( 8% 8% at 28% 22%, hsl(0, 0%, 100%) 45%, hsla(0, 0%, 100%, 0) 50% );
    box-shadow: 0 -0.06em 0.1em hsl(0deg 0% 100%) inset, 0 -0.15em 0.4em hsl(196deg 90% 45%) inset, 0 0.05em 0.05em hsl(197deg 90% 45%) inset, 0.05em 0 0.1em hsl(0deg 0% 100%) inset, -0.05em 0 0.1em hsl(0deg 0% 100%) inset, 0 0.1em 0.4em hsl(193deg 90% 60%) inset;
    cursor: pointer;
    position: relative;
    width: 2em;
    height: 2em;
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
   width:25px;
  height:20px;
 position:absolute;
 top: 5px;
 left: 3px;
 `