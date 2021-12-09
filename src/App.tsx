import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const boxVariants = {
  hover: {
    scale: 1.5,
    rotateZ: '90deg',
  },
  click: {
    scale: 1,
    borderRadius: '100px',
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} whileHover="hover" whileTap="click" />
    </Wrapper>
  );
}

export default App;
