import reducer, { handleLogin, handleLogout } from "./loginSlice";

describe("loginSlice", () => {
  const initialState = {
    isLoggedIn: false,
  };
  const noOperation = {
    type: () => {},
  };
  it("should return loginSlice initial state", () => {
    const nextState = reducer(undefined, noOperation);
    return expect(nextState).toEqual(initialState);
  });
  it("should perform login action", () => {
    const nextState = reducer(undefined, handleLogin);
    return expect(nextState).toEqual({
      isLoggedIn: true,
    });
  });
  it("should perform logout action", () => {
    const nextState = reducer(
      {
        isLoggedIn: true,
      },
      handleLogout
    );
    return expect(nextState).toEqual({
      isLoggedIn: false,
    });
  });
});
