import styled from '@emotion/styled';
import { useState } from 'react';

import Button from './compnents/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 230px;
  height: 100vh;
`;

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <button onClick={() => setToggle((state) => !state)}>dd</button>
      {toggle && <Button delay={2000}>Delay Button</Button>}
    </Wrapper>
  );
}

export default App;
