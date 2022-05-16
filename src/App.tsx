import React from "react";
import "./App.css";
import { RootState } from "./store";
import { increment } from "./features/counter/counterSlice";
import { connect } from "react-redux";
import { Nav } from "./components/nav";
import { handleLogin, handleLogout } from "./features/login/loginSlice";
import { fetchUser } from "./features/user/userSlice";

type userDataTypes = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type AppProps = {
  value: number;
  isLoggedIn: boolean;
  userData: userDataTypes[];
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
            <>
              <pre>Number of records fetched: {userData.length}</pre>
              {userData.length > 0 && (
                <table>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Full Name</th>
                      <th>Username</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((user, index: number) => (
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
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
