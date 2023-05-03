import { renderHook } from '@testing-library/react';
import { useRenderCounter } from '../src/useRenderCounter';

describe('useRenderCounter', () => {
  it('should increment the counter each time the component re-renders', () => {
    const logSpy = jest.spyOn(console, 'log');

    const { rerender } = renderHook(() => useRenderCounter('test-component'));

    expect(logSpy).toHaveBeenCalledWith('test-component', 1);

    rerender();

    expect(logSpy).toHaveBeenCalledWith('test-component', 2);

    rerender();

    expect(logSpy).toHaveBeenCalledWith('test-component', 3);

    logSpy.mockRestore();
  });
});
