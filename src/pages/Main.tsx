import React, { useState } from 'react';
import styled,{keyframes} from 'styled-components';
import { rootCertificates } from 'tls';
import CalendarVer2 from '../components/calendar/CalendarVer2';
import fishImages from "../components/fish/FishImages";
import FishIventory from '../components/fish/FishIventory';


const Main = () => {

  const [toggle,setToggle] =useState(false)

    return (
    <Body>
      <UL>
        <Toggle onClick={()=>setToggle(!toggle)} toggle={toggle}>+</Toggle>
        <LI1 toggle={toggle} ><A style={{transform: 'rotate(calc(360deg/ -8 * 1))'}}>+</A></LI1> 
        <LI2 toggle={toggle} ><A style={{transform: 'rotate(calc(360deg/ -8 * 2))'}}>+</A></LI2> 
        <LI3 toggle={toggle} ><A style={{transform: 'rotate(calc(360deg/ -8 * 3))'}}>+</A></LI3> 
        <LI4 toggle={toggle} ><A style={{transform: 'rotate(calc(360deg/ -8 * 4))'}}>+</A></LI4> 
        <LI5 toggle={toggle} ><A style={{transform: 'rotate(calc(360deg/ -8 * 5))'}}>+</A></LI5> 
        <LI6 toggle={toggle} ><A style={{transform: 'rotate(calc(360deg/ -8 * 6))'}}>+</A></LI6> 
        <LI7 toggle={toggle} ><A style={{transform: 'rotate(calc(360deg/ -8 * 7))'}}>+</A></LI7> 
        <LI8 toggle={toggle} ><A style={{transform: 'rotate(calc(360deg/ -8 * 8))'}}>+</A></LI8> 
      </UL>
    </Body>
    
    
  );
};

export default Main;
interface ToggleProps {
  toggle: boolean;
}
const Body = styled.div`
  margin:0;
  padding:0;
  box-sizing: border-box;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  background: #2f363e;
`

const UL = styled.div`
  position:relative;
  width:280px;
  height:280px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LI1 = styled.div<ToggleProps>`
  position: absolute;
  left:0;
  list-style:none;
  transition: 0.5s;
  transition-delay: calc(0.1s *1);
  transform-origin: 140px;
  transform: ${({toggle})=>(toggle ? 'rotate(calc(360deg / 8 )) translateX(0px)': 'rotate(0deg) translateX(110px)')};
`


const LI2 = styled.div<ToggleProps>`
  position: absolute;
  left:0;
  list-style:none;
  transition: 0.5s;
  transition-delay: calc(0.1s *2);
  transform-origin: 140px;
  transform: ${({toggle})=>(toggle ? 'rotate(calc(360deg / 8 * 2)) translateX(0px)': 'rotate(0deg) translateX(110px)')};
`


const LI3 = styled.div<ToggleProps>`
  position: absolute;
  left:0;
  list-style:none;
  transition: 0.5s;
  transition-delay: calc(0.1s *3);
  transform-origin: 140px;
  transform: ${({toggle})=>(toggle ? 'rotate(calc(360deg / 8 * 3)) translateX(0px)': 'rotate(0deg) translateX(110px)')};
`

const LI4 = styled.div<ToggleProps>`
  position: absolute;
  left:0;
  list-style:none;
  transition: 0.5s;
  transition-delay: calc(0.1s *4);
  transform-origin: 140px;
  transform: ${({toggle})=>(toggle ? 'rotate(calc(360deg / 8 * 4 )) translateX(0px)': 'rotate(0deg) translateX(110px)')};
`

const LI5 = styled.div<ToggleProps>`
  position: absolute;
  left:0;
  list-style:none;
  transition: 0.5s;
  transition-delay: calc(0.1s *5);
  transform-origin: 140px;
  transform: ${({toggle})=>(toggle ? 'rotate(calc(360deg / 8 * 5 )) translateX(0px)': 'rotate(0deg) translateX(110px)')};
`

const LI6 = styled.div<ToggleProps>`

  position: absolute;
  left:0;
  list-style:none;
  transition: 0.5s;
  transition-delay: calc(0.1s *6);
  transform-origin: 140px;
  transform: ${({toggle})=>(toggle ? 'rotate(calc(360deg / 8 * 6 )) translateX(0px)': 'rotate(0deg) translateX(110px)')};
`

const LI7 = styled.div<ToggleProps>`

  position: absolute;
  left:0;
  list-style:none;
  transition: 0.5s;
  transition-delay: calc(0.1s *7);
  transform-origin: 140px;
  transform: ${({toggle})=>(toggle ? 'rotate(calc(360deg / 8 * 7)) translateX(0px)': 'rotate(0deg) translateX(110px)')};
`

const LI8 = styled.div<ToggleProps>`

  position: absolute;
  left:0;
  list-style:none;
  transition: 0.5s;
  transition-delay: calc(0.1s *8);
  transform-origin: 140px;
  transform: ${({toggle})=>(toggle ? 'rotate(calc(360deg / 8 * 8 )) translateX(0px)': 'rotate(0deg) translateX(110px)')};
`

const Toggle =styled.div<ToggleProps>`
  position: absolute;
  width: 60.7px;
  height: 60.7px;
  background: #2f363e;
  border: 2px solid white;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  font-size: 2em;
  transition: transform 1.25s;
  transform: ${({toggle})=>(toggle ? 'rotate(315deg)': '')};
`

const A = styled.div `
  display:flex;
  justify-content:center;
  align-items:center;
  width: 60px;
  height:60px;
  border: 2px solid red;
  border-radius: 50%;
  font-size: 1.5em;
`