import { act, renderHook } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("should increment counter", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
  it("should decrease counter", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
});
