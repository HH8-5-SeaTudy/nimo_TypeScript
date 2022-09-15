import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ReactComponent as BurgerIcon } from "../../assets/icon/BurgerIcon.svg";

const BurgerSidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <BurgerSide onClick={() => setShow(!show)}>
        <BurgerIconBox>
          <Burger />
        </BurgerIconBox>
      </BurgerSide>
      <BurgerLayer show={show}>
        <BugerBox>
          <Link to='/statistics' style={{ textDecoration: 'none' }}><p>통계페이지로 이동!!!!</p></Link>
        </BugerBox>
        <CloseBtn onClick={() => setShow(!show)}></CloseBtn>
      </BurgerLayer>
    </div>
  );
};

export default BurgerSidebar;

const BurgerSide = styled.div`
  position: absolute;
  width: 25px;
height: 47%;  
  bottom: 0;
  left: 0px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const BurgerIconBox = styled.div`
  position: absolute;
  width: 60px;
  height: 75px;
  left: -5px;
  top: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
  border-radius: 40px;
`;

const Burger = styled(BurgerIcon)`
  position: absolute;
`;
interface BurgerLayerProps {
  show: boolean;
}

const BurgerLayer = styled.div<BurgerLayerProps>`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 359px;
  height: 47%;  
  transition: all 0.5s;
  z-index: 1;
  left: ${({ show }) => (show ? "0px" : "-359px")};
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
const CloseBtn = styled.div`
  width: 25px;
`;
const BugerBox = styled.div`
  border: solid red 1px;
  padding: 3px 0px;
  width: 335px;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
    p{
      font-size: 30px;
      color: white;
      cursor: pointer;
    }
`;
