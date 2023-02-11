import { useState } from 'react';
import { Toggle, Wrapper } from './styled';

interface SwitchProps {
  id?: string;
  defaultValue?: boolean;
  value: boolean;
  onChange?: (value: boolean) => void;
}

const Switch = ({
  id = 'switch',
  defaultValue,
  value,
  onChange,
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(() => {
    if (defaultValue === undefined) {
      return value;
    }

    return defaultValue;
  });

  return (
    <Wrapper htmlFor={id} isChecked={isChecked}>
      <Toggle
        type='checkbox'
        id={id}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked((state) => !state);
          onChange?.(e.target.checked);
        }}
      />
    </Wrapper>
  );
};

export default Switch;
