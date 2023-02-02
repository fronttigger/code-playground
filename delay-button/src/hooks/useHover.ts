import { useCallback, useRef, useState } from 'react';

export const useHover = <T extends HTMLElement>(): [
  (node?: T | null) => void,
  boolean
] => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<T | null>(null);

  const handleMouseOver = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHover(false);
  }, []);

  const callbackRef = useCallback<(node?: null | T) => void>(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', handleMouseOver);
        ref.current.removeEventListener('mouseout', handleMouseOut);
      }

      ref.current = node || null;

      if (ref.current) {
        ref.current.addEventListener('mouseover', handleMouseOver);
        ref.current.addEventListener('mouseout', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, isHover];
};
