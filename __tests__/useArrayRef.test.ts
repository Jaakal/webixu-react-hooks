import { renderHook, act } from '@testing-library/react';
import { useArrayRef } from '../src/useArrayRef';

describe('useArrayRef', () => {
  it('should add elements to the array and return the updated array', () => {
    const { result } = renderHook(() => useArrayRef<number>());

    expect(result.current[0].current).toEqual([]);

    act(() => {
      result.current[1](1);
      result.current[1](2);
      result.current[1](3);
    });

    expect(result.current[0].current).toEqual([1, 2, 3]);
  });

  it('should remove elements from the array when the returned function is called', () => {
    const { result } = renderHook(() => useArrayRef<number>());

    expect(result.current[0].current).toEqual([]);

    act(() => {
      const removeFromRefs = result.current[1](1);
      result.current[1](2);
      result.current[1](3);

      removeFromRefs(); // Remove element 1
    });

    expect(result.current[0].current).toEqual([2, 3]);
  });
});
