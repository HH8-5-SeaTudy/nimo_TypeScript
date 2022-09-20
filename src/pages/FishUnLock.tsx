import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

function FishUnLock() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const nextPlease = () => {
    setIsBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setIsBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <FishUnLockContainer>
      <AnimatePresence custom={isBack}>
        <FishSliderContainer
          custom={isBack}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </FishSliderContainer>
      </AnimatePresence>
      <button onClick={prevPlease}>Prev</button>
      <button onClick={nextPlease}>Next</button>
    </FishUnLockContainer>
  );
}

const boxVariants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
    rotateX: -180,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 360,
    transition: {
      duration: 1,
    },
  }),
};

const FishUnLockContainer = styled.div`
  width: 100%;
  /* height: 100px; */
  border: 12px solid red;
  height: 100vh;
`;

const FishSliderContainer = styled(motion.div)``;

export default FishUnLock;
