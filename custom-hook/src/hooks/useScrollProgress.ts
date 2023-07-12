import { useEffect, useRef, useState } from 'react';

const FULL_PERCENT = 100;
const ZERO_PERCENT = 0;
const FINISH_PERCENT = 98;

export const useScrollProgress = ({
  initialPercent = ZERO_PERCENT,
  finishPercent = FINISH_PERCENT,
}: {
  initialPercent?: number;
  finishPercent?: number;
}) => {
  const [percent, setPercent] = useState(initialPercent);
  const currentHeight = useRef<number>(0);
  const isDone = percent > finishPercent;

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (currentHeight.current > scrollTop) {
      return;
    }

    currentHeight.current = scrollTop;

    // MEMO: 스크롤바 크기 = 내용 전체의 높이 - 스크롤바를 제외한 클라이언트 높이
    const windowHeight = scrollHeight - clientHeight;
    // MEMO: 스크롤바 크기 기준으로 scrollTop이 내려온만큼에 따라 계산 (계산시 소수점 둘째 자리까지)
    // MEMO: 소수점 둘째자리 까지이므로, 100을 곱하여 정수화
    const currentPercent = (scrollTop / windowHeight) * 100;

    if (initialPercent >= currentPercent) {
      return;
    }

    setPercent(currentPercent);
  };

  useEffect(() => {
    if (isDone) {
      setPercent(FULL_PERCENT);

      return;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDone]);

  useEffect(() => {
    if (initialPercent !== undefined) {
      setPercent(initialPercent);
    }
  }, [initialPercent]);

  return { percent, isDone };
};
