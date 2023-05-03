import React from 'react';
import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';
import { useForceRender } from '../src/useForceRender';

describe('useForceRender', () => {
  it('should re-render the component when the forceRender function is called', () => {
    let renderCount = 0;

    const TestComponent = () => {
      const forceRender = useForceRender();
      renderCount += 1;

      return (
        <div>
          <p>Render count: {renderCount}</p>
          <button onClick={forceRender}>Force re-render</button>
        </div>
      );
    };

    const { getByText } = render(<TestComponent />);

    expect(getByText(/render count/i)).toHaveTextContent('Render count: 1');

    act(() => {
      getByText(/force re-render/i).click();
    });

    expect(getByText(/render count/i)).toHaveTextContent('Render count: 2');
  });
});
