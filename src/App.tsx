import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion';

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #00a5ff;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale: 1.5 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
