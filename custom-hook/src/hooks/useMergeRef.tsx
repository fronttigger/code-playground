import type { ForwardedRef, MutableRefObject, Ref, RefCallback } from 'react';
import { useCallback } from 'react';

type MergeRefParams<T = HTMLDivElement> =
  | MutableRefObject<T | null>
  | ForwardedRef<T | null>
  | Ref<T | null>
  | null
  | undefined;

/**
 * @name useMergedRef
 * @description element에 여러개의 ref를 선언하고 싶을 때 사용할 수 있는 커스텀 훅
 * @example
 * import { useMergedRef } from '@hooks'
 *
 * function App() {
 *   const [ref] = useHover(); // typeof function
 *   const [textRef] = useIsOverflow<HTMLDivElement>(); // typeof object
 *   const refs = useMergedRef(ref, textRef);
 *
 *   return <Component ref={refs} />
 * }
 */
export const useMergedRef = <T,>(
  ...refs: MergeRefParams<T>[]
): RefCallback<T> =>
  useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (typeof ref === 'function') {
          ref(element);

          return;
        }

        if (ref && typeof ref === 'object') {
          (ref as MutableRefObject<T>).current = element;
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );
