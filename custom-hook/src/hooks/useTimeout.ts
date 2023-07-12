import { useEffect, useRef } from 'react';

/**
 * @description 특정 시간 이후 함수를 실행할 때 사용하는 커스텀 훅
 * @param {() => void} callback - timeout 이후 호출될 함수
 * @param {number} delay - 지연 할 시간
 * @example
 * import { useTimeout } from '@hooks/useTimeout'
 *
 * function App() {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   useTimeout(() => {
 *     setIsOpen(true);
 *   }, 2000);
 *
 *   return (
 *     <span>
 *       {isOpen ? '2초 후 보여집니다' : '대기 중..'}
 *     </span>
 *   )
 * }
 */
export const useTimeout = (
  callback: () => void,
  delay: number | null | undefined,
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const timer = setTimeout(() => {
      callbackRef.current();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);
};
