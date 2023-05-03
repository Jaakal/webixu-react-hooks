import { useRef, createRef, RefObject } from 'react';

export type RefObjects<T extends {}> = {
  [K in keyof T]: RefObject<T[K]>;
};

export const useRefs = <T extends {}>(): RefObjects<T> => {
  const refObjects = useRef<RefObjects<T>>(
    new Proxy({} as RefObjects<T>, {
      get<K extends keyof T>(target: RefObjects<T>, property: string | symbol) {
        if (!target[property as K]) {
          target[property as K] = createRef<T[K]>();
        }

        return target[property as K];
      },
    })
  );

  return refObjects.current as RefObjects<T>;
};
