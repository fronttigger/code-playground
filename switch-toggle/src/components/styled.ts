import styled from '@emotion/styled';

export const Wrapper = styled.label<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;

  width: 34px;
  height: 20px;

  border-radius: 100px;

  transition: background-color 0.3s;
  background-color: ${({ isChecked }) => (isChecked ? '#295CE0' : '#8c9cba')};

  & > input::before {
    transform: translateX(${({ isChecked }) => (isChecked ? 16 : 2)}px);
  }
`;

export const Toggle = styled.input`
  appearance: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #fff;
    transition: transform 0.3s ease-in-out;
  }
`;
