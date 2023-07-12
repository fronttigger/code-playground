import { useState, useCallback } from 'react';

/**
 * @name useBooleanState
 * @description useState를 통한 boolean 타입의 상태를 편하게 사용할 수 있는 커스텀 훅
 * @param {boolean} defaultValue - 초기 상태 값
 * @example
 * import { useBooleanState } from '@hooks'
 *
 * function App() {
 *    const [isActive, handleActiveSwitch, handleInActiveSwitch, handleToggleSwitch] = useBooleanState(false);
 *
 *    return <Switch defaultValue={isActive} value={isActive} onChange={handleToggleSwitch} />
 * }
 */
export const useBooleanState = (
  defaultValue = false,
): readonly [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState(defaultValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue((state) => !state);
  }, []);

  return [value, setTrue, setFalse, toggle] as const;
};
