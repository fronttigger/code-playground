import styled from '@emotion/styled';

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
  return (
    <Wrapper>
      <Button delay={2000}>Delay Button</Button>
    </Wrapper>
  );
}

export default App;
