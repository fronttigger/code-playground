import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

/**
 * @name useIsOverflow
 * @description 요소내 내용물이 넘치는 경우를 감지할 수 있는 커스텀 훅
 * @example
 * import { useIsOverflow } from '@hooks'
 *
 * function App() {
 *   const [ref, isOverflow] = useIsOverflow<HTMLDivElement>();
 *
 *   return (
 *     <Tooltip
 *       label='툴팁'
 *       position="top"
 *       isOpen={isOverflow}
 *     >
 *       <ChipWrapper ref={chipRef} marginTop={16}>
 *         {MOCK.map(({ id, name }) => (
 *           <Chip key={id}>{name}</Chip>
 *         ))}
 *       </ChipWrapper>
 *     </Tooltip>
 *   )
 * }
 */
export const useIsOverflow = <T extends HTMLElement = HTMLElement>(): [
  RefObject<T>,
  boolean,
] => {
  const [isOverflow, setIsOverflow] = useState(false);
  const ref = useRef<T>(null);
  // MEMO: scrollWidth - 실제 컨텐트 영역 크기
  // MEMO: clientWidth - 실제로 보여지고 있는 영역 크기
  const scrollWidth = ref.current?.scrollWidth;

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const isOverflow = element.scrollWidth > element.clientWidth;

      setIsOverflow(isOverflow);
    }
  }, [scrollWidth]);

  return [ref, isOverflow];
};
