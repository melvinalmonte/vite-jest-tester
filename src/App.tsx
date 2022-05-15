import React from "react";
import "./App.css";
import { RootState } from "./store";
import { increment } from "./features/counter/counterSlice";
import { connect } from "react-redux";
import { Nav } from "./components/nav";
import { handleLogin, handleLogout } from "./features/login/loginSlice";
import { fetchUser } from "./features/user/userSlice";

type AppProps = {
  value: number;
  isLoggedIn: boolean;
  userData: object[];
  increment: () => void;
  handleLogin: () => void;
  handleLogout: () => void;
  fetchUser: () => void;
  isLoading: string;
};

function App({
  value,
  increment,
  handleLogin,
  handleLogout,
  isLoggedIn,
  fetchUser,
  userData,
  isLoading,
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
          <button type="button" id={"fetch-users"} onClick={fetchUser}>
            Fetch User List
          </button>
          {isLoading === "loading" ? (
            <pre>Fetching user list</pre>
          ) : (
            <pre>Fetched {userData.length} users</pre>
          )}
        </header>
      </div>
    </>
  );
}

function mapStateToProps(state: RootState) {
  const { counter, login, user } = state;
  return {
    value: counter.value,
    isLoggedIn: login.isLoggedIn,
    userData: user.userData,
    isLoading: user.status,
  };
}

const mapDispatchToProps = {
  increment,
  handleLogin,
  handleLogout,
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
