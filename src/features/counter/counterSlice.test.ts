import reducer, {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

describe("counterSlice", () => {
  const initialState = {
    value: 0,
  };
  const noOperation = {
    type: () => {},
  };

  it("should return the initial state", () => {
    const nextState = reducer(undefined, noOperation);
    return expect(nextState).toEqual(initialState);
  });
  it("Should increase counter value", () => {
    const customInitialState = { value: 1 };
    const nextState = reducer(customInitialState, increment);
    return expect(nextState).toEqual({
      value: 2,
    });
  });
  it("Should decrease counter value", () => {
    const nextState = reducer(undefined, decrement);
    return expect(nextState).toEqual({
      value: -1,
    });
  });
  it("Should increase counter value by a specific amount", () => {
    const nextState = reducer(undefined, incrementByAmount(100));
    return expect(nextState).toEqual({
      value: 100,
    });
  });
  it("Should decrease counter value by a specific amount", () => {
    const nextState = reducer(undefined, decrementByAmount(100));
    return expect(nextState).toEqual({
      value: -100,
    });
  });
});
