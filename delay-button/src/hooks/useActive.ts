import { useCallback, useRef, useState } from 'react';

export const useActive = <T extends HTMLElement>(): [
  (node?: T | null) => void,
  boolean
] => {
  const [isActvie, setIsActive] = useState(false);
  const ref = useRef<T | null>(null);

  const handleMouseDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsActive(false);
  }, []);

  const callbackRef = useCallback<(node?: null | T) => void>(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener('mousedown', handleMouseDown);
        ref.current.removeEventListener('mouseup', handleMouseUp);
      }

      ref.current = node || null;

      if (ref.current) {
        ref.current.addEventListener('mousedown', handleMouseDown);
        ref.current.addEventListener('mouseup', handleMouseUp);
      }
    },
    [handleMouseDown, handleMouseUp]
  );

  return [callbackRef, isActvie];
};
