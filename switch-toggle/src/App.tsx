import styled from '@emotion/styled';
import { useState } from 'react';

import Switch from './components/Switch';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 230px;
  height: 100vh;
`;

function App() {
  const [zz, setZZ] = useState(false);

  return (
    <Wrapper>
      <Switch defaultValue={true} value={zz} onChange={setZZ} />
    </Wrapper>
  );
}

export default App;
