import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { useRefs } from '../src/useRefs';
import { RefObjects } from 'webixu-react-utils/lib/destructureRefs';

type Refs = {
  element: HTMLDivElement;
  input1: HTMLInputElement;
  input2: HTMLInputElement;
};

describe('useRefs', () => {
  it('should return an object with refs for each key to the input element', () => {
    let refs: RefObjects<Refs> | undefined;

    const TestComponent = () => {
      refs = useRefs<Refs>();

      return (
        <div
          data-testid='element'
          ref={refs.element}
        >
          <input
            data-testid='input-1'
            ref={refs.input1}
          />
          <input
            data-testid='input-2'
            ref={refs.input2}
          />
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    const element = getByTestId('element');
    const input1 = getByTestId('input-1');
    const input2 = getByTestId('input-2');

    expect(refs?.element.current).toBe(element);
    expect(refs?.input1.current).toBe(input1);
    expect(refs?.input2.current).toBe(input2);
  });
});
