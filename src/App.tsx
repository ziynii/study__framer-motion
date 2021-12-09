import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 800], [2, 0.1]);
  useEffect(() => {
    scale.onChange(() => console.log(scale.get()));
  }, [x]);
  return (
    <Wrapper>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
