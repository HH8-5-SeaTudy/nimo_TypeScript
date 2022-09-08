import React, { useState } from "react";
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
        <BugerBox></BugerBox>
        <CloseBtn onClick={() => setShow(!show)}></CloseBtn>
      </BurgerLayer>
    </div>
  );
};

export default BurgerSidebar;

const BurgerSide = styled.div`
  position: absolute;
  width: 25px;
  height: 554px;
  left: 0px;
  top: 467px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const BurgerIconBox = styled.div`
  position: absolute;
  width: 50px;
  height: 80px;
  left: 0;
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
  top: 467px;
  width: 359px;
  height: 554px;
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
  width: 335px;
  height: 554px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
