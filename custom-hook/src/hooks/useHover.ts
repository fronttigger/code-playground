import { useCallback, useRef, useState } from 'react';

/**
 * @description 마우스 호버 이벤트를 트리깅 할 때 사용하는 커스텀 훅
 * @example
 * import { useHover } from '@hooks/useHover'
 *
 * function App() {
 *   const [ref, isHover] = useHover<HTMLSpanElement>();
 *
 *   return (
 *     <span ref={ref}>
 *       {isHover ? '마우스를 치우세요' : '마우스를 올리세요'}
 *     </span>
 *   )
 * }
 */
export const useHover = <T extends HTMLElement>(): [
  (node?: T | null) => void,
  boolean,
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
    [handleMouseOver, handleMouseOut],
  );

  return [callbackRef, isHover];
};
