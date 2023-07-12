import { useEffect, useState } from 'react';

/**
 * @name useBodyScrollLock
 * @description body element에 스크롤 여부를 지정할 수 있는 커스텀 훅
 * @param {boolean} initialLocked - 스크롤 잠금 여부
 * @example
 * import { useBodyScrollLock } from '@hooks/useBodyScrollLock'
 *
 * function App() {
 *   const [isLocked, setIsLocked] = useBodyScrollLock();
 *
 *   return (
 *     <span>
 *       {isLocked ? '스크롤 방지' : '스크롤 가능'}
 *     </span>
 *   )
 * }
 */
export const useBodyScrollLock = (
  initialLocked = true,
): [boolean, (isScrollable: boolean) => void] => {
  const [isLocked, setIsLocked] = useState(initialLocked);

  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);

  useEffect(() => {
    if (isLocked !== initialLocked) {
      setIsLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return [isLocked, setIsLocked];
};
