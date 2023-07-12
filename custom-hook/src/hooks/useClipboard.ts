import { useCallback, useState } from 'react';

/**
 * @name useClipboard
 * @description 클립보드 복사와 복사 여부에 대한 상태를 관리할 수 있는 커스텀 훅
 * @example
 * import { useClipboard } from '@hooks'
 *
 * function App() {
 *   const [handleCopyClipBoard, isCopy] = useClipboard();
 *
 *   return (
 *     <span>
 *       <button onClick={() => handleCopyClipBoard('복사 내용'))}>복사</button>
 *       {isCopy ? '복사 완료' : '복사 하세요'}
 *     </span>
 *   )
 * }
 */
export const useClipboard = (): [
  ({
    text,
    onSuccess,
    onFail,
  }: {
    text: string;
    onSuccess?: (() => void) | undefined;
    onFail?: (() => void) | undefined;
  }) => Promise<void>,
  boolean,
] => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopyClipBoard = useCallback(
    async ({
      text,
      onSuccess,
      onFail,
    }: {
      text: string;
      onSuccess?: () => void;
      onFail?: () => void;
    }) => {
      try {
        await navigator.clipboard.writeText(text);

        setIsCopy(true);
        onSuccess?.();
      } catch {
        setIsCopy(false);
        onFail?.();
      }
    },
    [],
  );

  return [handleCopyClipBoard, isCopy];
};
