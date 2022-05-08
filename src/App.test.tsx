import React from "react";
import {
  render,
  screen,
  userEvent,
} from "./utils/test-utils";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/Hello testing playground!/i)).toBeInTheDocument();
  });
  it("should increment count on click", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/counter value is: 1/i)).toBeInTheDocument();
  });
});
