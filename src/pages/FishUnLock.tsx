import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image";

function FishUnLock() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <FishUnLockContainer>
      <AnimatePresence initial={false} custom={direction}>
        <FishSliderContainer>
          {/* 첫번째 cardView */}
          <FishSliderBorder>
            <BorderTitleContainer>
              <BorderTitleWrapper>
                <span>S</span>
                <span>e</span>
                <span>a</span>
                <span>T</span>
                <span>u</span>
                <span>d</span>
                <span>y</span>
              </BorderTitleWrapper>
            </BorderTitleContainer>
            <FishSliderSecondShadow>
              <FishCardWrapper
                key={page}
                src={images[imageIndex]}
                custom={direction}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </FishSliderSecondShadow>
          </FishSliderBorder>
        </FishSliderContainer>
        <div onClick={() => paginate(1)}>"왼쪽"</div>
        <div onClick={() => paginate(-1)}>"오른쪽"</div>
      </AnimatePresence>
    </FishUnLockContainer>
  );
}

const variants = {
  hidden: (direction: boolean) => ({
    x: direction ? window.outerWidth - 5 : -window.outerWidth + 5,
  }),
  visible: {
    x: 0,
  },
  exit: (direction: boolean) => ({
    x: direction ? -window.outerWidth + 5 : window.outerWidth - 5,
  }),
};

const animeTextup = keyframes`
   0% {
    transform: translate(-30%, 0);
  }
  50% {
    text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
  }
  100% {
    transform: translate(30%, 0);
  }
`;

const FishUnLockContainer = styled.div`
  width: 100%;
  /* height: 100px; */
  border: 12px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FishSliderContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const FishSliderBorder = styled.div`
  border: 8px solid black;
  width: 38%;
  height: 100%;
  box-shadow: 2px 2px 12px 5px red;
  position: absolute;
  left: 20%;
  border-radius: 40px;
  background-color: #6161e0;
`;

const BorderTitleContainer = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BorderTitleWrapper = styled.div`
  /* width: 100%; */
  /* height: 100%; */

  transform: rotate(-90deg);
  border: 2px solid blue;
  span {
    font-size: 5em;
    letter-spacing: 20px;
    color: #6161e0;
    animation: ${animeTextup} 1.5s infinite;
    &:nth-child(1) {
      animation-delay: 0.5s;
    }
    &:nth-child(2) {
      animation-delay: 0.6s;
    }
    &:nth-child(3) {
      animation-delay: 0.7s;
    }
    &:nth-child(4) {
      animation-delay: 0.8s;
    }
    &:nth-child(5) {
      animation-delay: 0.9s;
    }
    &:nth-child(6) {
      animation-delay: 1s;
    }
    &:nth-child(7) {
      animation-delay: 1.1s;
    }
  }
`;

const FishSliderSecondShadow = styled.div`
  border: 8px solid black;
  width: 50vw;
  height: 80%;
  top: 10%;
  left: 40%;
  border-radius: 40px;
  position: absolute;
`;

const FishCardWrapper = styled(motion.img)`
  width: 500px;
  border: 13px solid yellow;
  position: absolute;
  left: -10%;
  z-index: 5;
`;

export default FishUnLock;
