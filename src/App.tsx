import React from "react";
import "./App.css";
import { RootState } from "./store";
import { increment } from "./features/counter/counterSlice";
import { connect } from "react-redux";
import { Nav } from "./components/nav";
import { handleLogin, handleLogout } from "./features/login/loginSlice";

type AppProps = {
  value: number;
  isLoggedIn: boolean;
  increment: () => void;
  handleLogin: () => void;
  handleLogout: () => void;
};

function App({
  value,
  increment,
  handleLogin,
  handleLogout,
  isLoggedIn,
}: AppProps) {
  return (
    <>
      <Nav
        isLoggedIn={isLoggedIn}
        onLogIn={handleLogin}
        onLogOut={handleLogout}
      />
      <div className="App">
        <header className="App-header">
          <p>Hello testing playground!</p>
          <p>
            <button type="button" id={"increaseCounter"} onClick={increment}>
              Increase Counter
            </button>
          </p>
          <p>counter value is: {value}</p>
        </header>
      </div>
    </>
  );
}

function mapStateToProps(state: RootState) {
  const { counter, login } = state;
  return {
    value: counter.value,
    isLoggedIn: login.isLoggedIn,
  };
}

const mapDispatchToProps = {
  increment,
  handleLogin,
  handleLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
