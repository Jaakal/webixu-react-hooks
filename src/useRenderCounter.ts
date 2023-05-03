import { useEffect, useRef } from 'react';

type RenderCounter = (id: string) => void;

export const useRenderCounter: RenderCounter = (id) => {
  const renderCounter = useRef(0);

  useEffect(() => {
    renderCounter.current += 1;
    console.log(id, renderCounter.current);
  });
};
