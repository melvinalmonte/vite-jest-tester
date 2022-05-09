import React from "react";
import { render, screen, userEvent } from "./utils/test-utils";
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
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await userEvent.click(
      component.container.querySelector("#increaseCounter") as HTMLInputElement
    );
    expect(await screen.findByText(/counter value is: 1/i)).toBeInTheDocument();
  });
  it("should change nav button from login to logout", async () => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await userEvent.click(
      component.container.querySelector("#login") as HTMLInputElement
    );
    expect(await screen.findByText(/Logout/i)).toBeInTheDocument();
  });
  it("should change nav button from logout to login", async () => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await userEvent.click(
      component.container.querySelector("#logout") as HTMLInputElement
    );
    expect(await screen.findByText(/Login/i)).toBeInTheDocument();
  });
});
