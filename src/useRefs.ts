import { useRef } from 'react';
import { RefObjects } from 'webixu-react-utils/lib/destructureRefs';
export { RefObjects } from 'webixu-react-utils/lib/destructureRefs';

type IsEmptyType<Obj extends Record<PropertyKey, unknown>> = [
  keyof Obj
] extends [never]
  ? true
  : false;

type ArrayRefs<T> = {
  [key in keyof T as Extract<
    key,
    T[key] extends Array<any> ? key : never
  >]: T[key];
};

export const useRefs = <T extends {}>(
  ...args: IsEmptyType<ArrayRefs<T>> extends true ? never : [ArrayRefs<T>]
): RefObjects<T> => {
  const refObjects = useRef<RefObjects<T>>(
    new Proxy({} as RefObjects<T>, {
      get<K extends keyof T>(target: RefObjects<T>, property: string | symbol) {
        if (args[0]?.[property as keyof ArrayRefs<T>]) {
          return args[0]?.[property as keyof ArrayRefs<T>];
        }

        if (!target[property as K]) {
          target[property as K] = useRef<T[K]>() as React.RefObject<T[K]>;
        }

        return target[property as K];
      },
    })
  );

  return refObjects.current as RefObjects<T>;
};
