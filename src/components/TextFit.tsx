import { useState, useRef, useEffect } from 'react';

type TextFitProps = {
  text: string;
  minFontSize?: number;
  maxFontSize?: number;
};

export function TextFit({ text, minFontSize = 1, maxFontSize = 4 }: TextFitProps) {
  // Count characters
  // const length = text.length;
  // const ONE_REM = 16;

  const [fontSize, setFontSize] = useState(maxFontSize);

  const fitTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentWidth = fitTextRef.current?.parentElement?.offsetWidth ?? 0;
    const textWidth = fitTextRef.current?.offsetWidth ?? 0;
    const scaleFactor = parentWidth / textWidth;

    const newFontSize = Math.max(Math.min(maxFontSize, fontSize * scaleFactor), minFontSize);

    setFontSize(newFontSize);
  }, [text, minFontSize, maxFontSize]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={fitTextRef} style={{ fontSize: `${fontSize}rem`, maxWidth: '90vw' }}>
      {text}
    </div>
  );
}
