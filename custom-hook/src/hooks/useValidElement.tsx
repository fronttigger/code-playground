import type { PropsWithChildren } from 'react';
import { isValidElement } from 'react';

/**
 * @description 리액트 엘리먼트인지 검증할 때 사용하는 커스텀 훅
 * @example
 * import { useValidElement } from '@hooks/useValidElement'
 *
 * function Component({ children }) {
 *   const validChildren = useValidElement({ children });
 *
 *   return (
 *     <span>{validChildren}</span>
 *   )
 * }
 */
export const useValidElement = ({
  children: childrenProp,
}: PropsWithChildren<unknown>) => {
  if (isValidElement(childrenProp)) {
    return childrenProp;
  }

  return <span>{childrenProp}</span>;
};
