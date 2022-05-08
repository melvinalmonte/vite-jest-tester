import React from "react";
import { useState } from "react";
import "./App.css";
import { RootState } from "./store";
import { increment } from "./features/counter/counterSlice";
import { connect } from "react-redux";

type AppProps = {
  value: number;
  increment: () => void;
};

function App({ value, increment }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello testing playground!</p>
        <p>
          <button type="button" onClick={increment}>
            counter value is: {value}
          </button>
        </p>
      </header>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  const { counter } = state;
  return {
    value: counter.value,
  };
}

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
