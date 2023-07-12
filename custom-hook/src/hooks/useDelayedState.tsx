import { useCallback, useEffect, useRef, useState } from 'react';

export const useDelayedState = (
  initialState = false
): [boolean, (newState: boolean, delay: number) => void, () => void] => {
  const [state, setState] = useState(initialState);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLazySetState = useCallback((newState: boolean, delay: number) => {
    if (delay === 0) {
      setState(newState);

      return;
    }

    if (timeoutRef && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setState(newState);

      timeoutRef.current = null;
    }, delay);
  }, []);

  const handleCancelSetState = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = null;
    }
  }, []);

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    []
  );

  return [state, handleLazySetState, handleCancelSetState];
};
