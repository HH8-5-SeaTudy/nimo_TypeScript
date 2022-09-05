import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as BurgerIcon } from "../../image/icon/BurgerIcon.svg";

const BurgerSidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)}>
      <BurgerSide>
        <BurgerLayer show={show}>
          <BugerBox></BugerBox>
        </BurgerLayer>
      </BurgerSide>
      <BurgerIconBox>
        <Burger />
      </BurgerIconBox>
    </div>
  );
};

export default BurgerSidebar;

const Burger = styled(BurgerIcon)`
  position: absolute;
  right: 15px;
  top: 33px;
`;

const BurgerSide = styled.div`
  position: absolute;
  width: 24px;
  height: 554px;
  left: 0px;
  top: 467px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const BurgerIconBox = styled.div`
  position: absolute;
  width: 112px;
  height: 98px;
  left: -56px;
  top: 632px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
  border-radius: 40px;
`;

interface BurgerLayerProps {
  show : boolean;
}

const BurgerLayer = styled.div<BurgerLayerProps>`
  position: absolute;
  width: 359px;
  height: 554px;
  transition: all 0.5s;
  z-index: 1;
  left: ${({show}) => (show ? "0px" : "-359px")};
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const BugerBox = styled.div`
  width: 335px;
  height: 554px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
