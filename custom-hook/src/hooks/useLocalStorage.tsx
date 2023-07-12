import { useCallback, useState } from 'react';

/**
 * @name useLocalStorage
 * @description 로컬스토리지의 값을 가져오거나 저장, 삭제할 수 있는 커스텀 훅
 * @example
 * import { useLocalStorage } from '@hooks'
 *
 * function App() {
 *   const [authorizationToken] = useLocalStorage('token', '');
 *
 */
export const useLocalStorage = <T,>(
  key: string,
  defaultValue: T,
): [value: T, setValue: (value: T) => void, removeValue: () => void] => {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    const item = window.localStorage.getItem(key);

    try {
      return JSON.parse(item || 'null') ?? defaultValue;
    } catch {
      return item;
    }
  });

  const handleValue = useCallback((value: T): void => {
    setValue(value);

    window.localStorage.setItem(key, JSON.stringify(value));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveValue = useCallback((): void => {
    window.localStorage.removeItem(key);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [value, handleValue, handleRemoveValue];
};
